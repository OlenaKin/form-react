// src/components/RegistrationForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema with Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  birthday: Yup.date().required("Birthday is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  subject: Yup.string().required("Subject is required"),
});

const RegistrationForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    phoneNumber: "",
    subject: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(`Request sent!\n\n${JSON.stringify(values, null, 2)}`);
      resetForm();
      setSubmitting(false);
    }, 500); // Simulate a request delay
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <div className="error-container">
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <div className="error-container">
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
          </div>

          <div>
            <label htmlFor="birthday">Birthday</label>
            <Field name="birthday" type="date" />
            <div className="error-container">
              <ErrorMessage name="birthday" component="div" className="error" />
            </div>
          </div>

          <div>
            <label className="name">Gender</label>
            <div
              role="group"
              aria-labelledby="gender"
              className="gender__contaier"
            >
              <div className="male__container">
                <label className="gender__label">
                  Male
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    className="custom-radio"
                  />
                </label>
              </div>
              <div className="male__container">
                <label className="gender__label">
                  Female
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    className="custom-radio"
                  />
                </label>
              </div>
            </div>
            <div className="error-container">
              <ErrorMessage name="gender" component="div" className="error" />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <div className="error-container">
              <ErrorMessage name="email" component="div" className="error" />
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field name="phoneNumber" type="text" />
            <div className="error-container">
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="error"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <Field as="select" name="subject">
              <option value="">Select a subject</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
            </Field>
            <div className="error-container">
              <ErrorMessage name="subject" component="div" className="error" />
            </div>
          </div>

          <div>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </div>

          {/* Show message when the form is submitted */}
          {isSubmitting && <p>Sending request...</p>}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
