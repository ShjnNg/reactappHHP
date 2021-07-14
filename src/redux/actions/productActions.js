import * as actionTypes from "../constants/productConstants";
import axios from "axios";
import { /* createActions, */ createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};
/* const URL = 'http://localhost:5000'; */
const URL = 'https://piano1.herokuapp.com';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get(`${URL}/api/products`);

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTop10Products = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get(`${URL}/api/search`);

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductsByType = (type) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_BYTYPE_REQUEST });

    const { data } = await axios.get(`${URL}/api/search/${type}`);
    
    dispatch({
      type: actionTypes.GET_PRODUCTS_BYTYPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_BYTYPE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        
    });
  }
};

export const getProductsByTitle = (title) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_BYTITLE_REQUEST });

    const { data } = await axios.get(`${URL}/api/search/title/${title}`);
    
    dispatch({
      type: actionTypes.GET_PRODUCTS_BYTITLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_BYTITLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/api/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};

export const createProduct = (data) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.CREATE_PRODUCTS_REQUEST });
    axios.post(`${URL}/api/products`, data);
    dispatch({
      type: actionTypes.CREATE_PRODUCTS_SUCCESS
    });
  } 
  catch (error) {
    dispatch({
      type: actionTypes.CREATE_PRODUCTS_FAIL,
    });
  }
};

export const updateProduct = (data) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.UPDATE_PRODUCTS_REQUEST });
    axios.post(`${URL}/api/products/update`, data);
    dispatch({
      type: actionTypes.UPDATE_PRODUCTS_SUCCESS
    });
  } 
  catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PRODUCTS_FAIL,
    });
  }
};

export const delProduct = (id) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.DEL_PRODUCTS_REQUEST });
    axios.delete(`${URL}/api/products/${id}`);
    dispatch({
      type: actionTypes.DEL_PRODUCTS_SUCCESS
    });
  } 
  catch (error) {
    dispatch({
      type: actionTypes.DEL_PRODUCTS_FAIL,
    });
  }
};

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');
export const showLogIn = createAction('SHOW_LOGIN_MODAL');
export const hideLogIn = createAction('HIDE_LOGIN_MODAL');