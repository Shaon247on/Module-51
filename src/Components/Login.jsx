import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";


const Login = () => {
    // const {signInUser}= useContext(AuthContext)
    const [hidden, setHidden] = useState(true)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

    }

    return (
        <div className="hero mx-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
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
                                    className="input input-bordered w-full"
                                    required />
                                <button className="btn ml-[-50px] rounded-full absolute" onClick={() => setHidden(!hidden)}>{hidden ? <IoEye></IoEye> : <IoEyeOff></IoEyeOff>}</button>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="mt-3">
                            <p>New to the website, please <Link to='/register' className="text-blue-500 underline">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;