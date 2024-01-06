import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { TodoView } from 'Frontend/views/TodoView'
import { LoginView } from './views/LoginView';
import { ErrorView } from './views/ErrorView';

export const routes = [
      { path: '/login', element: <LoginView /> },
      { path: '/', element: <TodoView />, handle: {title: 'Todo', rolesAllowed:['ADMIN', 'USER']},},
      { path: '*', element: <ErrorView /> }

] as RouteObject[];

export default createBrowserRouter(routes);
