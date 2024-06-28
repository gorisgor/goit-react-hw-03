import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Minimum 3 letters")
    .max(30, "Maximum 30 letters")
    .required("This field is required"),
  phonenumber: Yup.string()
    .min(9, "Minimum 9 digits")
    .required("A phone number is required"),
});

export default function ContactForm({ addContact }) {
  const handleSubmit = (values, actions) => {
    addContact({
      id: Date.now().toString(),
      name: values.username,
      number: values.phonenumber,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        phonenumber: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.container}>
        <div className={css.fieldGroup}>
          <label>Name</label>
          <Field className={css.input} name="username" type="text" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.fieldGroup}>
          <label>Number</label>
          <Field className={css.input} type="tel" name="phonenumber" />
          <ErrorMessage
            className={css.error}
            name="phonenumber"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
