import React from "react";
import styled from "styled-components";
import logo from "../static/MSIT.png";
const FooterclgComp = () => {
  const FCCwrapper = styled.div`
    .clgLogoFCC {
      width: 100px;
      padding: 10px;
    }
    .mainFCC{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px 10px;
    }
    .clgDetailFCC{
        text-align: center;
    }
    .clgDetailFCC span{
        font-size:.8rem;
        color:#565656;
    }
    @media (max-width:600px) {
        .clgLogoFCC {
      width: 80px;
      padding: 10px;
    }
    .mainFCC{
        display: none;
    }

    }
  `;
  return (
    <FCCwrapper>
      <div className="mainFCC">
        <img src={logo} alt="Collge Logo" className="clgLogoFCC" />
        <div className="clgDetailFCC">
            <h5>MEGHNAD SAHA INSTITUTE OF TECHNOLOGY</h5>
            <span>Behind Urbana Complex Near,Ruby General Hospital, Nazirabad Rd, Uchhepota, Kolkata - 700150, West Bengal</span>
        </div>
      </div>
    </FCCwrapper>
  );
};

export default FooterclgComp;
