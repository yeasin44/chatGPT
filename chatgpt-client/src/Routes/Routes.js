import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

import Register from '../components/Register';
import Chat from '../components/Chat';
import SocialLogin from '../components/SocialLogin';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/chat',
    element: (
      <PrivateRoute>
        <Chat />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <Register />,
  },
  {
    path: '/socialLogin',
    element: <SocialLogin />,
  },
]);
