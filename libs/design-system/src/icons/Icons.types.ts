export interface IconProps {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

export interface IconWrapperProps extends IconProps {
  children: React.ReactNode;
}
