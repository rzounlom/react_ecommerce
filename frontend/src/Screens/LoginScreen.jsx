import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button , Row, Col, } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import {login} from '../redux/actions/userActions'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div>
            
        </div>
    )
}

export default LoginScreen

