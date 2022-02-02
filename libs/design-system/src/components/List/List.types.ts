import React from 'react';

export interface ListProps<ItemType> {
  items: ItemType[];
  renderNoItemsMessage?: () => React.ReactNode;
  renderItem: (item: ItemType) => React.ReactNode;
  renderHeaders?: () => React.ReactNode;
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
