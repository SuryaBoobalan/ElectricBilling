import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function AddUser() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: "",
        division : ""

    })

    const onInputChange = (e) => {
        
            setUser({ ...user, [e.target.name]: e.target.value });
        
    };

    const onPost = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:1111/User`, user)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "User Account Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });

          navigate('/')
    }
  return (

    
    <div>
        <div className="container" style={{ height: '100vh', padding: '100px'}} >
                <div className="w-full max-w-xs" style={{ margin: '5% auto 0' }} >
                    <form onSubmit={(e) => onPost(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2"  for="email">
                                User Name
                            </label>
                            <input id = "userName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="userName" type="text" required="required"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Division
                            </label>
                            <input id = "division" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="division" type="text" required="required"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                       
                        <button id = 'addUser' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add User
                        </button>
                    </form>
                   
                </div>
            </div>
    </div>
  )
}

export default AddUser
