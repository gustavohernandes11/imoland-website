import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialGlobalState } from "./initialGlobalState";
import { buildActions } from "./buildActions";

export const GlobalContext = createContext<[any, any]>([{}, {}]);

export function GlobalContextProvider({ children }: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialGlobalState);

    const actions = buildActions(dispatch);

    return (
        <GlobalContext.Provider value={[state, actions]}>
            {children}
        </GlobalContext.Provider>
    );
}
