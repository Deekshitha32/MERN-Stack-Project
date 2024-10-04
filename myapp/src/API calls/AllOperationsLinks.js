// //AllOperationsLinks.js
// import React from "react";
// import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import ReadComponent from "./ReadComponent";
// import CreateComponent from "./CreateComponent";
// import UpdateComponent from "./UpdateComponent";
// import DeleteComponent from "./DeleteComponent";

// export default class AllOperationsLinks extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Router>
//                     <nav style={{ marginBottom: '20px' }}>
//                         <NavLink to="/CreateComponent" style={{ marginRight: '30px' }}>Create</NavLink>
//                         <NavLink to="/ReadComponent" style={{ marginRight: '30px' }}>READ</NavLink>
//                         <NavLink to="/UpdateComponent" style={{ marginRight: '30px' }}>Update</NavLink>
//                         <NavLink to="/DeleteComponent" style={{ marginRight: '30px' }}>Delete</NavLink>
//                     </nav>

//                     <Routes>
//                         <Route path="/CreateComponent" element={<CreateComponent />} />
//                         <Route path="/ReadComponent" element={<ReadComponent />} />
//                         <Route path="/UpdateComponent" element={<UpdateComponent />} />
//                         <Route path="/DeleteComponent" element={<DeleteComponent />} />
//                     </Routes>
//                 </Router>
//             </div>
//         );
//     }
// }

