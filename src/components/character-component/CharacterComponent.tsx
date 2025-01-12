import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
import './CharacterComponent.css';

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}
export const CharacterComponent = ({item, children}:CharacterComponentProps) => {
    return (
        <div >
            <h3 className="text-3xl font-bold underline">{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p className='text-amber-900git init'>{children}</p>
        </div>
    )
}