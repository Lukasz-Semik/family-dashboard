import { StyledList } from '../List.styled';
import { ListProps } from '../List.types';

export function ListStandard<ItemType>({
  items,
  renderNoItemsMessage,
  renderItem,
  renderHeaders,
}: ListProps<ItemType>) {
  if (!items.length) {
    return <div>{renderNoItemsMessage?.()}</div>;
  }

  return (
    <StyledList>
      {renderHeaders?.()}
      {items.map((item) => renderItem(item))}
    </StyledList>
  );
}
