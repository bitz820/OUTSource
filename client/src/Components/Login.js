import React from 'react'

const loginUser = () => {
    console.log("hi")
}

const handleChange = () => {
    console.log("hi")
}

function Login() {
    return (
        <>
            <div>
                <div >
                    <div >
                        <form onSubmit={loginUser}>
                            Email:
                            <input  onChange={handleChange} 
                            // value={email} 
                            name="email" type="email" />
                            Password:
                            <input  onChange={handleChange} 
                            // value={password} 
                            name="password" type="password" />
                            <input type="submit" />
                            {/* {error ? renderError : null} */}
                        </form>
                    </div>
                </div>
            </div>
            <div>Sign Up</div>
        </>
    )
}

export default Login