import { FormattedMessage, useIntl } from 'react-intl';
import { Formik } from 'formik';

import {
  ButtonsFormGroup,
  IconEmail,
  Modal,
  ModalButtonsGroup,
  ModalText,
  ModalTitle,
  useModalState,
  WrapperIconFormControl,
} from '@family-dashboard/design-system';
import {
  combineFieldValidators,
  FieldCheckbox,
  FieldInputMasked,
  FieldInputStandard,
  FieldSelect,
  validateFieldDateValid,
  validateFieldEmail,
  validateFieldRequired,
} from '@family-dashboard/fe-libs/field-controls';
import { CTGender } from '@family-dashboard/global/types';

import { useCreateUserInvitation } from './_hooks/useCreateUserInvitation';
import {
  StyledFamilyHeadFieldWrapper,
  StyledFieldInnerLineWrapper,
  StyledFieldsLine,
  StyledForm,
  StyledSingleFieldWrapper,
  StyledTitle,
} from './CreateMemberForm.styled';
import { Values } from './CreateMemberForm.types';

interface Props {
  backToInitialStep: () => void;
}

export function CreateMemberForm({ backToInitialStep }: Props) {
  const intl = useIntl();
  const [isOpen, openModal, closeModal] = useModalState();
  const { createUserInvitation, isLoading } = useCreateUserInvitation({
    closeModal,
  });

  return (
    <>
      <StyledTitle>
        <FormattedMessage id="familySettings.createMember.adultUser.adding" />
      </StyledTitle>

      <Formik<Values>
        onSubmit={createUserInvitation}
        initialValues={{
          email: '',
          firstName: '',
          middleName: '',
          lastName: '',
          gender: undefined,
          dob: '',
          hasFamilySettingsModulePermission: false,
          hasFinancialModulePermission: false,
        }}
      >
        {({ submitForm, values, setFieldValue }) => {
          return (
            <StyledForm onSubmit={submitForm}>
              <StyledSingleFieldWrapper>
                <FieldInputStandard
                  autoFocus
                  name="email"
                  label={<FormattedMessage id="fields.email.label" />}
                  placeholder={intl.formatMessage({
                    id: 'fields.email.label',
                  })}
                  validate={combineFieldValidators(
                    validateFieldRequired(
                      <FormattedMessage id="errors.required" />
                    ),
                    validateFieldEmail(<FormattedMessage id="errors.email" />)
                  )}
                  renderLeftControls={(renderProps) => (
                    <WrapperIconFormControl {...renderProps}>
                      <IconEmail />
                    </WrapperIconFormControl>
                  )}
                />
              </StyledSingleFieldWrapper>
              <StyledFieldsLine>
                <StyledFieldInnerLineWrapper>
                  <FieldInputStandard
                    name="firstName"
                    label={<FormattedMessage id="fields.firstName.label" />}
                    placeholder={intl.formatMessage({
                      id: 'fields.firstName.placeholder',
                    })}
                    validate={validateFieldRequired(
                      <FormattedMessage id="errors.required" />
                    )}
                  />
                </StyledFieldInnerLineWrapper>

                <StyledFieldInnerLineWrapper>
                  <FieldInputStandard
                    name="middleName"
                    label={<FormattedMessage id="fields.middleName.label" />}
                    placeholder={intl.formatMessage({
                      id: 'fields.middleName.placeholder',
                    })}
                  />
                </StyledFieldInnerLineWrapper>
              </StyledFieldsLine>
              <StyledSingleFieldWrapper>
                <FieldInputStandard
                  name="lastName"
                  label={<FormattedMessage id="fields.lastName.label" />}
                  placeholder={intl.formatMessage({
                    id: 'fields.lastName.placeholder',
                  })}
                  validate={validateFieldRequired(
                    <FormattedMessage id="errors.required" />
                  )}
                />
              </StyledSingleFieldWrapper>
              <StyledFieldsLine>
                <StyledFieldInnerLineWrapper>
                  <FieldInputMasked
                    name="dob"
                    label={<FormattedMessage id="fields.dateOfBirth.label" />}
                    placeholder="DD-MM-YYYY"
                    validate={combineFieldValidators(
                      validateFieldRequired(
                        <FormattedMessage id="errors.required" />
                      ),
                      validateFieldDateValid(
                        <FormattedMessage id="errors.invalidDate" />
                      )
                    )}
                  />
                </StyledFieldInnerLineWrapper>

                <StyledFieldInnerLineWrapper>
                  <FieldSelect
                    label={<FormattedMessage id="fields.gender.label" />}
                    name="gender"
                    triggerPlaceholder={<FormattedMessage id="shared.select" />}
                    validate={validateFieldRequired(
                      <FormattedMessage id="errors.required" />
                    )}
                    items={[
                      {
                        value: CTGender.Male,
                        label: intl.formatMessage({
                          id: 'fields.gender.items.male',
                        }),
                      },
                      {
                        value: CTGender.Female,
                        label: intl.formatMessage({
                          id: 'fields.gender.items.female',
                        }),
                      },
                      {
                        value: CTGender.Other,
                        label: intl.formatMessage({
                          id: 'fields.gender.items.other',
                        }),
                      },
                    ]}
                  />
                </StyledFieldInnerLineWrapper>
              </StyledFieldsLine>

              <StyledFamilyHeadFieldWrapper>
                <FieldCheckbox
                  name="hasFamilySettingsModulePermission"
                  onChange={(event) => {
                    setFieldValue(
                      'hasFinancialModulePermission',
                      event.target.checked
                    );
                  }}
                  label={
                    <FormattedMessage id="familySettings.createMember.giveFamilySettingsModule" />
                  }
                />
              </StyledFamilyHeadFieldWrapper>

              <StyledSingleFieldWrapper>
                <FieldCheckbox
                  name="hasFinancialModulePermission"
                  disabled={values.hasFamilySettingsModulePermission}
                  label={
                    <FormattedMessage id="familySettings.createMember.giveFinancialModule" />
                  }
                />
              </StyledSingleFieldWrapper>

              <ButtonsFormGroup
                onPrimaryButtonClick={openModal}
                onSecondaryButtonClick={backToInitialStep}
                primaryButtonContent="Send invitation"
              />
              <Modal isOpen={isOpen} closeModal={closeModal}>
                <ModalTitle>
                  <FormattedMessage id="auth.signUp.confirmEmail.sendNewCode" />
                </ModalTitle>
                <ModalText>
                  <FormattedMessage id="auth.signUp.confirmEmail.sendNewCodeDescription" />
                </ModalText>

                <ModalButtonsGroup
                  isConfirmLoading={isLoading}
                  isDisabled={isLoading}
                  onCancelButtonClick={closeModal}
                  onConfirmButtonClick={submitForm}
                  cancelContent={<FormattedMessage id="shared.cancel" />}
                  confirmContent={<FormattedMessage id="shared.confirm" />}
                />
              </Modal>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
}
