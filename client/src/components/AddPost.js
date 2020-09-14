import React, {useState} from 'react'
import NavBar from './Navbar'
import axios from 'axios'
import {Link} from 'react-router-dom'

function AddPost() {

    const [title, settitle]=useState('')
    const [auth,setauth]=useState('')
    const [desc,setdesc]=useState('')
    const [msg,setmsg]=useState('')

    function setTitle(e) {
        e.preventDefault()
        let data = {
            title: title
        }

        axios.post('http://localhost:5000/login',data)
        .then(resp=>{
            if(resp.data=="1") {
                setmsg("Successful Login")
            }
            else if(resp.data=="0") {
                setmsg("Invalid Credentials")
            }
            else {
                setmsg("No user Found.  Please register this user")
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
           <NavBar /> 
           
            <div className='container mt-5'>
            <h2 className='m-5 text-center'>Add New Post</h2>
                <form  className='col-md-6 mx-auto'>
                <h5 className='p-3 text-center text-white'>{msg}</h5>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input 
                                    type="text" 
                                    value={title} 
                                    className="form-control" 
                                    onChange={(e)=>{setTitle(e.target.value)}} 
                                    placeholder="Enter Title" required />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <input 
                                    type="text" value={desc} 
                                    className="form-control" 
                                    onChange={(e)=>{setdesc(e.target.value)}}
                                    rows='8' 
                                    placeholder="Enter Description" required />
                                </div>

                                <div className="form-group">
                                    <label>Author</label>
                                    <input 
                                    type="text" value={auth} 
                                    className="form-control" 
                                    onChange={(e)=>{setauth(e.target.value)}} 
                                    placeholder="Enter Author" required />
                                </div>

                                <button type="submit" className="btn btn-primary">Post</button>
                                <Link to='/posts' className='btn btn-dark ml-4'>Back to Home</Link>
                </form>
                
            </div>
        </div>
    )
}

export default AddPost