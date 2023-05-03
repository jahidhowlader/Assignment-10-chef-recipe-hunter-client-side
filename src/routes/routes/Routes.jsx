import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/Home/Home';
import Signin from '../../pages/Signin/Signin';
import Signup from '../../pages/Registration/Signup';
import ChefDetails from '../../layout/ChefDetails';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Error from '../../components/shared/Error404/Error';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '*',
                element: <Error></Error>
            },
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
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params._id}`)
            }
        ]
    }
])

export default Routes;