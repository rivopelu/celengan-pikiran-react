import React from 'react'
import { registerBg } from '../../assets'
import { Input, Button, Links } from '../../components'

import './register.scss'

const Register = () => {
  return (
    <div className='main-page' >

      <div className='right'>
        <p className='title'>Register</p>
        <Input label="Full name" autofocus placeholder="Full Name" />
        <Input label="Email" placeholder="Email" />
        <Input label="Password" placeholder="Pasword" />
        <Button className="btn" title="submit"/>
        <Links className="links" title="Kembali ke halaman Login" />
      </div>
      <div className='left'>
        <img src={registerBg} className='left-img' alt="backgroundRegister" />
      </div>
    </div>
  )
}

export default Register