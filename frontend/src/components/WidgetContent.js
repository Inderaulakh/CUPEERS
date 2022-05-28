import React from "react";
import "./css/WidgetContent.css";
import twitter from "./twitter.png"
import insta from "./insta.jpg"
import linkdin from "./linkdin.png"

function WidgetContent() {
  return (
    <div className=" widget__contents">
       <p><a href="https://uims.cuchd.in/uims/" target="_blank"  style={{textDecoration:"none"}}>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>CUIMS</h5>
          <p>The best website for the Chandigarh University in which you get your academic news and upcoming event news </p>
        </div>
      </div>
      </a></p>
      
      <p>
        <a href="https://twitter.com/Chandigarh_uni?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" style={{textDecoration:"none"}}>
      <div className="widget__content">
        <img
          src={twitter}          alt=""
        />
        <div className="widget__contentTitle">
          <h5>CU TWITTER</h5>
          <p>Chandigarh university twitter handle which has 10k+ followers and always posts news about upcoming events</p>
        </div>
      </div>
      </a>
      </p>

      <p>
        <a href="https://www.instagram.com/chandigarhuniversity/?hl=en" target="_blank" style={{textDecoration:"none"}}>
      <div className="widget__content">
        <img
          src={insta}          alt=""
        />
        <div className="widget__contentTitle">
          <h5>CU INSTAGRAM</h5>
          <p>Chandigarh university instagram handle which has 97k+ followers and always posts news about upcoming events  </p>
        </div>
      </div>
      </a>
      </p>

      <p>
        <a href="https://www.linkedin.com/school/chandigarh-university/?originalSubdomain=in" target="_blank" style={{textDecoration:"none"}}>
      <div className="widget__content">
        <img
          src={linkdin}          alt=""
        />
        <div className="widget__contentTitle">
          <h5>CU LINKDIN</h5>
          <p>Chandigarh university Linkdin always post about the events and the company that comes in CU for placements</p>
        </div>
      </div>
      </a>
      </p>


    </div>
  );
}

export default WidgetContent;
