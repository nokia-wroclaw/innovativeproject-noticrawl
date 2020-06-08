import React from "react"
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";



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
      password: "",
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
    const { errors } = this.state;
    return (
      <div className="inner-container">

        <div className="box">

          <Formik
            initialValues={{
              email: "",
              password: "",
              re_password: "",
              // acceptedTerms: false, // added for our checkbox
            }}
            validationSchema={Yup.object({
              password: Yup.string()
                .max(30, "Must be 30 characters or less")
                .required("Password required")
                .min(8, "Minimum length 8"),
              re_password: Yup.string()
                .required("Password required")
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email required"),
              // acceptedTerms: Yup.boolean()
              //   .required("Required")
              //   .oneOf([true], "You must accept the terms and conditions"),
            })}
            onSubmit={(async (values, e) => {

              const res = await fetch("/api/v1/register", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                  "Content-Type": "application/json"
                },
              });
              console.log("5: " + res.ok)
              console.log("6: " + res.status)
              if (res.ok) {
                document.getElementById("go_to_new-crawl").click()
              } else {
                let status = res.status
                console.log("Such an email exists")
              }
            })
            }
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
                    name='re_password'
                    className="login-input"
                    placeholder="Password"
                  />
                  {/* <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox> */}

                  <button className="login-btn" type="submit">Submit</button>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
        <Link to="/new-crawl">
          <div id="go_to_new-crawl"></div>
        </Link>
      </div>
    );
  }
}

export default RegisterBox