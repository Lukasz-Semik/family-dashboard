import { useCallback, useEffect } from 'react';

import { KeyCode } from '@family-dashboard/global/const';

interface Args {
  isOpen: boolean;
  closePicker: () => void;
  focusInput: () => void;
  openPicker: () => void;
}

export const useDatePickerInputExactA11y = ({
  isOpen,
  closePicker,
  focusInput,
  openPicker,
}: Args) => {
  useEffect(() => {
    const unsetFocusableElementsAccordingToDesigns = () => {
      const navs = document.getElementsByClassName('DayPicker-NavButton');

      navs.item(0)?.setAttribute('tabindex', '-1');
      navs.item(1)?.setAttribute('tabindex', '-1');
    };

    if (isOpen) {
      unsetFocusableElementsAccordingToDesigns();
    }
  }, [isOpen]);

  const handleKeyOnInput = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.shiftKey && e.key === KeyCode.Tab) {
        e.preventDefault();
        return;
      }

      if (e.key === KeyCode.Escape || e.key === KeyCode.Enter) {
        focusInput();
        closePicker();
        return;
      }

      if (e.key !== KeyCode.Tab) {
        openPicker();
      }
    },
    [closePicker, openPicker, focusInput]
  );

  const handleKeyOnCaption = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === KeyCode.Escape) {
        focusInput();
        closePicker();
      }
    },
    [closePicker, focusInput]
  );

  const handleKeyOnDay = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === KeyCode.Tab) {
        e.preventDefault();
        setTimeout(focusInput, 0);
      }

      if (e.key === KeyCode.Escape) {
        focusInput();
        closePicker();
      }
    },
    [closePicker, focusInput]
  );

  return {
    handleKeyOnInput,
    handleKeyOnCaption,
    handleKeyOnDay,
  };
};
