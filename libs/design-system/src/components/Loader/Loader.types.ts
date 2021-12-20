export interface LoaderProps {
  size?: number;
  color?: string;
}

export interface LoaderFullScreenProps extends LoaderProps {
  content?: React.ReactNode;
}
