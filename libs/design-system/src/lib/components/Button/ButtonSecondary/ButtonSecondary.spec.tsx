import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ButtonSecondary } from './ButtonSecondary';

describe('<ButtonSecondary/>', () => {
  it('Should properly render enabled button and invoke passed on click', () => {
    const onClickSpy = jest.fn();

    const { getByText } = render(
      <ButtonSecondary onClick={onClickSpy}>Test</ButtonSecondary>
    );

    userEvent.click(getByText('Test'));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('Should properly disable button if isLoading is true', () => {
    const onClickSpy = jest.fn();

    const { getByText } = render(
      <ButtonSecondary isLoading onClick={onClickSpy}>
        Test
      </ButtonSecondary>
    );

    userEvent.click(getByText('Test'));

    expect(onClickSpy).not.toHaveBeenCalledTimes(1);
  });
});
