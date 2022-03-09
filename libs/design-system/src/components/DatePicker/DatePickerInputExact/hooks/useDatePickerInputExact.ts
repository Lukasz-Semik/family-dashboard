import { useCallback, useMemo, useRef, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { DateUtils } from 'react-day-picker';
import dayjs from 'dayjs';

import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';

import { useIsResolution } from '../../../../hooks/useIsResolution';
import { dsStyles } from '../../../../utils/styles';

interface Args {
  value: string;
  onChange: (value: string) => void;
  onClose?: () => void;
  onOpen?: () => void;
}

export const useDatePickerInputExact = ({
  value,
  onChange,
  onClose,
  onOpen,
}: Args) => {
  const isMobileResolution = useIsResolution(Number(dsStyles.breakpoints.xs));

  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const openPicker = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  const closePicker = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const outsideWrapperRef = useOnclickOutside(() => {
    if (!isMobileResolution && isOpen) {
      setTimeout(closePicker, 0);
    }
  });

  const selectedDate = useMemo(() => {
    const parsedValue = dayjs(value, FULL_DATE_FORMAT).toDate();

    if (DateUtils.isDate(parsedValue)) {
      return parsedValue;
    }
    return undefined;
  }, [value]);

  const handleChange = useCallback(
    (providedValue: string) => {
      onChange(providedValue);
    },
    [onChange]
  );

  return {
    isMobileResolution,
    isOpen,
    inputRef,
    focusInput,
    openPicker,
    closePicker,
    outsideWrapperRef,
    selectedDate,
    handleChange,
  };
};
