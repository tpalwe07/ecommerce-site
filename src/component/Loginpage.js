import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Loginpage() {

    const history = useNavigate();

    const [inputText, setText] = useState({
        email: "",
        password: ""
    })
    // const [data, setData] = useState([]);

    const handleOnChange = (e) => {
        setText({ ...inputText, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem("user1");
        // console.log(getUserArr)
        if (!inputText.email || !inputText.password) {
            alert("all fields are mandatory");
        }
        else {
            if (getUserArr && getUserArr.length) {

                const userData = JSON.parse(getUserArr);

                const userLogin = userData.filter((e) => {
                    return e.email === inputText.email && e.password === inputText.password
                })
                if (userLogin.length === 0) {
                    alert("wrong credential");
                }
                else {
                    // console.log("user login successfully");
                    const data=[];
                    localStorage.setItem("activeLogin", JSON.stringify([...data, inputText]));
                    history("/details");
                }
            }else{
                alert("We don't have account with this mail id, please register")
            }
        }
    }

    return (
        <div className="App">
            <h2>Sign IN</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <input type="email" className='inputBox' placeholder='email' name="email" value={inputText.email} onChange={handleOnChange} />
                </div>
                <div>
                    <input type="password" className='inputBox' placeholder='password' name="password" value={inputText.password} onChange={handleOnChange} />
                </div>
                <div>
                    <button type='submit'> Submit </button>
                </div>
                <p className='my-3'>Don't have an account <span><Link to="/signup">SignUp</Link></span></p>
            </form>
        </div>
    );
}
