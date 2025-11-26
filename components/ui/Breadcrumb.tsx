/**
 * Breadcrumb Component - Navigation hierarchy
 * Shows the user's current location within the site hierarchy
 */

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  /**
   * Custom breadcrumb items
   * If not provided, will auto-generate from pathname
   */
  items?: BreadcrumbItem[];
  
  /**
   * Show home icon
   * @default true
   */
  showHome?: boolean;
  
  /**
   * Max items to display (rest hidden in dropdown)
   * @default 5
   */
  maxItems?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Show on dark background
   * @default false
   */
  dark?: boolean;
}

/**
 * Generate breadcrumb items from pathname
 */
function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .slice(0, -1); // Remove last segment as it's the current page

  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  let path = '';
  for (const segment of segments) {
    path += `/${segment}`;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({ label, href: path });
  }

  return breadcrumbs;
}

/**
 * Format label for display
 */
function formatLabel(label: string): string {
  return label
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumb({
  items,
  showHome = true,
  maxItems = 5,
  className = '',
  dark = false,
}: BreadcrumbProps) {
  const pathname = usePathname();

  // Use provided items or generate from pathname
  const breadcrumbs = items || generateBreadcrumbsFromPath(pathname);

  // Hide breadcrumb if only on home
  if (breadcrumbs.length === 0 || pathname === '/') {
    return null;
  }

  // Determine if we need to collapse items
  const shouldCollapse = breadcrumbs.length > maxItems && maxItems > 2;
  
  let displayItems = breadcrumbs;
  if (shouldCollapse) {
    // Keep first and last items, collapse middle ones
    displayItems = [
      breadcrumbs[0],
      ...breadcrumbs.slice(-(maxItems - 1)),
    ];
  }

  return (
    <nav
      className={`flex items-center gap-2 text-sm overflow-x-auto py-3 px-4 md:px-6 ${
        dark
          ? 'bg-corporate-navy/10 dark:bg-white/10'
          : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'
      } ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2">
        {showHome && (
          <li>
            <Link
              href="/"
              className={`p-1.5 rounded-md transition-colors ${
                dark
                  ? 'text-white/70 hover:bg-white/10'
                  : 'text-corporate-textSecondary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-label="Home"
              title="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
        )}

        {displayItems.map((item, index) => {
          const isCollapsed =
            shouldCollapse &&
            index > 0 &&
            index < displayItems.length - (maxItems - 2);
          const isCurrent = item.current || index === displayItems.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <ChevronRight
                className={`w-4 h-4 flex-shrink-0 ${
                  dark
                    ? 'text-white/30'
                    : 'text-gray-300 dark:text-gray-700'
                }`}
              />

              {isCollapsed ? (
                <span
                  className={`px-2 py-1 rounded transition-colors ${
                    dark
                      ? 'text-white/50 hover:bg-white/10'
                      : 'text-corporate-textSecondary dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  title="More items"
                >
                  ...
                </span>
              ) : item.href && !isCurrent ? (
                <Link
                  href={item.href}
                  className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                    dark
                      ? 'text-white/70 hover:bg-white/10'
                      : 'text-corporate-textSecondary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {formatLabel(item.label)}
                </Link>
              ) : (
                <span
                  className={`px-2 py-1 rounded whitespace-nowrap font-semibold ${
                    dark
                      ? 'text-white'
                      : 'text-corporate-navy dark:text-white'
                  }`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {formatLabel(item.label)}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Breadcrumb variations
 */

/**
 * Minimal breadcrumb (text only, no icons)
 */
export function MinimalBreadcrumb(props: BreadcrumbProps) {
  return <Breadcrumb {...props} showHome={false} />;
}

/**
 * Dark breadcrumb for use on dark backgrounds
 */
export function DarkBreadcrumb(props: BreadcrumbProps) {
  return <Breadcrumb {...props} dark={true} />;
}

/**
 * Inline breadcrumb (for use within page content)
 */
export function InlineBreadcrumb(props: BreadcrumbProps) {
  return (
    <Breadcrumb
      {...props}
      className={`${props.className} bg-transparent border-0 px-0 py-1`}
    />
  );
}
