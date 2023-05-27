import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
};

const ACTIONS = {
    GET_DATA_LOADING: "GET_DATA_LOADING",
    GET_DATA_SUCCESS: "GET_DATA_SUCCESS",
    GET_DATA_ERROR: "GET_DATA_ERROR",
};

const reudcer = (state , action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.GET_DATA_LOADING:
            return { ...state, isLoading: true, isError: false };
        case ACTIONS.GET_DATA_SUCCESS:
            return { ...state, isLoading: false, data: payload };
        case ACTIONS.GET_DATA_ERROR:
            return { ...state, isLoading: false, isError: true };

        default:
            return state;
    }
};

const useFetch = (URL) => {
    const [state, dispatch] = useReducer(reudcer, initialState);

    useEffect(() => {

        dispatch({ type: ACTIONS.GET_DATA_LOADING });

        axios
            .get(URL)
            .then((res) =>
                dispatch({ type: ACTIONS.GET_DATA_SUCCESS, payload: res.data })
            )
            .catch(() => dispatch({ type: ACTIONS.GET_DATA_ERROR }));
    }, [URL]);

    

    return {state};
};

export default useFetch;
