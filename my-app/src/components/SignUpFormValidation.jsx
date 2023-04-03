import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';


export const SignUpFormValidation = () =>
{
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, "Must Be 15 CHaracters  or Less")
            .required('Required'),

        lastName: Yup.string()
            .max(15, "Must Be 20 CHaracters  or Less")
            .required('Required'),

        email: Yup.string()
            .email("Email Is Invalid")
            .required('Email is Required'),

        password: Yup.string()
            .min(6, "password Must Be atleast 6 CHaracters")
            .required("PASSWORD is Required"),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'password and confirm password should be Equal')
            .required('Confirm Password is Required'),

    })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >

            {
                formik => (

                    <div>
    <h1 className='my-4 font-weight-bold .display-4'>Sign Up Form</h1>

    <Form>
        <TextField label="First Name" name="firstName" type="text" />
        <TextField label="Last Name" name="lastName" type="text" />
        <TextField label="Email" name="email" type="text" />
        <TextField label="Password" name="password" type="text" />
        <TextField label="Confirm Password" name="confirmPassword" type="text" />
        <button className='btn btn-dark mt-3' type="submit">Submit</button>
        <button className='btn btn-danger mt-3 ml-3' type="reset">Reset</button>
    </Form>
</div>
                )
            }

        </Formik>
    )
}