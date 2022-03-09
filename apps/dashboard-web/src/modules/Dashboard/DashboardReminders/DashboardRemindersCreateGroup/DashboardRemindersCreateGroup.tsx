import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form, Formik } from 'formik';

import {
  dsStyles,
  Modal,
  ModalButtonsGroup,
  ModalTitle,
  useModalState,
} from '@family-dashboard/design-system';
import {
  combineFieldValidators,
  validateFieldDateIsNotPast,
  validateFieldDateValid,
  validateFieldRequired,
  validateFieldTimeValid,
} from '@family-dashboard/fe-libs/field-validators';
import {
  FieldDatePickerInputExactStandard,
  FieldInputMasked,
  FieldInputStandard,
} from '@family-dashboard/web-libs/field-controls';

import { useCreateReminder, Values } from './_hooks/useCreateReminder';
import {
  StyledButton,
  StyledFieldsWrapper,
  StyledMargin,
  StyledText,
} from './DashboardRemindersCreateGroup.styled';

export function DashboardRemindersCreateGroup() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isModalOpen, openModal, closeModal] = useModalState();
  const intl = useIntl();

  const { isLoading, onSubmit } = useCreateReminder({ closeModal });

  return (
    <>
      <StyledButton onClick={openModal}>
        <FormattedMessage id="reminders.create" />
      </StyledButton>

      <Modal
        shouldCloseOnEsc={!isDatePickerOpen}
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <ModalTitle>
          <FormattedMessage id="reminders.create" />
        </ModalTitle>

        <Formik<Values>
          onSubmit={onSubmit}
          initialValues={{ date: '', text: '', time: '' }}
        >
          {({ handleSubmit, submitForm }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <StyledFieldsWrapper>
                  <StyledMargin>
                    <FieldInputStandard
                      labelBgColor={dsStyles.colors.white}
                      placeholder={intl.formatMessage({
                        id: 'fields.text.placeholder',
                      })}
                      validate={validateFieldRequired(
                        <FormattedMessage id="errors.required" />
                      )}
                      name="text"
                      label={<FormattedMessage id="fields.text.label" />}
                    />
                  </StyledMargin>

                  <StyledMargin>
                    <FieldDatePickerInputExactStandard
                      name="date"
                      label={<FormattedMessage id="fields.date.label" />}
                      onOpen={() => setIsDatePickerOpen(true)}
                      onClose={() => setIsDatePickerOpen(false)}
                      labelBgColor={dsStyles.colors.white}
                      validate={combineFieldValidators(
                        validateFieldRequired(
                          <FormattedMessage id="errors.required" />
                        ),
                        validateFieldDateValid(
                          <FormattedMessage id="errors.invalidDate" />
                        ),
                        validateFieldDateIsNotPast(
                          <FormattedMessage id="errors.pastDate" />
                        )
                      )}
                    />
                  </StyledMargin>

                  <FieldInputMasked
                    mask="99:99"
                    placeholder="HH:MM"
                    label={<FormattedMessage id="fields.time.label" />}
                    name="time"
                    labelBgColor={dsStyles.colors.white}
                    validate={combineFieldValidators(
                      validateFieldTimeValid('Invalid time')
                    )}
                    renderRightControls={() => (
                      <StyledText>
                        <FormattedMessage id="shared.optional" />,{' '}
                        <FormattedMessage id="fields.time.hint" />
                      </StyledText>
                    )}
                  />
                </StyledFieldsWrapper>

                <ModalButtonsGroup
                  confirmContent={<FormattedMessage id="shared.create" />}
                  cancelContent={<FormattedMessage id="shared.cancel" />}
                  onCancelButtonClick={closeModal}
                  onConfirmButtonClick={submitForm}
                  isCancelLoading={isLoading}
                  isConfirmLoading={isLoading}
                  isDisabled={isLoading}
                />
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
}
