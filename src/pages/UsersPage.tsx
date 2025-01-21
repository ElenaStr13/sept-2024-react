import {UsersComponent} from "../components/users-component/Users-component.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;