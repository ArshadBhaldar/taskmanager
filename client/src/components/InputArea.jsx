// import { useState } from "react";

// export default function InputArea(props) {
//   const [inputText, setInputText] = useState("");

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   } 

//   return (
//     <div className="flex w-full max-w-md gap-2">
//       <input
//         type="text"
//         value={inputText} 
//         onChange={handleChange}
//         placeholder="Add a new task"
//         className="overflow-x-auto flex-1 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         onClick={() => {
//           props.onAdd(inputText);
//           setInputText("");
//         }}
//         className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-400 transition"
//       >
//         Add
//       </button>
//     </div>
//   );
// }
