import React, {useState} from 'react';

const ProviderSignUp = ()=> {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const nameInput = (e)=>{
        setName(e.target.value)
    }
    const addressInput = (e)=>{
        setAddress(e.target.value)
    }
    const emailInput = (e)=>{
        setEmail(e.target.value)
    }
    const numberInput = (e)=>{
        setPhoneNumber(e.target.value)
    }
    const passwordInput = (e)=>{
        setPassword(e.target.value)
    }
    const confirmPasswordInput = (e)=>{
        setConfirmPassword(e.target.value)
    }
        return (
            <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Sign Up as a Provider!</h1>
                        </div>
                        <form className="user">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control
                                    form-control-user" 
                                    id="exampleInputEmail" 
                                    placeholder="Business Name" 
                                    onChange={(e)=>nameInput(e)}
                                    value={name} 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="address" 
                                    className="form-control form-control-user" 
                                    id="exampleInputEmail" 
                                    placeholder="Business Address"
                                    onChange={(e)=>addressInput(e)}
                                    value={address} 
                                />
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                <input 
                                    type="email"
                                    className="form-control form-control-user" 
                                    id="exampleFirstName" 
                                    placeholder="Email Address"
                                    onChange={(e)=>emailInput(e)}
                                    value={email} 
                                />
                                </div>
                                <div className="col-sm-6">
                                <input 
                                    type="text" 
                                    className="form-control form-control-user" 
                                    id="exampleLastName" 
                                    placeholder="Phone Number"
                                    onChange={(e)=>numberInput(e)}
                                    value={phoneNumber} 
                                />
                                </div>
                            </div>
                           
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                <input 
                                    type="password" 
                                    className="form-control form-control-user" 
                                    id="exampleInputPassword"
                                    placeholder="Password"
                                    onChange={(e)=>passwordInput(e)}
                                    value={password}
                                />
                                </div>
                                <div className="col-sm-6">
                                <input 
                                    type="password"
                                    className="form-control form-control-user"
                                    id="exampleRepeatPassword" 
                                    placeholder="Repeat Password"
                                    onChange={(e)=>confirmPasswordInput(e)}
                                    value={confirmPassword}
                                />
                                </div>
                            </div>
                            <a href="login.html" className="btn btn-primary btn-user btn-block">
                                Register Account
                            </a>
                         
                        </form>
                        <hr/>
                        <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                        <a className="small" href="login.html">Already have an account? Login!</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        );
}

export default ProviderSignUp;