import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'
import { act } from 'react-dom/test-utils';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type : actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDITENS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-7294b.firebaseio.com/ingredients.json')
            .then(response =>{
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    };
};