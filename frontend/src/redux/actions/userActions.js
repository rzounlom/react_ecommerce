import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../constants/userConstants';
const backendUrl = "http://localhost:5000/api";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(`${backendUrl}/users/login`, {email,password}, config)

        dispatch({
            type: USER_LOGIN_SUCCESS
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.messsage
                ? error.response.data.message
                : error.message,
          });
    }
}