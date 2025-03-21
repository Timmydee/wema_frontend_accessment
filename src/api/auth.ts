// // src/api/auth.ts
// import { mockDB } from "../mockDB";

// export const registerUser = async (userData: { email: string; password: string }) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       mockDB.users.push(userData); // Store user data in the mock DB
//       resolve({ success: true, message: "User registered successfully!" });
//     }, 1000); // Simulate a 1-second delay
//   });
// };