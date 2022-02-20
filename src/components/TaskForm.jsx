import React, {useEffect, useState} from 'react';
import MyDatePicker from "./UI/datePicker/MyDatePicker";
import MyDefaultButton from "./UI/button/MyDefaultButton";
import MyColoredButton from "./UI/button/MyColoredButton";

const TaskForm = ({curTask, save, cancel}) => {

    const [task, setTask] = useState(curTask)
    const [isBodyEmpty, setIsBodyEmpty] = useState(true)

    useEffect(() => {
        setTask(curTask)
        setIsBodyEmpty(curTask.body === '')
        // console.log(curTask)
    }, [curTask])

    const saveChanges = (e) => {
        e.preventDefault()
        console.log(task.date)
        save({...task, id: curTask.id})
        setTask({body: '', date: new Date()})
        setIsBodyEmpty(true)
    }
    const cancelChanges = (e) => {
        e.preventDefault()
        cancel()
        setTask({body: '', date: new Date()})
        setIsBodyEmpty(true)
    }

    return (
        <div className="task-form">
            <form>
                <input
                    type="text"
                    placeholder="To do"
                    value={task.body}
                    onChange={e => {
                        setTask({...task, body: e.target.value})
                        setIsBodyEmpty(e.target.value === '')
                    }}
                />
                <MyDatePicker
                    value={task.date}
                    onChange={e => setTask({...task, date: e.target.value})}
                />
                <MyColoredButton style={{marginTop: 10, marginRight: 10}} disabled={isBodyEmpty} onClick={saveChanges}>Save</MyColoredButton>
                <MyDefaultButton onClick={cancelChanges}>Cancel</MyDefaultButton>
            </form>
        </div>
    );
};

export default TaskForm;