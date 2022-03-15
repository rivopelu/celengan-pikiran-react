import React from 'react'
import './links.scss'
const Links = ({onClick, title}) => {
  return (
    <div className='links' onClick={onClick}>{title}</div>
  )
}

export default Links