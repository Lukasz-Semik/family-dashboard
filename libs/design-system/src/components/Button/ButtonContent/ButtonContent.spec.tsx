import { render } from '@testing-library/react';

import { ButtonContent } from './ButtonContent';

describe('<ButtonContent />', () => {
  it('Should properly render children instead of loeadr', () => {
    const { queryByTestId, getByText } = render(
      <ButtonContent isLoading={false}>Test</ButtonContent>
    );

    expect(getByText('Test')).toBeVisible();
    expect(queryByTestId('button-loader')).not.toBeVisible();
  });

  it('Should properly render loader instead of children', () => {
    const { getByTestId, queryByText } = render(
      <ButtonContent isLoading>Test</ButtonContent>
    );

    expect(queryByText('Test')).not.toBeVisible();
    expect(getByTestId('button-loader')).toBeVisible();
  });
});
