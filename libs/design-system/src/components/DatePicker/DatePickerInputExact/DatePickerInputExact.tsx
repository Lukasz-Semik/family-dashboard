import DayPicker from 'react-day-picker';
import InputMask from 'react-input-mask';
import dayjs from 'dayjs';

import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';

import { usePopperConfig } from '../../../hooks/usePopperConfig';
import { InputStandard } from '../../Input/InputStandard/InputStandard';
import { StyledDay, StyledWrapper } from './DatePickerInputExact.styled';
import { DatePickerInputExactProps } from './DatePickerInputExact.types';
import { useDatePickerInputExact } from './hooks/useDatePickerInputExact';
import { useDatePickerInputExactA11y } from './hooks/useDatePickerInputExactA11y';
import { PickerWrapper } from './PickerWrapper/PickerWrapper';

export function DatePickerInputExact({
  value,
  onChange,
  label,
  renderError,
  hasError,
  onClose,
  labelBgColor,
  onOpen,
}: DatePickerInputExactProps) {
  const { menuAttributes, wrapperElementRef, menuElementRef } =
    usePopperConfig();

  const {
    isMobileResolution,
    isOpen,
    inputRef,
    focusInput,
    openPicker,
    closePicker,
    outsideWrapperRef,
    selectedDate,
    handleChange,
  } = useDatePickerInputExact({ value, onChange, onClose, onOpen });

  const { handleKeyOnInput, handleKeyOnCaption, handleKeyOnDay } =
    useDatePickerInputExactA11y({
      isOpen,
      focusInput,
      closePicker,
      openPicker,
    });

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange(e.target.value);

  return (
    <div ref={outsideWrapperRef}>
      <StyledWrapper ref={wrapperElementRef}>
        <InputMask
          mask="99-99-9999"
          value={value}
          onChange={onInputChange}
          onFocus={openPicker}
          onKeyDown={handleKeyOnInput}
          placeholder="DD-MM-YYY"
          onClick={openPicker}
        >
          {() => (
            <InputStandard
              ref={inputRef}
              labelBgColor={labelBgColor}
              label={label}
              onChange={onInputChange}
              value={value}
              onFocus={openPicker}
              onKeyDown={handleKeyOnInput}
              placeholder="DD-MM-YYY"
              onClick={openPicker}
              hasError={hasError}
            />
          )}
        </InputMask>

        <PickerWrapper
          ref={menuElementRef}
          menuAttributes={menuAttributes}
          isOpen={isOpen}
          closePicker={() => {
            focusInput();
            closePicker();
          }}
          label={label}
          isMobile={isMobileResolution}
        >
          <DayPicker
            onDayClick={(val, modifiers) => {
              if (modifiers.disabled) {
                return;
              }

              focusInput();
              closePicker();
              handleChange(dayjs(val).format(FULL_DATE_FORMAT).toString());
            }}
            selectedDays={selectedDate}
            month={selectedDate}
            disabledDays={{ before: new Date() }}
            onKeyDown={handleKeyOnCaption}
            renderDay={(date) => {
              return <StyledDay>{dayjs(date).format('D')}</StyledDay>;
            }}
            onDayKeyDown={(_, __, e) => {
              handleKeyOnDay(e);
            }}
          />
        </PickerWrapper>

        {renderError?.({ hasError })}
      </StyledWrapper>
    </div>
  );
}
