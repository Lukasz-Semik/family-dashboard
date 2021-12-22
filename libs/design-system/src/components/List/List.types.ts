import React from 'react';

export interface ListProps<ItemType> {
  items: ItemType[];
  renderNoItemsMessage?: () => React.ReactElement;
  renderItem: (item: ItemType) => React.ReactElement;
  renderHeaders?: () => React.ReactElement;
}

interface ListItemChildrenRenderProps {
  isHovered: boolean;
  isFocused: boolean;
}

export interface ListItemProps {
  isInteractive?: boolean;
  children: (renderProps: ListItemChildrenRenderProps) => React.ReactNode;
  role?: React.AriaRole;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}
