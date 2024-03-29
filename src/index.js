import React,  { lazy , Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';

import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/userContext';

import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import reportWebVitals from './reportWebVitals';


const About = lazy(()=>import("./components/About")); 
const Cart = lazy(()=>import('./components/Cart'))


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
                                path:"/cart",
                                element: <Suspense fallback={<h1>loading</h1>}> <Cart/></Suspense> 
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

