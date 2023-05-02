import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/Home/Home';
import Signin from '../../pages/Signin/Signin';
import Signup from '../../pages/Registration/Signup';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signin',
                element: <Signin></Signin>
            },
            {
                path:'signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default Routes;