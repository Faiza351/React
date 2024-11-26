import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import img1 from '../assets/images/01.png'
import img2 from '../assets/images/02.png'
import img3 from '../assets/images/03.png'
import img4 from '../assets/images/04.png'
import img5 from '../assets/images/05.png'
import img6 from '../assets/images/06.png'
import img7 from '../assets/images/hero_1.jpg'
import img8 from '../assets/images/img_1_long.jpg'
import img9 from '../assets/images/img_1.jpg'
import img10 from '../assets/images/img_3.jpg'
import img11 from '../assets/images/img_5.jpg'
import img12 from '../assets/images/person_1.jpg'
import img13 from '../assets/images/person_2.jpg'
import img14 from '../assets/images/person_3.jpg'
import img15 from '../assets/images/slider-4.jpg'
import img16 from '../assets/images/slider-5.jpg'

function Home() {
  return (
    <>
      <Header />
      <br /><br /> <br /><br />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 c1'>
            <img src={img8} alt="img8" style={{ width: "100%", height: "100vh" }} />

          </div>
          <div className='col-sm-6 c2'>
            <h2 style={{ fontSize: "34px" }}>Welcome To Our Website</h2>
            <p style={{ color: "grey", fontSize: "18px" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
              a large language ocean.
            </p>
            <p style={{ color: "grey", fontSize: "18px" }}>A small river named Duden flows by their place and supplies it with the
              necessary regelialia.</p>
            <i className="fa-regular fa-circle-play"></i>
            <p style={{ color: 'lightseagreen', marginLeft: '60px', marginTop: '-40px', fontSize: '20px' }}><b>WATCH THE VIDEO</b></p>

          </div>

        </div>

      </div>
      <br /><br />
      <div className='container-fluid cf3r'>
        <h2 style={{ fontSize: "38px", textAlign: "center" }}>Experience Once In Your Life Time</h2>
        <div className='centerTxt'>
          <p style={{ color: "grey", textAlign: "center", fontSize: "20px", lineHeight: "1.7" }}>Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
        </div>
        <br /><br />
        <div className='row r1'>
          <div className='col-sm-4 c1'>
            <img src={img1} alt="img1" />  <br /><br />
            <h3>Good Foods</h3>
            <p style={{ color: "grey", fontSize: "18px" }}>Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div className='col-sm-4'>
            <img src={img2} alt="img2" />  <br /><br />
            <h3>Travel Anywhere</h3>
            <p style={{ color: "grey", fontSize: "18px" }}>Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div className='col-sm-4'>
            <img src={img3} alt="img3" />  <br /><br />
            <h3>Airplane</h3>
            <p style={{ color: "grey", fontSize: "18px" }}>Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <br /><br /><br />
        <div className='row r2'>
          <div className='col-sm-4'>
            <img src={img4} alt="img4" />  <br /><br />
            <h3>Beach Resort</h3>
            <p style={{ color: "grey", fontSize: "18px" }}>Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div className='col-sm-4'>
            <img src={img5} alt="img5" /> <br /><br />
            <h3>Mountain Climbing</h3>
            <p style={{ color: "grey", fontSize: "18px" }}>Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div className='col-sm-4'>
            <img src={img6} alt="img6" /> <br /><br />
            <h3>Hot Air Balloon</h3>
            <p style={{ color: "grey", fontSize: "18px" }}>Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

      </div>
      <br /><br /><br /><br /><br />
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>International Tour Management.</h1>
      <div className='centxt'>
        <p style={{ color: "grey", textAlign: "center", fontSize: "20px", lineHeight: "1.7" }}>Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>

      <div className='container-fluid dbg'>
        <br /><br /><br />


        <div className="imgslider">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img7} className="d-block img1c" alt="i7" />
              </div>
              <div className="carousel-item">
                <img src={img9} className="d-block img2c" alt="i9" />
              </div>
              <div className="carousel-item">
                <img src={img15} className="d-block img3c" alt="i15" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <br /><br /> <br />
        <h1 style={{ textAlign: "center", fontSize: "55px" }}>Recent Blog Post</h1>
        <div className='rbp'>
          <p style={{ color: "white", textAlign: "center", fontSize: "20px", lineHeight: "1.7" }}>Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>

        </div>
        <br />
        <Blog />
      </div>
      

      <div className='container-fluid customerCf'>
        <br /><br /><br /><br />
        <h1 style={{color:"black",textAlign:"center",fontSize:"60px"}}>Happy Customers</h1>
        <br /><br />
        <div className='row hcr'>
          <div className='col-sm-3 hcc1'>
            <img src={img12} alt="img12" className='rounded-circle' style={{width:"40%"}} />
            <br /><br />
            <p style={{fontSize:"22px",color:"black",fontStyle:"italic"}}>“Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                 a large language ocean.”
            </p>
            <p style={{fontSize:"22px",color:"gray",fontStyle:"italic"}}>— Clare Gupta</p>

          </div>
          <div className='col-sm-3 hcc2'>
           <img src={img13} alt="img13" className='rounded-circle' style={{width:"40%"}} />
           <br /><br />
           <p style={{fontSize:"22px",color:"black",fontStyle:"italic"}}>“Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                 a large language ocean.”
            </p>
            <p style={{fontSize:"22px",color:"gray",fontStyle:"italic"}}>— Clare Gupta</p>

          </div> 
          <div className='col-sm-3 hcc3'>
           <img src={img14} alt="img14" className='rounded-circle' style={{width:"40%"}} />
           <br /><br />
           <p style={{fontSize:"22px",color:"black",fontStyle:"italic"}}>“Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                 a large language ocean.”
            </p>
            <p style={{fontSize:"22px",color:"gray",fontStyle:"italic"}}>— Clare Gupta</p>

          </div>

        </div>
        <br /><br /><br /><br />

      </div>
      <br /><br /><br /><br /><br /> <br />
      <h2 style={{textAlign:"center",color:"black"}}>Top Destination</h2> <br />
      <div className='container tlast'>
        <div className='row tlastr'>
          <div className='col-sm-3'>
            <img src={img9} alt="img9"  style={{width:"100%"}}/> <br /> <br />
            <h3 style={{color:"black"}}>Food & Wines</h3>
            <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i><i className="fa-regular fa-star"></i>
                        <p
                            style={{color: "gray",fontStyle:" italic", marginLeft: "140px",fontSize: "18px",marginTop: "-24px"}}>
                            4,921 reviews
                        </p>
            </div>

           

          </div>
          <div className='col-sm-3'>
            <img src={img16} alt="img16" style={{width:"100%"}}/> <br /> <br />
            <h3 style={{color:"black"}}>Food & Wines</h3>
            <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i><i className="fa-regular fa-star"></i>
                        <p
                          style={{color: "gray",fontStyle:" italic", marginLeft: "140px",fontSize: "18px",marginTop: "-24px"}}>
                            2,112 reviews</p>
            </div>

          </div>
          <div className='col-sm-3'>
            <img src={img10} alt="img10" style={{width:"100%"}} /> <br /> <br />
            <h3 style={{color:"black"}}>Food & Wines</h3>
            <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star" style={{marginLeft: "-3px"}}></i><i className="fa-regular fa-star"></i>
                        <p
                            style={{color: "gray",fontStyle:" italic", marginLeft: "140px",fontSize: "18px",marginTop: "-24px"}}>
                            3,239 reviews</p>
            </div>

          </div>
          <div className='col-sm-3'>
            <img src={img11} alt="img11" style={{width:"100%"}}/> <br /> <br />
            <h3 style={{color:"black"}}>Food & Wines</h3>
            <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star" style={{marginLeft: "-3px"}}></i><i className="fa-regular fa-star"></i>
                        <p
                            style={{color: "gray",fontStyle:" italic", marginLeft: "140px",fontSize: "18px",marginTop: "-24px"}}>
                            6,421 reviews
                        </p>
            </div>
            

          </div>

        </div>

      </div>
      <br /><br /> <br /><br />
      <Footer />
    </>
  )
}

export default Home