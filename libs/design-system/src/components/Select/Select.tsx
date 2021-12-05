import { useIsResolution } from '../../hooks/useIsResolution';
import { dsStyles } from '../../utils/styles';
import { SelectItemBase, SelectProps } from './Select.types';
import { SelectDesktop } from './SelectDesktop/SelectDesktop';
import { SelectMobile } from './SelectMobile/SelectMobile';

export function Select<T extends SelectItemBase>(props: SelectProps<T>) {
  const isMobile = useIsResolution(Number(dsStyles.breakpoints.xs));

  return isMobile ? (
    <SelectMobile<T> {...props} />
  ) : (
    <SelectDesktop<T> {...props} />
  );
}
