// //ReadComponent.js
// import React from 'react';
// import axios from 'axios';
// import url from './url';

// export default class ReadComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             products: [],
//             status: ''
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             status: 'Loading'
//         });
//         axios.get(`${url}/product/fetch_all`)
//             .then((res) => {
//                 this.setState({
//                     products: res.data,
//                     status: ''
//                 });
//                 // Log product data to verify URLs
//                 console.log('Fetched products:', res.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching products:', error);
//                 this.setState({
//                     status: 'Error occurred while fetching products'
//                 });
//             });
//     }

//     render() {
//         const { products, status } = this.state;
//         return (
//             <div className='container'>
//                 <div className='text-primary h1'>I am from Read Component</div>
//                 <table className='table table-bordered table-warning table-striped table-hover w-75 mx-auto mt-4'>
//                     <thead className='thead-dark'>
//                         <tr>
//                             <th scope='col'>Sr No</th>
//                             <th scope='col'>P_id</th>
//                             <th scope='col'>P_name</th>
//                             <th scope='col'>P_cost</th>
//                             <th scope='col'>P_cat</th>
//                             <th scope='col'>P_desc</th>
//                             <th scope='col'>P_img</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map((element, index) => (
//                             <tr key={element._id}>
//                                 <td>{index + 1}</td>
//                                 <td>{element.p_id}</td>
//                                 <td>{element.p_name}</td>
//                                 <td>{element.p_cost}</td>
//                                 <td>{element.p_cat}</td>
//                                 <td>{element.p_desc}</td>
//                                 <td>
//                                     {console.log(element.p_img)}
//                                     <img
//                                         src={element.p_img || 'https://via.placeholder.com/100'}
//                                         alt={element.p_name}
//                                         style={{ width: '100px', height: '100px' }}
//                                         // onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/100'; }} // Fallback in case of broken image
//                                     />
//                                     {/* Log the image URL to verify */}
//                                     <div style={{ display: 'none' }}>{console.log('Image URL:', element.p_img)}</div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <h3 className='text-info'>{status}</h3>
//             </div>
//         );
//     }
// }


