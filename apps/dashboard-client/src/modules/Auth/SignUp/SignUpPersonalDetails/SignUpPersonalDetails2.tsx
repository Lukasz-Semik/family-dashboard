import { FormattedMessage } from 'react-intl';

import {
  FieldInputMasked,
  validateFieldRequired,
} from '@family-dashboard/form-controls';

import { StyledCommonDescription } from '../SignUp.styled';
import { SelectDesktop, SelectItemBase } from './TestDrop';
import { useState } from 'react';

export function SignUpPersonalDetails2() {
  const [selectedItem, setSelectedItem] = useState<SelectItemBase | null>(null);
  return (
    <>
      <StyledCommonDescription>
        <FormattedMessage id="auth.signUp.personalDetails" />
      </StyledCommonDescription>

      <FieldInputMasked
        autoFocus
        name="test"
        label="dasdas"
        placeholder="dd-mm-yyyy"
        validate={validateFieldRequired(
          <FormattedMessage id="errors.required" />
        )}
      />

      <div style={{ marginTop: '20px' }}>
        <SelectDesktop
          onChange={(selectedItem) => setSelectedItem(selectedItem)}
          selectedItem={selectedItem}
          triggerPlaceholder={<div>Bleble</div>}
          items={[
            { value: '1', label: 'Label 1' },
            { value: '2', label: 'Label 2' },
          ]}
        />
      </div>
    </>
  );
}
