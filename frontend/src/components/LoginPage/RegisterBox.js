import React from "react"
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";



const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div htmlFor={props.id || props.name}>{label}</div>
      <div {...field} {...props} />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
  );
};

class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "ss",
      email: "",
      acceptedTerms: false,
      errors: {
        username: '',
        email: '',
        password: '',
      }
      
    };
    
  }
  
  render() {
    const {errors} = this.state;
    return (
        <div className="inner-container">
          
          <div className="box">

          <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Password required")
            .min(8, "Minimum length 8"),
            confirmPassword: Yup.string()
            .required("Password required")
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <div className="scroll">
        <Form>
        <div className="input-group">
        <MyTextInput
            label="Email Address"
            type='email' 
            name='email' 
            className="login-input" 
            placeholder="Email"
          />
          <MyTextInput
            label="Password"
            type='password' 
            name='password' 
            className="login-input"
            placeholder="Password"
          />
          <MyTextInput
            label="Confirm password"
            type='password' 
            name='confirmPassword' 
            className="login-input"
            placeholder="Password"
          />
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button className="login-btn" type="submit">Submit</button>
          </div>
        </Form>
        </div>
      </Formik>
          </div>
        </div>
      );
    }
  }

  export default RegisterBox