import { useEffect, useState } from 'react';

export const useIsResolution = (widthBreakpoint: number) => {
  const [isResolution, setIsResolution] = useState(
    window.innerWidth <= widthBreakpoint
  );

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < widthBreakpoint) {
        setIsResolution(true);
      }

      if (window.innerWidth >= widthBreakpoint) {
        setIsResolution(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [widthBreakpoint]);

  return isResolution;
};
