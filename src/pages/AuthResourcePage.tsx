import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcePage = () => {

    useEffect(() => {  //вантаження продуктів з аутентифікованої точки
        loadAuthProducts().then(products =>{
            console.log(products)
        }).catch(reason => {
            console.log(reason);
            refresh()
                .then(() => {loadAuthProducts()
                    .then(value => console.log(value))
            } )
        })
    }, []);

    return (
        <>
            AuthResourcePage
        </>
    )
}

