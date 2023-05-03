import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/Home/Home';
import Signin from '../../pages/Signin/Signin';
import Signup from '../../pages/Registration/Signup';
import ChefDetails from '../../layout/ChefDetails';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: 'signin',
                element: <Signin></Signin>
            },
            {
                path:'signup',
                element: <Signup></Signup>
            },
            {
                path: 'chef/:_id',
                element: <ChefDetails></ChefDetails>
            }
        ]
    }
])

export default Routes;