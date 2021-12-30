export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  hasError?: boolean;
  label: React.ReactNode;
}
