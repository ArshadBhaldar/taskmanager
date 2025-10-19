// import DeleteIcon from '@mui/icons-material/Delete';

// export default function TaskItem(props) {
//   function handleDelete() {
//     props.onDelete(props.id);
//   }

//   function handleCheck() {
//     props.onCheck(props.id);
//   }

//   return (
//     <div
//       className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 cursor-pointer transition 
//                  flex items-center gap-3"
//     >
//       <input
//         type="checkbox"
//         checked={props.completed}
//         onChange={handleCheck}
//       />
      
//       <span className={`flex-grow ${props.completed ? "line-through" : ""}`}>
//         {props.text}
//       </span>

      
//       <button onClick={handleDelete} className="text-white hover:text-red-400">
//         <DeleteIcon />
//       </button>
//     </div>
//   );
// }
