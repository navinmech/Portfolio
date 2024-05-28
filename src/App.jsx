import React from "react";
import img1 from './image/my1.jpg'
import './style.css'
import Contact from "./contact";
import Home from "./Home";



function Myele(){


  return(
    <div class="hero">
        
        <nav>
            <h2 class="logo">Port<span>folio</span></h2>
            
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            
        </nav>
        </div>
);
}
function Center(){
  return(
    <div className="content">
    <table>
      <tbody>
        <tr> 
          <td style={{ paddingTop: "50px" }}>
            <div className="top">
              <h4>Hello, my name is</h4>
              <h1>Navin.R</h1><br></br>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px", marginBottom: "10%" ,marginLeft:"-30%"}}>
              <a
                href="https://drive.google.com/file/d/1o3b1TeAZBzFN_ziGK0terYBCQatUqCGV/view?usp=sharing"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px 30px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "18px",
                  marginRight: "0", 
                }}
              >
                MY RESUME
              </a>
            </div>
          </td>
          <td style={{ paddingTop: "50px" }}>
            <img src={img1} alt="logo" id="img-one" className="img1" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
}


function Section(){

  return (
    <section className="about" id="about">
      <div className="main">
      
        <div className="about-text">
          <h2>About Me</h2>
          <h5>CAD Designer <span>& Web Developer</span></h5>
          <p>
            As a versatile CAD Designer proficient in precise technical drawings, alongside a skilled Web Developer crafting dynamic and user-centric websites with the MERN stack. Passionate about translating concepts into impactful designs, whether in physical product design or the digital realm.
          </p>
          <div style={{ textAlign: "center", marginTop: "10px", marginBottom: "10%" ,marginLeft:"0%"}}>
              <a
                href="https://drive.google.com/drive/folders/1yw1ZeHAZ9-kvRr-mynTv25I_Jtv1V84O?usp=sharing"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px 30px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "18px",
                  marginRight: "0", 
                }}
              >
                CERTIFICATE 
              </a>
            </div>
          

        </div>
      </div>
    </section>
  );
};

function Contact1() {
  return (
    <div class="contact-me" id="contact">
      <h1>Contact Me</h1>
      <div style={{ textAlign: "center", marginTop: "10px", marginBottom: "10%", marginLeft: "0%", backgroundColor:"red"}} >
      <p >Phone No: 9751679120.</p>
    <p >Email: navin.r2022mech@sece.ac.in</p>
    </div>
    </div>
  );
}
function End(){
  return(
    <footer>
        <p></p>
        <p>More Details:</p>
    <div class="social">
        <a id="git" href="https://github.com/navinmech"></a>
        <a id="ins" href="https://www.instagram.com/navinr_05?igsh=eWdmamdqeGpyZzEz"></a>
        <a id="lin" href="https://www.linkedin.com/in/navin-r-4a71b8257"></a>
    </div>
    <p class="end">CopyRight By Navin</p>
    </footer>
  )
  
}
export default function All(){
  return(
    
    <div>
    <Myele/>
    <Center/>
    <Section/>
    <Contact1/>
    <End/>
    </div>
  );
}