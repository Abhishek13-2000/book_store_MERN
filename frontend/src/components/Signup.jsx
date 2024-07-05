import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo  = {
      fullname: data.fullname,
      email: data.email,
      password: data.password 
    }
   await axios.post("http://localhost:4001/user/signup" , userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        alert("Sign up successful")
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
      <div
        id="my_modal_3"
        className="flex h-screen items-center justify-center "
      >
        <div className="border-black border-2 p-5 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}

            <h3 className="font-bold text-lg">SignUp!</h3>
            {/* name  */}
            <div className="mt-4 space-y-3">
              <span>Name</span> <br />
              <input
                type="text"
                placeholder="Dost , Tera naam kya hein ?"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* email  */}
            <div className="mt-4 space-y-3">
              <span>Email</span> <br />
              <input
                type="email"
                placeholder="Dost , Email daal apna !"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
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
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* button  */}
            <div className="flex  justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800">
                SignUp
              </button>
              <p>
                {" "}
                Account hain? idhar kiyu aya ?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">
                  Home
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
