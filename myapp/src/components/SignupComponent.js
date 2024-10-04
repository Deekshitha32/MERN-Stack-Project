import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import url from './url';

const SignupComponent = () => {
    const [status, setStatus] = React.useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const initialValues = {
        u_id: '',
        u_name: '',
        u_pwd: '',
        u_email: '',
        u_addr: '',
        u_contact: ''
    };

    const validationSchema = Yup.object({
        u_id: Yup.string().required('Please enter User ID'),
        u_name: Yup.string().required('Please enter User Name').min(3, 'Too short').max(9, 'Too long'),
        u_pwd: Yup.string()
            .required('Please enter Password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
                'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
            ),
        u_email: Yup.string().required('Please enter Email').email('Invalid email address'),
        u_addr: Yup.string().required('Please enter Address'),
        u_contact: Yup.number().required('Please enter Contact Number').typeError('Must be a number')
    });

    const styles = {
        body: {
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#f8f9fa',
            color: '#333',
            lineHeight: 1.6,
        },
        container: {
            maxWidth: '1600px',
            margin: '2rem auto',
            padding: '2rem 1.5rem',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        card: {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        cardHeader: {
            backgroundColor: '#007bff',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
            borderRadius: '10px 10px 0 0',
        },
        formGroup: {
            marginBottom: '1.5rem',
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            color: '#007bff',
        },
        input: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            transition: 'border-color 0.3s',
        },
        inputFocus: {
            borderColor: '#007bff',
            outline: 'none',
        },
        button: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        statusMessage: {
            marginTop: '1rem',
            padding: '1rem',
            borderRadius: '5px',
        },
        success: {
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
        },
        error: {
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
        },
        textDanger: {
            color: '#dc3545',
            fontSize: '0.875rem',
            marginTop: '0.25rem',
        },
    };

    return (
        <div style={styles.body}>
            <div className='container' style={styles.container}>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card' style={styles.card}>
                            <div className='card-header' style={styles.cardHeader}>
                                <h3>Signup User</h3>
                            </div>
                            <div className='card-body'>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        axios.post(url + "/user/register", {
                                            ...values,
                                            u_contact: parseInt(values.u_contact)
                                        })
                                            .then((posRes) => {
                                                console.log(posRes.data);
                                                setStatus('Thank you for registering');
                                                setSubmitting(false);
                                            }, (errRes) => {
                                                console.log(errRes);
                                                setSubmitting(false);
                                            });
                                    }}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className='form-group' style={styles.formGroup}>
                                                <label htmlFor='u_id' style={styles.label}>User ID</label>
                                                <Field type='text' name='u_id' className='form-control' style={styles.input} />
                                                <ErrorMessage name='u_id' component='small' style={styles.textDanger} />
                                            </div>
                                            <div className='form-group' style={styles.formGroup}>
                                                <label htmlFor='u_name' style={styles.label}>User Name</label>
                                                <Field type='text' name='u_name' className='form-control' style={styles.input} />
                                                <ErrorMessage name='u_name' component='small' style={styles.textDanger} />
                                            </div>
                                            <div className='form-group' style={styles.formGroup}>
                                                <label htmlFor='u_pwd' style={styles.label}>Password</label>
                                                <Field type='password' name='u_pwd' className='form-control' style={styles.input} />
                                                <ErrorMessage name='u_pwd' component='small' style={styles.textDanger} />
                                            </div>
                                            <div className='form-group' style={styles.formGroup}>
                                                <label htmlFor='u_email' style={styles.label}>User Email</label>
                                                <Field type='email' name='u_email' className='form-control' style={styles.input} />
                                                <ErrorMessage name='u_email' component='small' style={styles.textDanger} />
                                            </div>
                                            <div className='form-group' style={styles.formGroup}>
                                                <label htmlFor='u_addr' style={styles.label}>User Address</label>
                                                <Field type='text' name='u_addr' className='form-control' style={styles.input} />
                                                <ErrorMessage name='u_addr' component='small' style={styles.textDanger} />
                                            </div>
                                            <div className='form-group' style={styles.formGroup}>
                                                <label htmlFor='u_contact' style={styles.label}>Contact</label>
                                                <Field type='text' name='u_contact' className='form-control' style={styles.input} />
                                                <ErrorMessage name='u_contact' component='small' style={styles.textDanger} />
                                            </div>
                                            <div className='text-center'>
                                                <button type='submit' className='btn btn-success' style={styles.button} disabled={isSubmitting}>
                                                    Signup
                                                </button>
                                            </div>
                                            {status && (
                                                <div
                                                    className={`status-message ${status.includes('Thank you for registering') ? 'success' : 'error'} mt-3`}
                                                    style={{
                                                        ...styles.statusMessage,
                                                        ...(status.includes('Thank you for registering') ? styles.success : styles.error),
                                                    }}
                                                >
                                                    {status} <Link to="/login">Login</Link>
                                                </div>
                                            )}
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
