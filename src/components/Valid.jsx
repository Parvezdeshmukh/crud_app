// import React, { useState } from "react";

// function Valid() {
//   const [name, setName] = useState("");
//   const [isValid, setIsValid] = useState(false);

//   const handleNameChange = (event) => {
//     const { value } = event.target;

//     // Use regex to validate if the input is a valid name
//     const regex = /^[a-zA-Z\s]*$/; // Only allows alphabets and spaces
//     const isValidName = regex.test(value);

//     // Update state with the input value and validation result
//     setName(value);
//     setIsValid(isValidName);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={handleNameChange}
//         placeholder="Enter a name"
//       />
//       {isValid ? <p>Valid name</p> : <p>Please enter a valid name</p>}
//     </div>
//   );
// }

// export default Valid;
