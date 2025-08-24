import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required!"),
  email: Yup.string().email("Invalid email format").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    alert(`User registered: ${values.username}, ${values.email}`);
    resetForm();
  };

  return (
    <div>
      <h2>Registration Form (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label>Username: </label>
              <Field type="text" name="username" placeholder="Enter username" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email: </label>
              <Field type="email" name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password: </label>
              <Field type="password" name="password" placeholder="Enter password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
