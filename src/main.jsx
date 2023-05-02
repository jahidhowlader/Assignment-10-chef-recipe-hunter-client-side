import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider'
// import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider
      router={Routes}>
    </RouterProvider>
  </AuthProvider>

)
