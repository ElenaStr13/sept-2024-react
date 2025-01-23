import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;