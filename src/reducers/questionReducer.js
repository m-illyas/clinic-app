import {
  ADD_QUESTION,
  EDIT_QUESTION,
  DELETE_QUESTION,
  QUESTION_CHANGED,
  QUESTION_FETCH_SUCCES,
  FETCH_CLIENTS,
  FETCH_CLIENT_ANSWERS,
  HANDLE_UPDATE_QUE_ERROR,
  HANDLE_DELETE_QUE_ERROR,
  HANDLE_ADD_QUE_ERROR,
} from '../actions/types';
const INITIAL_STATE = {
  question: '',
  list: [],
  loading: true,
  clients: [],
  answers: [],
  add_que_error: null,
  update_que_error: null,
  delete_que_error: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CLIENT_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };

    case EDIT_QUESTION:
      return {
        ...state,
        add_que_error: null,
        update_que_error: null,
        delete_que_error: null,
      };
    case DELETE_QUESTION:
      return {
        ...state,
        list: [],
        update_que_error: null,
        delete_que_error: null,
        add_que_error: null,
      };
    case ADD_QUESTION:
      return {
        ...state,
        question: '',
        update_que_error: null,
        delete_que_error: null,
        add_que_error: null,
      };
    case QUESTION_CHANGED:
      return {...state, question: action.payload};
    case QUESTION_FETCH_SUCCES:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case HANDLE_ADD_QUE_ERROR:
      return {
        ...state,
        add_que_error: action.payload,
      };
    case HANDLE_ADD_QUE_ERROR:
      return {
        ...state,
        add_que_error: action.payload,
      };
    case HANDLE_UPDATE_QUE_ERROR:
      return {
        ...state,
        update_que_error: action.payload,
      };
    case HANDLE_DELETE_QUE_ERROR:
      return {
        ...state,
        delete_que_error: action.payload,
      };
    case FETCH_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    default:
      return state;
  }
};
