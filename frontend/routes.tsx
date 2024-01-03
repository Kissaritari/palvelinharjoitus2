import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { TodoView } from 'Frontend/views/TodoView'
import { LoginView } from './views/LoginView';
export const routes = [
      { path: '/', element: <LoginView /> },
      { path: '/todo', element: <TodoView /> }
] as RouteObject[];

export default createBrowserRouter(routes);
