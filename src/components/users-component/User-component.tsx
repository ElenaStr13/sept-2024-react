import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {useNavigate} from "react-router";

interface Props {
    user: IUser;
}
export const UserComponent: FC<Props> = ({user}) => {

    const navigation = useNavigate();
    const onButtonClickNavigate = () => {
       navigation('/users/'+ user.id + '/carts')
    }

    return (
        <div className={'my-10'}>
            {user.username}: {user.email}
            <button onClick={() => {onButtonClickNavigate()}} className={'border-2'}>Click me</button>
        </div>
    );
};