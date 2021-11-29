import { SelectItemBase, SelectProps } from './Select.types';
import { SelectDesktop } from './SelectDesktop/SelectDesktop';

export function Select<T extends SelectItemBase>(props: SelectProps<T>) {
  return <SelectDesktop {...props} />;
}
