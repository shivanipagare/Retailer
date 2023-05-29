import React, { useState } from 'react'
import Link from 'next/link';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import axios from 'axios';




const Login = () => {

  const router = useRouter()
  const [loginInfo, setLoginInfo] = useState({
    retailer_id: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  const submitData = async (e) => {
    e.preventDefault()
    const headers = {
      "Content-Type": "application/json"
    }
    const apiData = await axios.post("http://localhost:5500/shopkeeperlogin", loginInfo, headers)
    console.log(apiData.data.status, 'api data')
    console.log(apiData.data.message)
    console.log(apiData.data.users)
    console.log(apiData.data.users.status)
    console.log(apiData.data.ownername)
    //     sessionStorage.setItem('token', apiData.data.token)

    //     const user = apiData.data.users;
    // const userString = JSON.stringify(user);
    // sessionStorage.setItem('user', userString);
    // sessionStorage.setItem('owner', apiData.data.ownername);


    if (apiData.data.users.status == 'deactive') {
      alert(apiData.data.message)
    }
    else {
      sessionStorage.setItem('token', apiData.data.token)
      const user = apiData.data.users;
      const userString = JSON.stringify(user);
      sessionStorage.setItem('user', userString);
      sessionStorage.setItem('owner', apiData.data.ownername);
      router.push('/content/dashboard/dashboard')
    }
  }

  return (


    <>

      <section>
        <div className="page">
          <div className="welcome">
            <h2>Welcome Back!</h2>
            <h4 style={{ fontStyle: "italic", color: "orange" }}>
              <ShoppingCartOutlined />
            </h4>
            <h4 style={{ fontStyle: "italic", color: "white" }}>SHOPPER's</h4>
            <Link href="/component/signup" >
              <button className="sign_in">Sign up</button>
            </Link>
          </div>
          <div className="sign_up">
            <form method="POST" action="signup_user.php">
              <h2>Login to your Account</h2>

              <br />
              <input type="text" name="retailer_id" placeholder="RetailerId" required onChange={handleChange} />
              <br />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <br />
              <br />

              <button className="up" onClick={submitData}>Login</button>

            </form>
            <div id="formFooter">
              <p className="fgpwd" style={{ marginTop: "30px", cursor: "pointer" }}>Forget Password?</p>
            </div>
          </div>

        </div>
      </section>

    </>

  )
}

export default Login;
