import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-line"></div>
      <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
      <p className="footer-type">
        CHEMICALS & PROCESS POWER
        <span className="span-color">|</span> WATER & WASTE
        <span className="span-color">|</span>
        WATER OILS & GAS PHARMA
        <span className="span-color">|</span>
        SUGARS & DISTILLERIES
        <span className="span-color">|</span>
        PAPER & PULP
        <span className="span-color">|</span>
        MARINE & DEFENCE
        <span className="span-color">|</span>
        METAL & MINING
        <span className="span-color">|</span>
        FOOD & BEVERAGE
        <span className="span-color">|</span>
        PETROCHEMICAL & REFINERIES
        <span className="span-color">|</span>
        SOLAR BUILDING HVAC FIRE FIGHTING
        <span className="span-color">|</span>
        AGRICULTURE & RESIDENTIAL
      </p>
      <div className="footer-social">
        <a href="#">
          <i class="icon fa fa-phone" aria-hidden="true"></i>
          Toll free <b>1800 200 1234</b>
        </a>
        <a href="#">
          <i class="icon fa-brands fa-facebook-f"></i>
          Facebook
        </a>
        <a href="#">
          <i class="icon fa-solid fa-globe"></i>
          www.crigroups.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
