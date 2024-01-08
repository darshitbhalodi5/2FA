import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import About2FA from './components/About2FA';
import PSC from './components/PSC';
import AboutPSC from './components/AboutPSC';
import AboutPLA from './components/AboutPLA';
import Information from './components/Infromation'

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/info',
        element : <Information></Information>
    },
    {
        path : '/2fa',
        element : <About2FA></About2FA>
    },
    {
        path : '/pla',
        element : <AboutPLA></AboutPLA>
    },
    {
        path : '/psc',
        element : <AboutPSC></AboutPSC>
    },
    {
        path : '/strengthcheck',
        element : <PSC></PSC>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
