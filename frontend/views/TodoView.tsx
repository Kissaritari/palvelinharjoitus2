import { useEffect, useState } from "react";
import Todo from "Frontend/generated/com/example/application/Todo"
import { TodoEndpoint } from "Frontend/generated/endpoints";
import { TextField } from "@hilla/react-components/TextField.js";
import { Button } from "@hilla/react-components/Button.js";
export function TodoView() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');

    useEffect(()=> {
        TodoEndpoint.findAll().then(setTodos);
    },[]);
    return (
        <div className="p-m">
            <h1>To-Do</h1>

            <div className="flex gap-s">
                <TextField value="{task}" onChange= {e => setTask(e.target.value)}/>
                <Button theme="primary">Lisää </Button>
            </div>
        </div>

);
}
