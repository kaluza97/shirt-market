export interface AlertProps {
  isVisible?: boolean;
  alertMessage: string;
  alertType: 'success' | 'info' | 'warning' | 'error';
}
