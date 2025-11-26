/**
 * ErrorState Component - Error handling UI
 * Displays error messages with recovery options
 */

import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';

interface ErrorStateProps {
  /**
   * Error title
   * @default 'Something went wrong'
   */
  title?: string;
  
  /**
   * Detailed error message
   */
  message?: string;
  
  /**
   * Error code or status
   */
  code?: string | number;
  
  /**
   * Callback function when retry button is clicked
   */
  onRetry?: () => void;
  
  /**
   * Show retry button
   * @default true
   */
  showRetry?: boolean;
  
  /**
   * Show home button
   * @default true
   */
  showHome?: boolean;
  
  /**
   * Custom actions to render
   */
  actions?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function ErrorState({
  title = 'Something went wrong',
  message = 'We encountered an unexpected error. Please try again.',
  code,
  onRetry,
  showRetry = true,
  showHome = true,
  actions,
  className = '',
}: ErrorStateProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center px-4 bg-surface ${className}`}>
      <div className="w-full max-w-md text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
        </div>

        {/* Error Code */}
        {code && (
          <p className="text-sm font-semibold text-corporate-textSecondary dark:text-gray-400 mb-2">
            Error {code}
          </p>
        )}

        {/* Title */}
        <h1 className="text-3xl font-bold text-corporate-navy dark:text-white mb-3">
          {title}
        </h1>

        {/* Message */}
        <p className="text-corporate-textSecondary dark:text-gray-400 mb-8 leading-relaxed">
          {message}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {showRetry && onRetry && (
            <Button
              onClick={onRetry}
              variant="primary"
              className="flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </Button>
          )}

          {showHome && (
            <Link href="/">
              <Button
                variant={showRetry && onRetry ? 'secondary' : 'primary'}
                className="flex items-center justify-center gap-2 w-full"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Button>
            </Link>
          )}
        </div>

        {/* Custom Actions */}
        {actions && <div className="mt-6">{actions}</div>}

        {/* Help Text */}
        <p className="mt-8 text-xs text-corporate-textSecondary dark:text-gray-400">
          If the problem persists, please contact{' '}
          <a
            href="mailto:support@nsrit.edu"
            className="text-corporate-blue hover:text-blue-700 dark:hover:text-blue-400 underline"
          >
            support@nsrit.edu
          </a>
        </p>
      </div>
    </div>
  );
}

/**
 * 404 Error State - Page not found
 */
interface NotFoundErrorProps {
  onRetry?: () => void;
  className?: string;
}

export function NotFoundError({ onRetry, className = '' }: NotFoundErrorProps) {
  return (
    <ErrorState
      title="Page Not Found"
      message="The page you're looking for doesn't exist or has been moved."
      code="404"
      onRetry={onRetry}
      showRetry={!!onRetry}
      showHome={true}
      className={className}
    />
  );
}

/**
 * 500 Error State - Server error
 */
interface ServerErrorProps {
  onRetry?: () => void;
  className?: string;
}

export function ServerError({ onRetry, className = '' }: ServerErrorProps) {
  return (
    <ErrorState
      title="Server Error"
      message="Something went wrong on our end. Our team has been notified. Please try again later."
      code="500"
      onRetry={onRetry}
      showRetry={!!onRetry}
      showHome={true}
      className={className}
    />
  );
}

/**
 * Connection Error State
 */
interface ConnectionErrorProps {
  onRetry?: () => void;
  className?: string;
}

export function ConnectionError({ onRetry, className = '' }: ConnectionErrorProps) {
  return (
    <ErrorState
      title="Connection Error"
      message="Unable to connect to the server. Please check your internet connection and try again."
      onRetry={onRetry}
      showRetry={!!onRetry}
      showHome={true}
      className={className}
    />
  );
}
