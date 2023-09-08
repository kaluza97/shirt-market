// import { firestore } from "@/firebase/firebaseConfig";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { doc, setDoc } from "firebase/firestore";
// import { OrderItem } from "../Orders/Orders.types";

// export const saveOrder = createAsyncThunk<Array<OrderItem> | null, string>(
//     'order/saveOrders',
//     async (uid) => {

//         const dataRef = doc(firestore, 'users', uid);
//         await setDoc(doc(firestore, "users", uid),
//             dupa

//         );

//     }
// );

// const dupa = {
//     "orders": [
//         {
//             "totalPrice": 1200,
//             "isActive": true,
//             "items": [
//                 {
//                     "img": "https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/70a47af209cc4f47b9bc94fb1b657404.jpg?alt=media&token=2ca2f91b-e6bb-4406-8fde-1650a234d9e3",
//                     "quantity": {
//                         "S": 0,
//                         "XL": 1,
//                         "L": 1,
//                         "M": 0
//                     },
//                     "price": 300,
//                     "name": "Gant premium T-shirt",
//                     "id": 94
//                 },
//                 {
//                     "img": "https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/Mens%203%20Pack%20Basic%20Oversized%20T-Shirt%20-%20Blue%20-%20L.jpeg?alt=media&token=25ceb1cb-dad8-41dd-be03-b040a73f9b4d",
//                     "quantity": {
//                         "S": 1,
//                         "XL": 0,
//                         "L": 0,
//                         "M": 3
//                     },
//                     "price": 300,
//                     "name": "Basic WhiteStyle shirt",
//                     "id": 14
//                 }
//             ]
//         },

//         {
//             "totalPrice": 800,
//             "isActive": true,
//             "items": [
//                 {
//                     "img": "https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/70a47af209cc4f47b9bc94fb1b657404.jpg?alt=media&token=2ca2f91b-e6bb-4406-8fde-1650a234d9e3",
//                     "quantity": {
//                         "S": 0,
//                         "XL": 1,
//                         "L": 1,
//                         "M": 0
//                     },
//                     "price": 300,
//                     "name": "Gant premium T-shirt",
//                     "id": 94
//                 },
//                 {
//                     "img": "https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/Mens%203%20Pack%20Basic%20Oversized%20T-Shirt%20-%20Blue%20-%20L.jpeg?alt=media&token=25ceb1cb-dad8-41dd-be03-b040a73f9b4d",
//                     "quantity": {
//                         "S": 1,
//                         "XL": 0,
//                         "L": 0,
//                         "M": 3
//                     },
//                     "price": 300,
//                     "name": "Basic WhiteStyle shirt",
//                     "id": 14
//                 }
//             ]
//         }]
// }
