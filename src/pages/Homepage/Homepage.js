import React, { Component, useRef } from "react";
import styles from "./Homepage.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "bootstrap/dist/css/bootstrap.min.css";

//NeonButton
import GlowCardSimple from "../../components/GlowCardSimple/GlowCardSimple";
import Loader from "../../components/Loader/Loader";
import Load from "../../components/Load/Load";
import Heading from "../../components/Heading/Heading";
import Heading1 from "../../components/Heading1/Heading1";
import Footer from "../../components/Footer/Footer";
import Dev from "../../components/Dev/Dev";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

class Homepage extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return <Load />; // render null when app is not ready
    }
    const { is_visible } = this.state;
    return (
      <>
        <Loader />

        {/* Child Class */}

        <section id="#">
          <div
            className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`}
          > 
            <img
              src={`${process.env.PUBLIC_URL}/images/about-us/abacus logo sponsors page.png`}
              alt=""
              style={{
                width: "330px",
                height: "350px",
                marginLeft: "auto",
                marginRight:"auto"
                
              }}
            />
           
            <div className="container-fluid  ml-sm-0  justify-content-center align-self-center pb-5">
              <div className="row justify-content-center align-self-center ">
                <div className="col col-lg-3 col-md-4   mt-5   text-center">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={5} redraw={true} suffix=" +">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>{" "}
                  <Heading1 text="Events" fontSize="20px" />
                </div>
                <div className="col mt-5   col-lg-3 col-md-4 text-center">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={3} redraw={true} suffix=" +">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>{" "}
                  </div>
                  <Heading1 text="Workshops" fontSize="20px" />
                </div>
                <div className="col col-lg-3 col-md-4 mt-5 text-center ">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={1} redraw={true} suffix=" ">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                  <Heading1 text=" Mega Hackathon" fontSize="20px" />
                </div>
                <div className="col col-lg-3 col-md-4  mt-5  text-center">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={50} redraw={true} suffix=" K+">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>{" "}
                  </div>
                  <Heading1 text="Prize Money" fontSize="20px" />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </section>
     {/* Child Class */}
     <div className={`${styles._homepage} ${styles._responsive} ${styles.bg}`}>
     <div  className={`${styles.visible}`} >
        
        <GlowCardSimple props={{
                           
                           content:"ABACUS is the annual intercollege technical symposium of the Department of Computer Science and Engineering conducted by the Computer Science and Engineering Association (CSEA), College of Engineering, Guindy.",
                           }} />
                   </div>
     
     <GlowCardSimple props={{
                        
                        content: "Grab this opportunity and win cash prizes, Intern Opportunities , T shirts and many surprising prizes. ",
                        }} />
               
   
                <div className={`${styles._rulesDivContainer1}`}>
              <div className={`${styles._rulesDiv}`}>
         <div  className={`${styles.vis}`} >
        
     <GlowCardSimple props={{
       link:"https://cseaceg.org.in/",
                        title: "CSEA",
                        content: "CSEA takes immense pleasure in organizing Abacus’21. This version is going to be one of its kind - a symposium completely organized online. We operate with a vision – to bring together students from multiple engineering colleges globally and give them a chance to demonstrate their technical prowess, ignite their passion for learning and to win exciting prizes and internships. ",
                        }} />
                </div>
</div>  </div></div> 
        {/* Child Class */}
        <div className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`}>
        <div class="embed-responsive embed-responsive-21by9 my-5 mx-lg-5 mx-md-4 mx-sm-0 mx-xs=0">
          <iframe src="https://www.youtube.com/embed/W0eDjWr3ATI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
         <div  className={`${styles.visible}`} >
  <GlowCardSimple props={{
    link:"https://cseaceg.org.in/",
                        title: "CSEA",
                        content: "CSEA takes immense pleasure in organizing Abacus’21. This version is going to be one of its kind - a symposium completely organized online. We operate with a vision – to bring together students from multiple engineering colleges globally and give them a chance to demonstrate their technical prowess, ignite their passion for learning and to win exciting prizes and internships. ",
                        }} />
                </div>
