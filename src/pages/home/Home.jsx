import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Wrapper from '../../components/wrapper/Wrapper'
import WrapperText from '../../components/wrapper/WrapperText'

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Navbar/>
        <div className="wrapper__container-text">
        <WrapperText /> 
       </div> 
      </Wrapper>

      <div className="table__container">
        
      </div>
    </div>
    
  )
}

export default Home