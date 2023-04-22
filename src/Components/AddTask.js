import { useState } from "react"

const AddTask = ({onAdd}) => {

   const [text,setText] = useState('')
   const [day,setDay] = useState('')
   const [reminder,setReminder] = useState(false)

   const onSubmit = (e) => {
      e.preventDefault()

      if(!text){
         alert('Please add Task')
         return
      }

      onAdd({text,day,reminder})
      setText('')
      setDay('')
      setReminder(false)
   }
  return (
    <form className='add-form' onSubmit={onSubmit}>
     <div className='form-control form-control-check'>
        <label>Task</label>
        <input type='text' placeholder = 'Add Task' 
        value = {text} onChange={(e) => setText(e.target.value)}/>
     </div>

     <div className='form-control form-control-check'>
        <label>Day & Time</label>
        <input type='text' placeholder = 'Add Day and Time'
        value = {day} onChange={(e) => setDay(e.target.value)} />
     </div>

     <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
        type='checkbox' 
        style={{backgroundColor: 'darkblue'}}
        value = {reminder} 
        checked = {reminder} 
        onChange={(e) => setReminder(e.currentTarget.checked)}/>
     </div>

     <input className = 'btn-block btn submit' type='submit' value = 'Save Task'/>
      
    </form>
  )
}

export default AddTask
