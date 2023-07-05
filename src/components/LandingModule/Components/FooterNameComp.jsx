import React from "react";
import FTNCwrapper from "../styles/Footernamecomp.styled";
import { TeamMembers, Mentors } from "../static/Member";
const FooterNameComp = () => {
 
  return (
    <FTNCwrapper>
      <div className="mainFTNC">
        <div className="membersFTNC">
          <div className="totalFTNC">
            <h4>Team Members</h4>
          </div>
          {TeamMembers.map((value) => {
            return (
              <>
                <div className="totalFTNC">
                  <img src={value.image} alt="" className="imgFTNP" />
                  <span>{value.name}</span>
                </div>
              </>
            );
          })}
        </div>
        <div className="mentorsFTNC">
          <div className="totalFTNC">
            <h4>Mentors</h4>
          </div>
          {Mentors.map((value) => {
            return (
              <>
                <div className="totalFTNC">
                  <img src={value.image} alt="" className="imgFTNP" />
                  <span>{value.name}</span>
                </div>
              </>
            );
          })}
          <div className="contactsFCC">
            <h4>Contact Us</h4>
            <p>Phone: {`9903247560`}</p>
            <p>Email: {`admin@outlook.com`}</p>
          </div>
        </div>
      </div>
    </FTNCwrapper>
  );
};

export default FooterNameComp;
