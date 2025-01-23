import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "./User-component.tsx";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";
import {userService} from "../../services/api.service.ts";
import {useSearchParams} from "react-router";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [searchParams] = useSearchParams({page: '1'})
    
    useEffect(() => {
        const currentPage= searchParams.get('page') || '1';
        userService.getAllUsers(currentPage)
            .then(({users}: IUserResponseModel) => {
                setUsers(users)
            });
    }, [searchParams]);

    return (
        <div>
            {
                users.map((user:IUser) => < UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};