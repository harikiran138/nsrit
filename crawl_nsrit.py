import requests
from bs4 import BeautifulSoup
import json
import os
import time
from urllib.parse import urljoin, urlparse

BASE_URL = "https://nsrit.edu.in"
DOMAIN = "nsrit.edu.in"
CRAWL_DATA_DIR = "data/full_site_scrape"
os.makedirs(CRAWL_DATA_DIR, exist_ok=True)

visited_urls = set()
to_crawl = [BASE_URL + "/"]

def is_internal(url):
    parsed = urlparse(url)
    return parsed.netloc == DOMAIN or parsed.netloc == ""

def is_scrapable(url):
    # Skip binary files
    exts = ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.zip', '.docx', '.xlsx', '.xls', '.mp4']
    path = urlparse(url).path.lower()
    if any(path.endswith(ext) for ext in exts):
        return False
    if "/wp-content/uploads/" in url: # Mostly media
        return False
    return True

def scrape_page(url):
    if not is_scrapable(url):
        return None, []
        
    try:
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"}
        response = requests.get(url, headers=headers, timeout=15)
        
        # Check content type
        content_type = response.headers.get('Content-Type', '').lower()
        if 'text/html' not in content_type:
            return None, []

        if response.status_code != 200:
            return None, []
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract metadata
        title = soup.title.string if soup.title else ""
        
        # Extract main content
        # Standard WordPress / Elementor containers
        content_area = (soup.find('main') or 
                        soup.find('article') or 
                        soup.find('div', class_='elementor-section-wrap') or 
                        soup.find('div', class_='content-area') or
                        soup.find('div', id='content'))
        
        if not content_area:
            content_area = soup.body
            
        if not content_area:
            return None, []

        # Clean up unwanted tags from a clone to preserve soup for links
        import copy
        content_copy = copy.copy(content_area)
        for tag in content_copy.find_all(['script', 'style', 'nav', 'footer', 'header', 'aside']):
            tag.decompose()
            
        text_content = content_copy.get_text(separator=' ', strip=True)
        
        # Find all internal links
        links = []
        for a in soup.find_all('a', href=True):
            href = a['href']
            full_url = urljoin(BASE_URL, href).split('#')[0].split('?')[0]
            
            if is_internal(full_url) and full_url.startswith(BASE_URL):
                links.append(full_url)
        
        return {
            "url": url,
            "title": title.strip() if title else "No Title",
            "content": text_content
        }, list(set(links))
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return None, []

def main():
    count = 0
    max_pages = 300 # Deep crawl
    
    while to_crawl and count < max_pages:
        url = to_crawl.pop(0)
        
        # Normalize
        if url.endswith('/') == False and not any(url.lower().endswith(ext) for ext in ['.php', '.html']):
             url += '/'

        if url in visited_urls:
            continue
            
        print(f"[{count+1}] Scraping: {url}")
        page_data, new_links = scrape_page(url)
        visited_urls.add(url)
        
        if page_data:
            # Save individual page data
            path = urlparse(url).path.strip('/')
            filename = path.replace('/', '_') or "home"
            
            with open(f"{CRAWL_DATA_DIR}/{filename}.json", "w") as f:
                json.dump(page_data, f, indent=2)
            
            # Add new links to crawl
            for link in new_links:
                if link not in visited_urls and link not in to_crawl:
                    to_crawl.append(link)
            
            count += 1
            time.sleep(0.2) 

    print(f"Crawl finished. Scraped {count} pages.")
    
    # Generate index
    with open("data/crawl_index.json", "w") as f:
        json.dump(list(visited_urls), f, indent=2)

if __name__ == "__main__":
    main()
