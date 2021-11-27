import LoaderSpinner from 'react-loader-spinner';

import { dsStyles } from '../../utils/styles';
import { LoaderProps } from './Loader.types';

export const Loader = ({
  size = 50,
  color = dsStyles.colors.violet2,
}: LoaderProps) => {
  return (
    <div>
      <LoaderSpinner type="Grid" color={color} height={size} width={size} />
    </div>
  );
};
