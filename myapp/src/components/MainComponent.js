// //MainComponent.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import './MainComponent.css';

const MainComponent = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const initialValues = {
        uname: '',
        upwd: ''
    };

    const validationSchema = Yup.object({
        uname: Yup.string().required('Please enter User Name'),
        upwd: Yup.string().required('Please enter Password')
    });

    const onSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        setErrorMessage('');

        const userObj = {
            u_name: values.uname,
            u_pwd: values.upwd
        };

        try {
            const response = await fetch('http://localhost:8080/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObj)
            });
            const data = await response.json();
            if (data.auth === 'success') {
                Cookies.set('token', data.token, { expires: 1 });
                Cookies.set('userName', values.uname, { expires: 1 }); // Store user name in cookies
                navigate('/read-cards'); // Redirect to the Read_cards page
            } else {
                setErrorMessage('Login failed. Please check your username and password.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        }
        setSubmitting(false);
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card shadow-lg'>
                        <div className='card-header bg-primary text-white text-center'>
                            <h2 className='mb-0'>Login</h2>
                        </div>
                        <div className='card-body'>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className='form-group'>
                                            <label htmlFor='uname'>User Name</label>
                                            <Field type='text' name='uname' className='form-control' />
                                            <ErrorMessage name='uname' component='small' className='text-danger d-block mt-1' />
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='upwd'>Password</label>
                                            <Field type='password' name='upwd' className='form-control' />
                                            <ErrorMessage name='upwd' component='small' className='text-danger d-block mt-1' />
                                        </div>
                                        <div className='text-center'>
                                            <button type='submit' className='btn btn-success btn-block' disabled={isSubmitting}>
                                                {isSubmitting ? 'Logging in...' : 'Login'}
                                            </button>
                                            <p className='mt-3'>
                                                Don't have an account? <Link to='/signup' className='text-primary'>Sign Up</Link>
                                            </p>
                                            {errorMessage && <div className='text-danger mt-2'>{errorMessage}</div>}
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
