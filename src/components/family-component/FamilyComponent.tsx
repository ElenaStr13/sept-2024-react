import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        < div className='m-10, border-b-purple-950'>
            {
                simpsons.map((value, index) => <CharacterComponent item={value} key={index}>
                    {value.info}
                    </CharacterComponent>)
            }
        </div>
    )
}