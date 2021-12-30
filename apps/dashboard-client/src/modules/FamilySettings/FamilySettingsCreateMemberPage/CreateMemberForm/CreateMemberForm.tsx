import { FieldInputStandard } from '@family-dashboard/fe-libs/field-controls';
import { Form, Formik } from 'formik';
import { StyledTitle } from './CreateMemberForm.styled';

export function CreateMemberForm() {
  return (
    <>
      <StyledTitle>Addin adult user</StyledTitle>
      <Formik onSubmit={() => console.log('s')} initialValues={{}}>
        {({ submitForm }) => (
          <Form onSubmit={submitForm}>
            <FieldInputStandard name="asdasd" label="a" />
          </Form>
        )}
      </Formik>
    </>
  );
}
