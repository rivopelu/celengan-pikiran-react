import React from 'react'
import { loginBg } from '../../assets'
import { Input, Button, Links } from '../../components'

import './login.scss'
const Login = () => {
  return (
    <div className='main-page' >

    <div className='right'>
      <p className='title'>login</p>
      
      <Input label="Email" placeholder="Email" />
      <Input label="Password" placeholder="Pasword" />
      <Button className="btn" title="Login"/>
      <Links className="links" title="Belum mempunyai akun? Silahkan daftar" />
    </div>
    <div className='left'>
      <img src={loginBg} className='left-img' alt="backgroundRegister" />
    </div>
  </div>
  )
}

export default Login