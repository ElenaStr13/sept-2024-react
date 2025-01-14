import {ITodo} from "../../models/ITodo.ts";
import './TodoComponent.css';
interface TodoProps {
    item: ITodo
}

export const Todo = ({item}: TodoProps) => {
    return (
        <>
            <h3 className={item.completed? 'complete': 'non-complete'}>{item.title}</h3>
        </>
    )
};