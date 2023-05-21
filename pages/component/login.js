import React from 'react'
import Link from 'next/link';
//import { color } from '@chakra-ui/react';
import {ShoppingCartOutlined ,UserOutlined,KeyOutlined} from '@ant-design/icons'
const Login = () => {
  return (
    <div>
      <div className="wrapper">
  <div className="logo d-flex">
    <h4 style={{fontStyle:"italic",color:"orange" }}>
  <ShoppingCartOutlined />
  </h4>
   <h4 style={{fontStyle:"italic",color:"#039BE5" }}>SHOPPER's</h4>
  </div>
  
  <form className="p-3 mt-3">
    <div className="form-field d-flex align-items-center">
     <span><UserOutlined /></span>
      <input type="text" name="userName" id="userName" placeholder="RetailerId" />
    </div>
    <div className="form-field d-flex align-items-center">
      <span><KeyOutlined /></span>
      <input type="password" name="password" id="pwd" placeholder="Password" />
    </div>
    <Link href='/component/sidebar'><button  className="btn mt-3" >Login</button></Link>
    
  </form>
  <div className="text-center fs-6">
    <a href="#">Forget password?</a> or <Link href="/signup">Sign up</Link>
  </div>
</div>

    </div>
  )
}

export default Login;
