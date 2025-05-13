import React from 'react'

const Login = () => {
  return (
    <div>
 <div className="container">
        <div className="logo">
            {/* <span style="font-size: 40px; color: white;">&#9679;&#9679;&#9679;</span> */}
        </div>
        <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Username@gmail.com"/>
        </div>
        <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="●●●●●●●●●●●●●●●●●●●●●●●●●●"/>
        </div>
        <a href="#" className="login-btn">Login</a>
        <div className="footer">
            <a href="#">Signup</a>
            <a href="#">Forgot Password?</a>
        </div>
    </div>

    </div>
  )
}

export default Login