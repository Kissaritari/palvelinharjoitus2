import Todo from "Frontend/generated/com/example/application/Todo"
import { TodoEndpoint } from "Frontend/generated/endpoints";
import { TextField } from "@hilla/react-components/TextField.js";
import { Button } from "@hilla/react-components/Button.js";
export function LoginView() {


    
    return (
        <div className="p-m bg-contrast-5">
            <h1>To-Do</h1>
            <div>
                <h2>Kirjaudu sisään</h2>
                <div className="flex gap-s flex-col">
                <TextField placeholder="Käyttäjätunnus"></TextField>
                <TextField placeholder="Salasana"></TextField>
                <Button>Kirjaudu</Button>
                </div>
            </div>

        </div>

);
}
