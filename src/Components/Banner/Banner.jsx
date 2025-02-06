import './Banner.css'
import bannerImg from '../../assets/images/cutout_mira-daily_sage-green_front 1.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";


const Banner = () => {

  return (
    <>
    <div className="alamin-banner ">
      <div className="container">
        <div className="banner-row">
          <div className="banner-img">
            <img src={bannerImg} alt="banner-img" />
          </div>
          <div className="banner-text">
            <h2>
            Hubble
            </h2>
            <h1>Bike</h1>
            <p>Hire a bike to any destination and share with friends,
            Please use the app to order a bike from any where in Brimingham...</p>
            <div className="button">
              <button>Hire a Bike</button>
            </div>
          </div>
        </div>
        <div className="banner-footer-row">
          <div className="banner-footer-col">
            <div className="box">
                <div className="single-box">
                  <h1>750 W</h1>
                  <p>Motor</p>
                </div>
                <div className="single-box">
                  <h1>3 Hours</h1>
                  <p>Charging Time</p>
                </div>
                <div className="single-box">
                  <h1>25mph</h1>
                  <p>Per Hour</p>
                </div>
                <div className="single-box">
                  <h1>48V</h1>
                  <p>Battery</p>
                </div>
            </div>
          </div>
          <div className="footer-col-2">
            <div className="icons">
              <div className="single-icon">
                <RiFacebookBoxLine/>
              </div>
              <div className="single-icon">
                <FaInstagram/>
              </div>
              <div className="single-icon">
                <FaLinkedin/>
              </div>
              <div className="single-icon">
                <FaXTwitter/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner