import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainPage from './pages/MainPage';
import JokePage from './pages/JokePage';

const router = createHashRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/joke",
        element: <JokePage />,
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
