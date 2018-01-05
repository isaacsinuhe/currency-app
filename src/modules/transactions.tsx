import { handleActions } from 'redux-actions'

const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movies/FETCH_MOVIE'

const initialState = {

}

export const fetchMoviesActionCreator = (movies: any) => {
    
    return (
    {
        type: FETCH_MOVIES,
        payload: { movies }
    }
)}

export const fetchMovieActionCreator = (movie: any) => (
    {
        type: FETCH_MOVIE,
        payload: { movie }
    }
)

export const reducer = handleActions<any, any>(
    {
        [FETCH_MOVIES]: (state, action) => ({
                ...state,
                all: action.payload ? action.payload.movies : state.movies
            })
        ,
        [FETCH_MOVIE]: (state, action) => (
            {
                ...state,
                current: action.payload ? action.payload.movie :
                    state.current
            }
        )
    },
    initialState
)