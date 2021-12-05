import { useRef } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

const VIRTUAL_PADDING = 30;

const modifiers = [
  { name: 'preventOverflow', enabled: false },
  { name: 'hide', enabled: false },
  {
    name: 'flip',
    options: {
      padding: {
        bottom: VIRTUAL_PADDING,
      },
    },
  },
  {
    name: 'offset',
    options: {
      offset: [0, 8],
    },
  },
];

export const usePopperConfig = (placement: Placement = 'bottom-start') => {
  const wrapperElementRef = useRef<HTMLDivElement>(null);
  const menuElementRef = useRef<HTMLUListElement>(null);

  const config = {
    modifiers,
    placement,
  };

  const { styles, attributes } = usePopper(
    wrapperElementRef.current,
    menuElementRef.current,
    config
  );

  return {
    menuAttributes: {
      style: styles.popper,
      ...attributes.popper,
    },
    wrapperElementRef,
    menuElementRef,
  };
};
