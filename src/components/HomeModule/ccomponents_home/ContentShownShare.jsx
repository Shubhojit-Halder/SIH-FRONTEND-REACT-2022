import React from "react";
import styled from "styled-components";
import Dp from "../home/static/Dp.jpg";
const ContentShownShare = () => {
  const Wrapper = styled.section`
    .wholeBoxCSS {
      border: 1px solid grey;
      display: flex;
      width: 100%;
      align-items: center;
      margin: 2px;
    }
    .pswriteCSS {
      padding: 3px 4px;
      font-weight: 600;
    }
    .nameCSS{
      padding: 3px 4px;
    }
    .imgCSS{
        padding: 4px;
    }
  `;
  return (
    <Wrapper>
      <div className="wholeBoxCSS">
        <img src={Dp} alt="" width="40px" height="40px" className="imgCSS"/>
        <div>
          <p className="pswriteCSS">
            {`Share` + ` ` + `Subhradeep Pal's Post`}
          </p>
          <p className="nameCSS">{`Subhradeep Pal`}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContentShownShare;
