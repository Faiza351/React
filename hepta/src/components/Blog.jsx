import React from 'react'
import img9 from '../assets/images/img_1.jpg'
import img10 from '../assets/images/img_3.jpg'
import img16 from '../assets/images/slider-5.jpg'

function Blog() {
  return (
    <>
      

    <div className='container cblog'>
      <div className='row '>
        <div className='col-sm-4 newc1'>
          <img src={img9} alt="img9" className='img9c' />
          <div className='txtleft'>
            <p className='p1txtleft'>February 26, 2018</p>
            <h2 style={{color:"black"}}>45 Best Places To Unwind</h2>
            <p className='p2txtleft'>Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts.
            </p>

          </div>
        </div><br /><br />
        <div className='col-sm-4 newc2'>
          <img src={img16} alt="img16" className='img16c' />
          <div className='txtleft'>
            <p className='p1txtleft'>February 26, 2018</p>
            <h2 style={{color:"black"}}>45 Best Places To Unwind</h2>
            <p className='p2txtleft'>Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <br /><br />
        </div> 
        
        <div className='col-sm-4 newc3'> 
          <img src={img10} alt="img10" className='img10c' />
          <div className='txtleft'>
            <p  className='p1txtleft'>February 26, 2018</p>
            <h2 style={{color:"black"}}>45 Best Places To Unwind</h2>
            <p className='p2txtleft'>Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts.
            </p>

          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Blog