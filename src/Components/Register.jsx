import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {

    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    const {cerateUser} = authInfo
    const [hidden, setHidden] = useState(true)
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)
        // create user in firebase

        cerateUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })

    }

    return (
        <div className="hero mx-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="your Name"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type='email'
                                placeholder="your email"
                                className="input input-bordered"
                                required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={hidden ? 'text' : 'password'}
                                    placeholder="password"
                                    className="input w-full border-none outline-none"
                                    required />
                                <button className="btn ml-[-45px] rounded-full absolute text-lg" onClick={() => setHidden(!hidden)}>{hidden ? <IoEye></IoEye> : <IoEyeOff></IoEyeOff>}</button>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="mt-3">
                            <p>Already have an Account, please <Link to='/login' className="text-blue-500 underline">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;