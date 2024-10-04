// //DeleteComponent.js
// import React from 'react';
// import axios from 'axios';
// import url from './url';

// export default class DeleteComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             status: ''
//         };
//     }

//     render() {
//         return (
//             <div className='container'>
//                 <div className='text-info h1'>Delete Component</div>
//                 <form onSubmit={this.delete} className='w-50'>
//                     <input
//                         type='number'
//                         placeholder='P_id'
//                         name='p_id'
//                         className='form-control my-2'
//                         required
//                     />
//                     <input type='submit' value='Delete' className='btn btn-danger' />
//                 </form>
//                 <h1 className='text-primary'>{this.state.status}</h1>
//             </div>
//         );
//     }

//     delete = (e) => {
//         e.preventDefault();
//         this.setState({
//             status: 'Loading...'
//         });

//         let obj = {
//             p_id: parseInt(e.target.p_id.value)
//         };

//         axios.delete(`${url}/delete`, { data: obj })
//             .then((res) => {
//                 console.log(res);
//                 this.setState({
//                     status: res.data.delete === 'success' ? 'Product deleted successfully' : 'Product not found'
//                 });
//             })
//             .catch((error) => {
//                 console.error('Error deleting product:', error);
//                 this.setState({
//                     status: 'Error occurred while deleting product'
//                 });
//             });
//     };
// }

