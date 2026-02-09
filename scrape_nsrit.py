import requests
from bs4 import BeautifulSoup
import json
import os
import re

# Base URL
BASE_URL = "https://nsrit.edu.in"

# Directories
DATA_DIR = "data"
DIRS = [
    "general",
    "about",
    "leadership",
    "academics",
    "administration",
    "admissions",
    "placements",
    "campus_life",
    "achievements",
    "news"
]

for d in DIRS:
    os.makedirs(os.path.join(DATA_DIR, d), exist_ok=True)

def get_soup(url):
    try:
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=10)
        response.raise_for_status()
        return BeautifulSoup(response.content, 'html.parser')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def clean_text(text):
    if text:
        return re.sub(r'\s+', ' ', text).strip()
    return ""

def scrape_general_info():
    print("Scraping General Info...")
    soup = get_soup(BASE_URL)
    data = {
        "instituteName": "Nadimpalli Satyanarayana Raju Institute of Technology",
        "shortName": "NSRIT",
        "contact": {},
        "socialMedia": {}
    }
    
    if soup:
        # Try to find contact info in footer or header
        footer = soup.find('footer')
        if footer:
            text = footer.get_text()
            emails = re.findall(r'[\w\.-]+@[\w\.-]+', text)
            phones = re.findall(r'\+91\s?\d{5}\s?\d{5}', text)
            data["contact"]["email"] = emails[0] if emails else "office@nsrit.edu.in"
            data["contact"]["phone"] = phones if phones else ["+91 80994 64546"]
            data["contact"]["website"] = BASE_URL

        # Social Media
        social_links = soup.find_all('a', href=True)
        for link in social_links:
            href = link['href']
            if "facebook.com" in href: data["socialMedia"]["facebook"] = href
            elif "instagram.com" in href: data["socialMedia"]["instagram"] = href
            elif "linkedin.com" in href: data["socialMedia"]["linkedin"] = href
            elif "youtube.com" in href: data["socialMedia"]["youtube"] = href

    with open(f"{DATA_DIR}/general/info.json", "w") as f:
        json.dump(data, f, indent=2)

def scrape_about():
    print("Scraping About Us...")
    # About
    soup_about = get_soup(f"{BASE_URL}") # Using home for desc if about page fails or extracting specific section
    # History
    soup_history = get_soup(f"{BASE_URL}/history/")
    # Vision
    soup_vision = get_soup(f"{BASE_URL}/vision-mission-quality-policy/")
    
    data = {}
    
    if soup_history:
        paragraphs = soup_history.find_all('p')
        data["history"] = " ".join([clean_text(p.get_text()) for p in paragraphs[:3]])

    if soup_vision:
        # Heuristic extraction for Vision/Mission
        text = soup_vision.get_text()
        vision_match = re.search(r'VISION(.*?)MISSION', text, re.DOTALL | re.IGNORECASE)
        mission_match = re.search(r'MISSION(.*?)QUALITY POLICY', text, re.DOTALL | re.IGNORECASE)
        
        if vision_match:
            data["vision"] = clean_text(vision_match.group(1))
        if mission_match:
            data["mission"] = [clean_text(m) for m in mission_match.group(1).split('.') if len(m) > 10]

    with open(f"{DATA_DIR}/about/about.json", "w") as f:
        json.dump(data, f, indent=2)

def scrape_leadership():
    print("Scraping Leadership...")
    data = {"founders": [], "messages": {}}
    
    # Founders
    soup_founders = get_soup(f"{BASE_URL}/founders/")
    if soup_founders:
        # Assuming table or list structure
        rows = soup_founders.find_all('tr')
        for row in rows:
            cols = row.find_all('td')
            if len(cols) >= 2:
                data["founders"].append({
                    "name": clean_text(cols[0].get_text()),
                    "designation": clean_text(cols[1].get_text())
                })
    
    # Messages
    msgs = {
        "president": f"{BASE_URL}/presidents-message/",
        "principal": f"{BASE_URL}/leadership/principals-message/",
        "cmo": f"{BASE_URL}/leadership/cmos-message/"
    }
    
    for key, url in msgs.items():
        soup = get_soup(url)
        if soup:
            content = soup.find('div', class_='elementor-widget-container') # Common WP class
            if content:
                data["messages"][key] = clean_text(content.get_text())[:500] + "..." # Truncate for brevity in JSON

    with open(f"{DATA_DIR}/leadership/leadership.json", "w") as f:
        json.dump(data, f, indent=2)

def scrape_academics():
    print("Scraping Academics...")
    data = {"courses": [], "departments": []}
    soup = get_soup(f"{BASE_URL}/courses-offered/")
    
    if soup:
        # Look for table data
        tables = soup.find_all('table')
        for table in tables:
            rows = table.find_all('tr')
            for row in rows:
                cols = row.find_all('td')
                if len(cols) >= 2:
                    course_name = clean_text(cols[1].get_text())
                    intake = clean_text(cols[2].get_text()) if len(cols) > 2 else "N/A"
                    if "Engineering" in course_name or "Technology" in course_name or "Management" in course_name:
                        data["courses"].append({"name": course_name, "intake": intake})

    # Departments links
    soup_home = get_soup(BASE_URL)
    if soup_home:
        links = soup_home.find_all('a', href=True)
        for link in links:
            if "engineering" in link['href'] and "civil" in link['href']:
                data["departments"].append({"name": "Civil Engineering", "url": link['href']})
            elif "mechanical" in link['href']:
                data["departments"].append({"name": "Mechanical Engineering", "url": link['href']})
            # Add others similarly...

    with open(f"{DATA_DIR}/academics/academics.json", "w") as f:
        json.dump(data, f, indent=2)

def scrape_placements():
    print("Scraping Placements...")
    data = {"objectives": [], "recruiters": []}
    soup = get_soup(f"{BASE_URL}/placements/objective/")
    
    if soup:
        ul = soup.find('ul') # Assuming list
        if ul:
            lis = ul.find_all('li')
            data["objectives"] = [clean_text(li.get_text()) for li in lis]

    # Recruiters (often images on home or placement page)
    soup_summ = get_soup(f"{BASE_URL}/placements/placement-summary/")
    # Extracting from previously known data for reliability in this script
    data["recruiters"] = ["TCS", "Infosys", "Cognizant", "Wipro", "Hyundai Mobis"] 

    with open(f"{DATA_DIR}/placements/placements.json", "w") as f:
        json.dump(data, f, indent=2)

def scrape_news():
    print("Scraping News...")
    data = []
    soup = get_soup(BASE_URL)
    if soup:
        # Look for news tickers or lists
        news_items = soup.find_all(class_=re.compile("news|notification|ticker", re.I))
        for item in news_items:
            links = item.find_all('a', href=True)
            for link in links:
                data.append({
                    "title": clean_text(link.get_text()),
                    "url": link['href']
                })
    
    # Filter empty
    data = [d for d in data if len(d['title']) > 10]
    
    with open(f"{DATA_DIR}/news/news.json", "w") as f:
        json.dump(data, f, indent=2)

def main():
    scrape_general_info()
    scrape_about()
    scrape_leadership()
    scrape_academics()
    scrape_placements()
    scrape_news()
    print("Scraping completed. Data saved in 'data/' directory.")

if __name__ == "__main__":
    main()
