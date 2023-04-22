import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {

  // const [name_of_state, function_to_update_state]
  // if we want to add new element in tasks, we cannot
  // just do push or pop because it is immutable
  // everytime we change state, it recreates the entire
  // tasks array and not just updates it
  
  return (
    // setTasks([])  
    <>
    {tasks.map((task,index) => (
    <Task key={index} task = {task}
     onDelete = {onDelete} onToggle = {onToggle}/>))}
    </>
  )
}

export default Tasks
