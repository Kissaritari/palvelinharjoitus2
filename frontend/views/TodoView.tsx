import { useEffect, useState } from "react";
import Todo from "Frontend/generated/com/example/application/Todo"
import { TodoEndpoint } from "Frontend/generated/endpoints";
import { TextField } from "@hilla/react-components/TextField.js";
import { Checkbox } from '@hilla/react-components/Checkbox.js';
import { Button } from "@hilla/react-components/Button.js";
import { DatePicker } from '@hilla/react-components/DatePicker.js';
export function TodoView() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(()=> {
        TodoEndpoint.findAll().then(setTodos);
    },[]);

    async function addTodo() {

        const saved = await TodoEndpoint.add(task,title);
        console.log(" saved= " + saved);
        if (saved){
            console.log(saved);
            setTodos([...todos,saved]);
            setTask('');
            setTitle('');
        }
    }

    async function updateTodo(todo:Todo, done: boolean) {
        const saved = await TodoEndpoint.update({
        ...todo,done
        });
        if(saved){
        setTodos(todos.map(existing => existing.id === saved.id ? saved: existing))};
    }

    return (
        <div className="p-m">
            <h1>To-Do</h1>
            <h1>{title} {task}</h1>
            <div className="gap-s">
                <div>
                <TextField value={title} placeholder="Otsikko" onChange= {e => setTitle(e.target.value)}/>
                </div>
                <div>
                <TextField value={task} placeholder="teksti" onChange= {e => setTask(e.target.value)}/>
                <p></p>
                <h3>Due date</h3>
                <DatePicker value={dueDate} onChange={e => setDueDate(e.target.value)}></DatePicker>
                </div>
                
                <Button theme="primary" onClick={addTodo}>Lisää </Button>
            </div>
            {todos.map(todo => (
                <div className="todo"  key={todo.id}>
                    <h3>{todo.title}</h3>
                    <Checkbox checked={todo.done} onCheckedChanged={e => updateTodo(todo, e.detail.value)}/>
                    <button className="editButton"> edit</button>
                    
                    <ol>{todo.task}</ol>
                
                </div>
            ))}
        </div>
);
}
