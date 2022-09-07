import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext/GlobalContextProvider";


export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined)
        throw new Error(
            "Utilize o hook useGlobalContext apenas dentro de um contexto!"
        );

    return useContext(GlobalContext);
};
