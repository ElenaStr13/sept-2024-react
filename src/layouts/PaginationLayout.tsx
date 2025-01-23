import {PaginationComponent} from "../components/pagination-component/Pagination-component.tsx";
import {Outlet} from "react-router-dom";

const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};

export default PaginationLayout;