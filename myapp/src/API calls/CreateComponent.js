// //CreateComponent.js
// import React from 'react';
// import axios from 'axios';
// import url from './url';

// export default class CreateComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             status: ""
//         };
//     }

//     render() {
//         return (
//             <div className='container'>
//                 <div className='text-info h1'>I am from Create Component</div>
//                 <form onSubmit={this.insert} className='w-50'>
//                     <input
//                         type="number"
//                         placeholder="P_id"
//                         name="p_id"
//                         className="form-control my-2"
//                         required
//                     />
//                     <input
//                         type="text"
//                         placeholder="P_name"
//                         name="p_name"
//                         className="form-control my-2"
//                         required
//                     />
//                     <input
//                         type="number"
//                         placeholder="P_cost"
//                         name="p_cost"
//                         className="form-control my-2"
//                         required
//                     />
//                     <input
//                         type="text"
//                         placeholder="P_cat"
//                         name="p_cat"
//                         className="form-control my-2"
//                         required
//                     />
//                     <textarea
//                         placeholder="P_desc"
//                         name="p_desc"
//                         className="form-control my-2"
//                         required
//                     />
//                     <input
//                         type="url"
//                         placeholder="P_img"
//                         name="p_img"
//                         className="form-control my-2"
//                         required
//                     />
//                     <input type='submit' value="Create" className="btn btn-success" />
//                 </form>
//                 <h1 className='text-primary'>{this.state.status}</h1>
//             </div>
//         );
//     }

//     insert = (e) => {
//         e.preventDefault();
//         let obj = {
//             "p_id": parseInt(e.target.p_id.value),
//             "p_name": e.target.p_name.value,
//             "p_cost": parseInt(e.target.p_cost.value),
//             "p_cat": e.target.p_cat.value,
//             "p_desc": e.target.p_desc.value,
//             "p_img": e.target.p_img.value
//         };
//         axios.post(url + '/insert', obj)
//             .then((posRes) => {
//                 this.setState({
//                     status: posRes.data.insert
//                 });
//             })
//             .catch((errRes) => {
//                 console.log(errRes);
//             });
//     }
// }
