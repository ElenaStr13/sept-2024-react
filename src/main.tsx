import { createRoot } from 'react-dom/client';
import {routes} from "./router/routers.tsx";
import {RouterProvider} from "react-router";
import './index.css';

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>);
