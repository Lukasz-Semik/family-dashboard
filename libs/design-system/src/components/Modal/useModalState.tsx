import { useState } from 'react';

export function useModalState(): [boolean, () => void, () => void] {
  const [isOpen, setIsOpen] = useState(false);

  return [isOpen, () => setIsOpen(true), () => setIsOpen(false)];
}
