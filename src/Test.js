import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch , useSelector} from 'react-redux'
import { storeData } from './redux/action'

const Test = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {user} = useSelector(satate => this.state.user)
    const dispatch= useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            'email': email,
            'password': password
        }

        try {
             await axios.post('http://data.revizify.com/api/v1/user/login', user)
            dispatch(storeData , user)

        } catch (error) {

        }
    }

    return (
        <div>
            <h1>Login form</h1>
            <form onSubmit={handleSubmit}>
                <label>Email Id</label>
                <input name='email' onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <label>Password</label>
                <input name='password' onChange={(e) => setPassword(e.target.value)}></input>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Test