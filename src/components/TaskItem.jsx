import React from 'react';
import MyCompleteButton from "./UI/checkbox/MyCompleteButton";
import MyDatebox from "./UI/datebox/MyDatebox";

const TaskItem = ({task, change, remove}) => {
    return (
        <div className="task" onClick={() => change(task)}>
            <MyCompleteButton onClick={(e) => {
                e.stopPropagation()
                remove(task)
            }}/>
            <div className="task-body">
                <div>
                    {task.body}
                </div>
                <MyDatebox date={task.date} style={{marginTop: 5}}/>
            </div>
        </div>
    );
};

export default TaskItem;