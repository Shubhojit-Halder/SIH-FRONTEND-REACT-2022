import React, { useState } from "react";
import { PiWrapper } from "../../styles/PiWrappper.styled";
import { Workplace,Education, PlacesLived,Contacts, Basics } from "../../Datas/PersonalInfo";
import WorkInfoItem from "./WorkInfoItem";
import EducationInfoItem from "./EducationInfoItem";
import PlacesInfoItem from "./PlacesInfoItem";
import ContactInfoItem from "./ContactInfoItem";
import BasicInfoItem from "./BasicInfoItem";
const AddedItem = (props) => {
  return (
    <PiWrapper>
      {props.index == 0 ? (
        <div className="addedPI">
          {Workplace.map((value) => {
            return (
              <>
                <WorkInfoItem icon={value.icon} place={value.place} position={value.position}/>
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      {props.index == 1 ? (
        <div className="addedPI">
          {Education.map((value) => {
            return (
              <>
                <EducationInfoItem icon={value.icon} ins={value.Institution} course={value.course}/>
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      {props.index == 2 ? (
        <div className="addedPI">
          {PlacesLived.map((value) => {
            return (
              <>
                <PlacesInfoItem icon={value.icon} place={value.place}/>
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      {props.index == 3 ? (
        <div className="addedPI">
          {Contacts.map((value) => {
            return (
              <>
                < ContactInfoItem icon={value.icon} data={value.Data} typeof={value.type}/>
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      {props.index == 4 ? (
        <div className="addedPI">
          {Basics.map((value) => {
            return (
              <>
                <BasicInfoItem icon={value.icon} data={value.Data} typeof={value.type}/>
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </PiWrapper>
  );
};

export default AddedItem;
