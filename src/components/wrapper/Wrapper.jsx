import React from 'react'
import './wrapper.scss'


const Wrapper = (props) => {
  return (
    <div className='wrapper__container'>
        {props.children}
      
    </div>
  )
}

export default Wrapper
