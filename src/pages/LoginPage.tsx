import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {

    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 5
        })
    }, []); //процесс логінації  user

    return (
        <>
            LoginPage
        </>
    )
}