import logo from './logo.svg';
import './styles/App.css';
import {useState} from "react";
import TaskItem from "./components/TaskItem";
import AddTaskElement from "./components/AddTaskElement";
import MyModal from "./components/UI/modal/MyModal";
import TaskForm from "./components/TaskForm";

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, body: 'Сделать домашку по матеше', date: '2021-12-31'},
        {id: 2, body: 'Сделать домашку по дискретке', date: '2022-02-14'},
        {id: 3, body: 'Сделать домашку по физре', date: '2022-03-01'},
    ])
    // let curTask = {id: -1, body: '', date: new Date()}
    const [curTask, setCurTask] = useState({id: -1, body: '', date: new Date()})
    const [modal, setModal] = useState(false)

    const saveTask = (newTask) => {
        if (newTask.id === -1) {
            newTask.id = new Date()
            setTasks([...tasks, newTask])
        } else {
            setTasks([
                ...tasks.filter(p => p.id < newTask.id),
                newTask,
                ...tasks.filter(p => p.id > newTask.id)
            ])
        }
        closeModal()
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }

    const openModal = (task = {id: -1, body: '', date: new Date()}) => {
        // console.log(task)
        setCurTask(task)
        setModal(true)
    }

    const closeModal = () => {
        setCurTask({id: -1, body: '', date: new Date()})
        setModal(false)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>ToDoYourBest</p>
            </header>
            <main className="App-main">
                <div className="task-list">
                    {tasks.map((task) =>
                        <div key={task.id}>
                            <TaskItem
                                task={task}
                                change={openModal}
                                remove={removeTask}
                            />
                        </div>
                    )}
                    <AddTaskElement onClick={() => openModal()}/>
                </div>
                <MyModal visible={modal} closeModal={closeModal}>
                    <TaskForm
                        curTask={curTask}
                        save={saveTask}
                        cancel={closeModal}
                    />
                </MyModal>
            </main>
        </div>
    );
}

export default App;
