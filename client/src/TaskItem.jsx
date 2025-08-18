import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskItem(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="px-4 py-2 bg-purple-800 rounded hover:bg-purple-700 cursor-pointer transition flex items-center justify-between">
    <li >{props.text}</li>
    <button className="relative float-right "
      onClick={handleClick}>
    <DeleteIcon />
    </button>
    </div>
  );
}
