import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom';


export default function Registrationpage() {

    const history=useNavigate()
    const [inputText, setText] = useState({
        name: "",
        email: "",
        date:"",
        password: ""
    })
    
    // const [flag, setFlag] = useState(false);

    const handleOnChange = (e) => {
        setText({ ...inputText, [e.target.name]: e.target.value });
    }
    // console.log(inputText);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.name || !inputText.email || !inputText.date || !inputText.password) {
            alert("all fields are mandatory");
        } else {
            // setFlag(true);
            const data=[];
            const getdata=JSON.parse(localStorage.getItem("user1"))
            console.log(getdata)
            if(getdata!=null){
                 localStorage.setItem("user1", JSON.stringify([...getdata, inputText]));
            }else{
                localStorage.setItem("user1", JSON.stringify([...data, inputText]));
            }
            
            history("/");
        }
    }

    return (
        <div className="App">
            {/* <pre>{(flag) ? <h2> Hello {inputText.name}. you have registered successfully</h2> : ""}</pre> */}
            <h2>Sign UP</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <input type="text" className='inputBox' placeholder='name' name="name" value={inputText.name} onChange={handleOnChange} />
                </div>
                <div>
                    <input type="email" className='inputBox' placeholder='email' name="email" value={inputText.email} onChange={handleOnChange} />
                </div>
                <div>
                    <input type="date" className='inputBox' placeholder='date' name="date" value={inputText.date} onChange={handleOnChange} />
                </div>
                <div>
                    <input type="password" className='inputBox' placeholder='password' name="password" value={inputText.password} onChange={handleOnChange} />
                </div>
                <div>
                    <button type='submit'> Submit </button>
                </div>
            </form>

            <p className='my-3'>Already have an account <span><Link to="/">SignIn</Link></span></p>
        </div>
    );
}
