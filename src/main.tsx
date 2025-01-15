import { createRoot } from 'react-dom/client'
import './index.css';
import {routes} from "./router/routers.tsx";

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>);
