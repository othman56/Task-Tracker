import { useState } from "react";

const AddTask = ({ onAdd }) => {
  
  
  const [text,setText] = useState('')
  const [day,setDay] = useState('')
  const [reminder,setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text){
        alert('please add a task')
        return
    }
    onAdd({text,day,reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

return <form className='addTask' onSubmit={onSubmit}>
    <div className='form-control'>
      <label> Task</label>
      <input type="text" placeholder="add task" value={text} onChange={(e) =>setText(e.target.value)}/>
    </div>
    <div className='form-control'>
      <label> Day & time</label>
      <input type="text" placeholder="Day & time" value={day} onChange={(e) =>setDay(e.target.value)}/>
    </div>
    <div className='form-control form-control-check'>
      <label>Set Reminder</label>
      <input type="checkbox" value={reminder} onChange={(e) =>setReminder(e.currentTarget.checked)}/>
    </div>

    <input type="submit" value='save Task' className="btn btn-block"/>
  </form>;
};

export default AddTask;
