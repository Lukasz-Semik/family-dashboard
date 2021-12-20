import {
  dsStyles,
  IconBookMarked,
  IconCalendar,
  IconCart,
  IconPlusCircle,
} from '@family-dashboard/design-system';

import { StyledWrapper } from './MobileFooter.styled';

export function MobileFooter() {
  return (
    <StyledWrapper>
      <button>
        <IconPlusCircle
          width="1.5rem"
          height="1.5rem"
          color={dsStyles.colors.orange4}
        />
      </button>

      <button>
        <IconBookMarked
          width="1.5rem"
          height="1.5rem"
          color={dsStyles.colors.orange4}
        />
      </button>

      <button>
        <IconCart
          width="1.5rem"
          height="1.5rem"
          color={dsStyles.colors.orange4}
        />
      </button>

      <button>
        <IconCalendar
          width="1.5rem"
          height="1.5rem"
          color={dsStyles.colors.orange4}
        />
      </button>
    </StyledWrapper>
  );
}
