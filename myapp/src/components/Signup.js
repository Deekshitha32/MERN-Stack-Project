// //Signup.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { signup } from '../utils/api';

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 300px;
//   margin: auto;
// `;

// const Input = styled.input`
//   margin: 10px 0;
//   padding: 8px;
//   font-size: 1em;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 1em;
//   cursor: pointer;
// `;

// const Signup = () => {
//   const [form, setForm] = useState({
//     username: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await signup(form);
//       console.log('Signup successful', response);
//     } catch (error) {
//       console.error('Error signing up', error);
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Input
//         type="text"
//         name="username"
//         value={form.username}
//         onChange={handleChange}
//         placeholder="Username"
//       />
//       <Input
//         type="password"
//         name="password"
//         value={form.password}
//         onChange={handleChange}
//         placeholder="Password"
//       />
//       <Button type="submit">Signup</Button>
//     </Form>
//   );
// };

// export default Signup;
