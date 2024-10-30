import { TrackData } from "../types"

export type TracksActions = 
    { type: 'search-track', payload: { track: string, data: TrackData } } |
    { type: 'reset-app' }

export type TracksState = {
    track: string
    data: TrackData
    // songs: []
    // albumes: []
    // total_albumes: number
    // total_canciones: number
}

export const initialState : TracksState = {
    track: '',
    data: {
        canciones: [],
        albumes: [],
        total_albumes: 0,
        total_canciones: 0    
    }
    // songs: [],
    // albumes: [],
    // total_albumes: 0,
    // total_canciones: 0
}

export const tracksReducer = (
    state: TracksState = initialState,
    action: TracksActions
) => {
    if( action.type === 'search-track' ) {
        return {
            ...state,
            track: action.payload.track,
            data: action.payload.data
        }
    }

    if( action.type === 'reset-app' ) {
        return {
            ...state,
            track: '',
            data: {
                canciones: [],
                albumes: [],
                total_albumes: 0,
                total_canciones: 0    
            }
        }
    }

    return state
}