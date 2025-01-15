import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
export const routes = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            // {
            //     path: 'users', element: <UsersPage/>, children: [
            //         {path: 'posts/:userId', element: <PostsPage/>},
            //     ]
            // },
            // {path: 'users/details', element: <SingleUserDetailsPage/>},
            // {path: 'posts', element: <PostsPage/>},
        ]
    }
]);