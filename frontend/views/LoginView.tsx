import Todo from "Frontend/generated/com/example/application/Todo"
import LoginForm from "Frontend/components/placeholder/LoginForm"

export function LoginView() {
    
    return (
        <div className="p-m bg-contrast-5">
            <h1>To-Do</h1>
            <div>
                {LoginForm()}
            </div>

        </div>

);

    
}
