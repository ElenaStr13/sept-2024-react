import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";

const BA = () => {
    const {theme, changeTheme} = useContext(MyContext);

    const handlerDark = () => {
        changeTheme('dark');
    }
    const handlerLight = () => {
        changeTheme('light');
    }

    return (
        <div>
            <button onClick={handlerDark}>Change theme to dark</button>
            <button onClick={handlerLight}>Change theme to light</button>
        </div>
    );
};

export {BA};