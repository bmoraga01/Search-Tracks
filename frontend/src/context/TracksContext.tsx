import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { initialState, TracksActions, tracksReducer, TracksState } from "../reducers/tracks-reducer";

type TracksContextProps = {
    state: TracksState
    dispatch: Dispatch<TracksActions>
}

type TracksProviderProps = {
    children: ReactNode
}

export const TracksContext = createContext<TracksContextProps>(null!)

export const TracksProvider = ({ children } : TracksProviderProps) => {
    const [state, dispatch] = useReducer(tracksReducer, initialState)

    return (
        <TracksContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            { children }
        </TracksContext.Provider>
    )
}