/**
 * EmptyState Component - Empty data UI
 * Displays when no data is available with optional action
 */

import { Inbox, Search } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';

interface EmptyStateProps {
  /**
   * Icon to display
   */
  icon?: React.ReactNode;
  
  /**
   * Empty state title
   * @default 'No data found'
   */
  title?: string;
  
  /**
   * Detailed message
   */
  message?: string;
  
  /**
   * Type of empty state
   * @default 'empty'
   */
  variant?: 'empty' | 'no-search-results' | 'no-items';
  
  /**
   * Primary action button text
   */
  actionLabel?: string;
  
  /**
   * Callback for primary action
   */
  onAction?: () => void;
  
  /**
   * Link for action (alternative to onAction)
   */
  actionLink?: string;
  
  /**
   * Secondary action button text
   */
  secondaryActionLabel?: string;
  
  /**
   * Callback for secondary action
   */
  onSecondaryAction?: () => void;
  
  /**
   * Show illustration background
   * @default true
   */
  showIllustration?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function EmptyState({
  icon,
  title = 'No data found',
  message,
  variant = 'empty',
  actionLabel,
  onAction,
  actionLink,
  secondaryActionLabel,
  onSecondaryAction,
  showIllustration = true,
  className = '',
}: EmptyStateProps) {
  // Default icons based on variant
  const defaultIcon = {
    empty: <Inbox className="w-16 h-16" />,
    'no-search-results': <Search className="w-16 h-16" />,
    'no-items': <Inbox className="w-16 h-16" />,
  }[variant];

  // Default messages based on variant
  const defaultMessage = {
    empty: 'There\'s nothing here yet. Check back soon or create something new.',
    'no-search-results': 'No results found for your search. Try different keywords.',
    'no-items': 'No items available at the moment.',
  }[variant];

  const displayIcon = icon || defaultIcon;
  const displayMessage = message || defaultMessage;

  const renderAction = () => {
    if (!actionLabel) return null;

    if (actionLink) {
      return (
        <Link href={actionLink}>
          <Button variant="primary" className="w-full sm:w-auto">
            {actionLabel}
          </Button>
        </Link>
      );
    }

    if (onAction) {
      return (
        <Button
          onClick={onAction}
          variant="primary"
          className="w-full sm:w-auto"
        >
          {actionLabel}
        </Button>
      );
    }

    return null;
  };

  return (
    <div
      className={`flex items-center justify-center min-h-64 px-4 ${
        showIllustration ? 'bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent' : 'bg-transparent'
      } rounded-lg ${className}`}
    >
      <div className="w-full max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="text-gray-400 dark:text-gray-600">
            {displayIcon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-corporate-navy dark:text-white mb-2">
          {title}
        </h3>

        {/* Message */}
        <p className="text-corporate-textSecondary dark:text-gray-400 mb-8 leading-relaxed">
          {displayMessage}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {renderAction()}

          {secondaryActionLabel && onSecondaryAction && (
            <Button
              onClick={onSecondaryAction}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {secondaryActionLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * No Search Results Empty State
 */
interface NoSearchResultsProps {
  searchQuery: string;
  onClear?: () => void;
  className?: string;
}

export function NoSearchResults({
  searchQuery,
  onClear,
  className = '',
}: NoSearchResultsProps) {
  return (
    <EmptyState
      variant="no-search-results"
      title="No results found"
      message={`We couldn't find anything matching "${searchQuery}". Try adjusting your search terms.`}
      actionLabel={onClear ? 'Clear Search' : undefined}
      onAction={onClear}
      className={className}
    />
  );
}

/**
 * No Items Empty State
 */
interface NoItemsProps {
  itemType?: string;
  actionLabel?: string;
  onAction?: () => void;
  actionLink?: string;
  className?: string;
}

export function NoItems({
  itemType = 'items',
  actionLabel = 'Create New',
  onAction,
  actionLink,
  className = '',
}: NoItemsProps) {
  return (
    <EmptyState
      variant="no-items"
      title={`No ${itemType} found`}
      message={`There are no ${itemType} available right now. ${
        actionLabel ? `Click the button below to create one.` : ''
      }`}
      actionLabel={actionLabel}
      onAction={onAction}
      actionLink={actionLink}
      className={className}
    />
  );
}

/**
 * Upcoming Events Empty State
 */
interface NoUpcomingEventsProps {
  className?: string;
}

export function NoUpcomingEvents({ className = '' }: NoUpcomingEventsProps) {
  return (
    <EmptyState
      variant="no-items"
      title="No upcoming events"
      message="Check back soon for upcoming events and announcements."
      className={className}
    />
  );
}
