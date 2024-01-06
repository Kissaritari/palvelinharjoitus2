import { useEffect, useState } from "react";
import Todo from "Frontend/generated/com/example/application/Todo"
import { TodoEndpoint } from "Frontend/generated/endpoints";
import { TextField } from "@hilla/react-components/TextField.js";
import { Checkbox } from '@hilla/react-components/Checkbox.js';
import { Button } from "@hilla/react-components/Button.js";
export function TodoView() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');
    const [title, setTitle] = useState('');

    useEffect(()=> {
        TodoEndpoint.findAll().then(setTodos);
    },[]);
/*
    async function addTodo() {
        const saved = await TodoEndpoint.add(task,title);
        if (saved){
            setTodos([...todos,saved]);
            setTask('');
        }
    }
*/
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

            <div className="flex gap-s">
                <TextField value={title} onChange= {e => setTitle(e.target.value)}/>
                <TextField value={task} onChange= {e => setTask(e.target.value)}/>
                <Button theme="primary">Lisää </Button>
            </div>
            {todos.map(todo => (
                <div className="todo" key={todo.id}>
                <Checkbox checked={todo.done} onCheckedChanged={e => updateTodo(todo, e.detail.value)}/>
                <button className="editButton"> edit</button>
                <span>{todo.task}</span>
                
                </div>
            ))}
        </div>
);
}
