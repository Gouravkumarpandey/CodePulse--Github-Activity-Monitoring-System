import { BadgeVariant } from '@/components/common/Badge';

/**
 * Get badge color variant based on status
 */
export const getStatusColor = (status: string): BadgeVariant => {
  switch (status) {
    case 'OK':
      return 'success';
    case 'WARNING':
      return 'warning';
    case 'VIOLATION':
      return 'danger';
    default:
      return 'default';
  }
};

/**
 * Get background color class for status
 */
export const getStatusBgColor = (status: string): string => {
  switch (status) {
    case 'OK':
      return 'bg-green-50';
    case 'WARNING':
      return 'bg-yellow-50';
    case 'VIOLATION':
      return 'bg-red-50';
    default:
      return 'bg-gray-50';
  }
};

/**
 * Get text color class for status
 */
export const getStatusTextColor = (status: string): string => {
  switch (status) {
    case 'OK':
      return 'text-green-800';
    case 'WARNING':
      return 'text-yellow-800';
    case 'VIOLATION':
      return 'text-red-800';
    default:
      return 'text-gray-800';
  }
};

/**
 * Get border color class for status
 */
export const getStatusBorderColor = (status: string): string => {
  switch (status) {
    case 'OK':
      return 'border-green-500';
    case 'WARNING':
      return 'border-yellow-500';
    case 'VIOLATION':
      return 'border-red-500';
    default:
      return 'border-gray-500';
  }
};
