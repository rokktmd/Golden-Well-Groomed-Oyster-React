import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Contact4 from '../components/contact4'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Golden Well Groomed Oyster</title>
        <meta property="og:title" content="Golden Well Groomed Oyster" />
      </Helmet>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text10">Get in touch</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text11">Learn more</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text12">
              Your one-stop solution for software development, IT services,
              broadcast graphics, and broadcast equipment integration services.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text13">KTMD</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxzb2Z0d2FyZSUyMGRlfGVufDB8fHx8MTc1NjkyMjM2NHww&amp;ixlib=rb-4.1.0&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxpdCUyMHJvb20lMjBjYWJsZXN8ZW58MHx8fHwxNzU2OTIyNDcyfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1618397806877-f0187730803f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGZvdG9ncmFwaGVyfGVufDB8fHx8MTc1NjkyMjM5N3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNsb3VkJTIwc2VydmljZXN8ZW58MHx8fHwxNzU2OTIyNDkzfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text14">Software Development</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text15">IT Services</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text16">Broadcast Equipment Integration</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1613031729579-ace1feefda4c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxicm9hZGNhc3QlMjBpdHxlbnwwfHx8fDE3NTY5MjIzMTN8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text17">
              Customized software solutions tailored to your needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text18">IT Services</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text19">
              Broadcast Equipment Integration Services
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text20">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text21">
              Contact us today to discuss how our services can help you achieve
              your goals.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text22">Ready to elevate your business?</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text23">Software Development</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text24">IT Services</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text25">Broadcast Graphics</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1573742287010-81e9aeab57e2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxicm9hZGNhc3QlMjBzb2Z0d2FyZXxlbnwwfHx8fDE3NTY5MjE3MDJ8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text26">
              Custom software development tailored to meet your specific
              business needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text27">
              Comprehensive IT services including network setup, maintenance,
              and cybersecurity.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text28">
              High-quality broadcast graphics design for a professional and
              engaging visual experience.
            </span>
          </Fragment>
        }
      ></Features25>
      <Contact4
        email1={
          <Fragment>
            <span className="home-text29">info@ktmd.si</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text30">Get in touch with us today!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text31">Contact us</span>
          </Fragment>
        }
      ></Contact4>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text32">Software Development</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text33">IT Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text34">Broadcast Graphics</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text35">Broadcast Equipment Integration</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text36">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text37">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text38">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text39">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
