import React from 'react'
import './intro.css'
import bg from '../../assets/myImage.png'
import btnImg from '../../assets/hire.png'
import{Link} from 'react-scroll';
import Swal from 'sweetalert2';

const Intro = () => {
  const hireMe = () => {
    Swal.fire({
      title: "Wanna Hire Me! Send me a Message Now. Thanks &#128522;",
      showClass: {
        popup: `
          animate__animated
          animate__backInDown
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__bounce
          animate__faster
        `,
      },
    });
  };
  return (
   <section id="intro">
    <div className='introContent'>
    <span className='hello'>Hello </span>
    <span className='introText'>I'm<span className='introName'> Sidhant</span><br/>Software Developer</span>
    <p className='introPara'><br></br>As an ambitious and highly motivated individual, I possess a strong foundation<br></br> in programming languages, system architectures, and project management.</p>
    <Link><button className='btn' onClick={hireMe}><img src={btnImg} alt="" className='btnImg' />Hire Me</button></Link>
    
    </div>
    <img src={bg} alt="" className='bg'/>
   
       </section>
  )
}

export default Intro