import React from "react";
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo  = {
     
      email: data.email,
      password: data.password 
    }
   await axios.post("http://localhost:4001/user/login" , userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        alert("Login  successful")
        document.getElementById("my_modal_3").close();
        window.location.reload()
      } 
      localStorage.setItem("Users" , JSON.stringify(res.data.user))
    }).catch((err) => {
      if (err.response) {
        alert("Error:" + err.response.data.message)
      }
    })
  }

  
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login!</h3>
          {/* email  */}
          <div className="mt-4 space-y-3">
            <span>Email</span> <br />
            <input
              type="email"
              placeholder="Dost , Email daal apna !"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          {/* password */}
          <div className="mt-4 space-y-3">
            <span>Password</span> <br />
            <input
              type="password"
              placeholder="Ek mast sa password v dee de !"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500">This field is required</span>}
          </div>
          {/* button  */}
        <div className="flex  justify-around mt-4">
          <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800">Login</button>
          <p>Account nahi hein ?? koi nahi  bana le ek! <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign up</Link></p>
        </div>
        </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;


