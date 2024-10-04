// //ProductDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchProductById } from '../utils/api';
// import styled from 'styled-components';

// const Details = styled.div`
//   padding: 20px;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
// `;

// const Title = styled.h2`
//   font-size: 2em;
//   margin: 0.5em 0;
// `;

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const getProduct = async () => {
//       const data = await fetchProductById(id);
//       setProduct(data.product);
//     };

//     getProduct();
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <Details>
//       <Image src={product.p_img} alt={product.p_name} />
//       <Title>{product.p_name}</Title>
//       <p>${product.p_cost}</p>
//       <p>{product.p_desc}</p>
//     </Details>
//   );
// };

// export default ProductDetails;
