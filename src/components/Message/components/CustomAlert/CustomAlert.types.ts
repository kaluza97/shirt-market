export interface AlertProps {
  visibleProp?: boolean;
  alertMessage: string;
  alertType: 'success' | 'info' | 'warning' | 'error';
}
