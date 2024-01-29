import React,  { lazy , Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/userContext';
// import User from './components/User';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
// import CartItems from './components/CartItems';
import reportWebVitals from './reportWebVitals';


//chunking
//dynamically bundling
//code splitting
//lazy loading
//on demand loading
const Grocery = lazy(()=>import("./components/Grocery")); //dynamic loading
const About = lazy(()=>import("./components/About")); //dynamic loading
const CartItems = lazy(()=>import('./components/CartItems'))


const AppLayout = ()=>{
        const[userName,setUserName] = useState(null);
        //authentication.
        useEffect(()=>{
        //api call for user name and info;
        const data ={ 
                name:"Priyanshu kumar"
          };
        setUserName(data.name);
        },[])
        return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName ,  setUserName}}>
                <>
                 <Header />
                 <Outlet />
                </>
        </UserContext.Provider> 
        </Provider>        
        )
}
const appRouter = createBrowserRouter([
        {
                path:"/",
                element: <AppLayout />,
                children: [
                        {
                                path:"/",
                                element: <App />
                        },
                        {
                                path:"/contact",
                                element: <Contact></Contact>
                        },
                        {
                                path:"/about",
                                element: <Suspense fallback={<h1>loading</h1>}><About></About> </Suspense>
                        },
                        {
                                path:"/grocery",
                                element: <Suspense fallback={<h1>loading</h1>}><Grocery /></Suspense>
                        },
                        {
                                path:"/cart",
                                element: <Suspense fallback={<h1>loading</h1>}> <CartItems/></Suspense> 
                        },
                        {
                                path:"/restaurants/:restId",
                                element: <RestaurantMenu />
                        }
                ],
                errorElement: <Error/>
        },

   
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={appRouter}/>
  </React.StrictMode>     

   



);

reportWebVitals();