</div>
        {/* Child Class */}
      <div className={`${styles._homepage} ${styles.bg} ${styles._responsive}`}>
      <div className="text-center">
            <Heading text="Sponsors" fontSize="60px" />
            <div class="mt-5">
            <Heading text="Title Sponsors" fontSize="30px" />
            </div>
          </div>
          
            
               
          
          
          <div className="container-fluid mx-auto d-flex justify-content-center align-self-center">
            <div className="row  d-flex justify-content-center align-self-center pb-5">
              <div className="col col-lg-6  col-md-6 col-sm-6 col-xs-12 pr-lg-5 pt-lg-5 pt-md-5 pt-sm-5 pt-xs-5">
              <img src={`${process.env.PUBLIC_URL}/images/about-us/motorq.svg`} class="img-fluid" style={{width:'100%',height:'auto'}}
              alt="Motorq"/>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-lg-5">
              <img src={`${process.env.PUBLIC_URL}/images/about-us/visa_modified.svg`} class="img-fluid" style={{width:'100%',height:'auto'}} alt="Visa"/>
              </div></div></div>
          
           
            </div>
            
           
        

        {/* Child Class */}
        <div className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`}>
          <div className="text-center mt-5">
            <Heading text="Developers and Design Team" fontSize="40px" />
          </div>
          <div className="container-fluid m-auto d-flex justify-content-center pt-5 align-self-center pb-5">
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5  d-flex justify-content-center align-self-center pb-5">
              

              <div className="col   pb-5 ">
                <Dev
                  props={{
                    title: "Darrshana",
                    title1: "Frontend",
                    img: "dev/darrshana.jpeg",
                    href:
                      "https://www.linkedin.com/in/darrshana-rajkumar-6a36aa1ba",
                  }}
                />
              </div>

              <div className="col   pb-5 ">
                <Dev
                  props={{
                    title: "Paargav Shanker",
                    title1: "Frontend",
                    img: "dev/paargav.jpeg",
                    href:
                      "https://www.linkedin.com/in/paargav-shanker-b6708a194/",
                  }}
                />
              </div>
              <div className="col  pb-5 ">
                <Dev
                  props={{
                    title: "Shankar Kumar",
                    title1: "Frontend",
                    img: "dev/shankar.jpeg",
                    href:
                      "https://www.linkedin.com/in/shankar-kumar-s",
                  }}
                />
              </div>
              
                
              <div className="col  pb-5 ">
                <Dev
                  props={{
                    title: "Srinath",
                    title1: "Backend",
                    img: "dev/Srinath.jpg",
                    href:"https://www.linkedin.com/in/srinath-sureshkumar-3467331a5/"
                  }}
                />
              </div>
              <div className="col  pb-5 ">
              <Dev
                  props={{
                    title: "Umar Ahmed",
                    title1: "Frontend",
                    img: "dev/umar.jpeg",
                    href:
                      "https://www.linkedin.com/in/umar-ahmed-6892481b3",
                  }}
                />
              </div>
              <div className="col  pb-5  ">
                <Dev
                  props={{
                    title: "Adhithya",
                    title1: "Design",
                    img: "dev/Adhithya_K.jpg",
                    href:"https://www.linkedin.com/in/adhithya-karthikeyan/"
                  }}
                />
              </div>
              <div className="col  pb-5 ">
                <Dev
                  props={{
                    title: "Akash",
                    title1: "Design",
                    img: "dev/Akash.jpg",
                    href:"https://www.linkedin.com/in/akash-murugesh-0151531ab/"
                  }}
                />
              </div>
              
              <div className="col  pb-5 ">
                <Dev
                  props={{
                    title: "Deepak",
                    title1: "Design",
                    img: "dev/deepak.jpeg",
                    href:"https://www.linkedin.com/in/deepak24899/"
                  }}
                />
              </div>
              <div className="col  pb-5 ">
                <Dev
                  props={{
                    title: "Rohini",
                    title1: "Design",
                    img: "dev/Rohini R.jpg",
                    href:"https://www.linkedin.com/in/rohini-raja/"
                  }}
                />
              </div>
              
            </div>
          </div>
        </div>
        
        

        <Footer />
      </>
    );
  }
}

export default Homepage;
