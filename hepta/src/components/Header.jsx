import React from 'react'

function Header() {
  return (
    <>
      <div className='container-fluid cf'>
        <div className='navbar nb'>
          <a href="/" style={{textDecoration:"none"}}> <h1 style={{color:"white"}}>Hepta</h1></a>
          <div className="offcanvas offcanvas-end ofcb" id="demo">
               <div className="offcanvas-header">
                  <button type="button" className="btn-close buttonClose" data-bs-dismiss="offcanvas"></button>
               </div>
               <div className="offcanvas-body">
                  <h1 className='h2i1'>Home</h1>
                  <h1 className='h2i'>Hotels</h1>
                  <h1 className='h2i'>About Us</h1>
                  <h1 className='h2i'>Gallery</h1>
                  <h1 className='h2i'>News</h1>
                  <h1 className='h2i'>Contact Us</h1>
               </div>
          </div>

          
            <button className="btn button" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
              <i className="fa-solid fa-bars"></i>
            </button>
          
        </div>
        <div className='container c1'>
          <h1 style={{color:"white",fontSize:"80px"}}>Travel & Tours</h1><br />
          <p style={{fontSize:"32px",color:"white"}}>A free template by <mark className="mark"> <u> Colorlib </u></mark>. Download and share!</p>
          <br /><button className="btnew"><b>VISIT COLORLIB</b></button>
        </div>

      </div>

      

      
    </>
  )
}

export default Header