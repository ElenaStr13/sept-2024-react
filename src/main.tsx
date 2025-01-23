import { createRoot } from 'react-dom/client';
import {RouterProvider} from "react-router";
import {routes} from "./router/routers.tsx";
import './index.css';

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
