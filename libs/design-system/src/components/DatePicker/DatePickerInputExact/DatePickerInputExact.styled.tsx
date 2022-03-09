import styled from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography16SemiBold } from '../../../utils/typography';
import ChevronLeft from '../assets/left.svg';
import ChevronRight from '../assets/right.svg';
import { datePickerDefaultStyles } from '../defaultStyles.styled';

export const StyledDay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  height: 2rem;
  width: 2rem;
  z-index: -1;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  box-sizing: border-box;
`;

export const StyledWrapper = styled.div`
  position: relative;

  ${datePickerDefaultStyles}

  .DayPicker {
    display: inline-block;
    width: 100%;
    font-size: 1rem;
  }

  .DayPicker-wrapper {
    position: relative;
    flex-direction: row;
    user-select: none;
    outline: none;
    padding-bottom: 0;
    width: 100%;

    &:focus {
      .DayPicker-Caption {
        border: 2px solid ${dsStyles.colors.orange2};
      }
    }
  }

  .DayPicker-NavButton {
    display: inline-block;
    position: absolute;
    top: 0;
    margin-top: 1px;
    width: 1.25rem;
    height: 1.25rem;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    outline: none;
    opacity: 0.6;
    transition: opacity ${dsStyles.transitions.standard};
  }

  .DayPicker-NavButton:hover {
    opacity: 1;
  }

  .DayPicker-NavButton--prev {
    left: 4px;
    top: 4px;
    background-image: url(${ChevronLeft});
  }

  .DayPicker-NavButton--next {
    right: 4px;
    top: 4px;
    background-image: url(${ChevronRight});
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }

  .DayPicker-Caption {
    display: table-caption;
    margin-bottom: 1.5rem;
    text-align: center;
    color: ${dsStyles.colors.orange4};
    box-sizing: border-box;
    height: 2rem;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: border-color 0.3s ease-in-out;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      ${Typography16SemiBold};
    }
  }

  .DayPicker-Months {
    width: 100%;
    margin: 0;
  }

  .DayPicker-Month {
    width: 100%;
    margin: 0;
  }

  .DayPicker-Day {
    position: relative;
    color: ${dsStyles.colors.violet4};
    width: 2rem;
    height: 2rem;

    &:focus {
      /* style focus state in StyledDay */
      outline: none !important;

      ${StyledDay} {
        border: 2px solid ${dsStyles.colors.orange4};
      }
    }

    &:hover {
      /* style hover state in StyledDay */
      background-color: transparent !important;

      ${StyledDay} {
        background-color: ${dsStyles.colors.orange1};
      }
    }

    &--today {
      font-weight: unset;

      ${StyledDay} {
        border: 2px solid ${dsStyles.colors.grey2};
      }
    }

    &--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      background-color: transparent;
      color: ${dsStyles.colors.white};

      ${StyledDay} {
        background-color: ${dsStyles.colors.orange4};
        color: ${dsStyles.colors.white};
      }

      &:hover {
        ${StyledDay} {
          color: ${dsStyles.colors.white};
        }
      }
    }

    &--disabled {
      pointer-events: none;
      color: ${dsStyles.colors.grey2};
    }
  }
`;
