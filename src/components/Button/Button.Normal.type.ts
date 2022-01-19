export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonNormalProps {
  label: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: ButtonType;
}
