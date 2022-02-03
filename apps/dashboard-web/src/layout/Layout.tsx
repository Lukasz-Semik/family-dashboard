import { dsStyles, useIsResolution } from '@family-dashboard/design-system';

import { LayoutDesktop } from './LayoutDesktop/LayoutDesktop';
import { LayoutMobile } from './LayoutMobile/LayoutMobile';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const isMobileResolution = useIsResolution(Number(dsStyles.breakpoints.md));

  if (isMobileResolution) {
    return <LayoutMobile>{children}</LayoutMobile>;
  }

  return <LayoutDesktop>{children}</LayoutDesktop>;
};
