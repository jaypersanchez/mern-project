import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Register() {
    const [email, setemail]=useState('')
    const [pass, setpass]=useState('')

    function Register(e) {
        let data = {
            email:email,
            password: pass
        }

        axios.post('/register',data)
        .then(resp=>{
            if(resp) {
                alert('Successfully registered.  Now Login')
            }
            else {
                alert('Something went wrong with registry')
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='container'>
        <h2 className='m-5 text-center'>Register Account</h2>
            <form onSubmit={(e)=>Register(e)} className='col-md-5 mx-auto'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} className="form-control" placeholder="Enter email" required />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}} className="form-control" placeholder="Password" required />
                            </div>
                            
                            <button type="submit" className="btn btn-primary mb-5">Submit</button>
                            
            </form>
            <Link to='/' style={{textDecoration:'none',color:'#000'}} className='text-center mt-5'><h5>👉 Already a member? Login Here 👈</h5></Link>
        </div>
    )
}

export default Register
