import './App.css'
import {A} from "./components/A/A.tsx";
import {B} from "./components/B/B.tsx";
import {MyContext} from "./components/context/MyContextProvider.tsx";
import {useState} from "react";
import {useFetch} from "./hooks/useFetch.tsx";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light');

    const users = useFetch<{ id: number, name: string}[]>('https://jsonplaceholder.typicode.com/users', [ ]);

  return (
    <>
        <MyContext.Provider value={{
         theme: themeColor,
         changeTheme: (themeValue:string) => {
             setThemeColor(themeValue)
        }
        }} >
        <A/>
        <B/>
            {
                users?.map((user) => (
                    <div key={user.id}>
                        {user.id} : {user.name}
                    </div>
                ))
            }
        </MyContext.Provider>
   </>
  )
}

export default App
