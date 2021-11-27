export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  label: React.ReactNode;
}
