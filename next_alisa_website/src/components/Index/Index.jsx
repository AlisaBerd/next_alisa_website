import React, {useEffect} from "react";
import './Index.module.css';
import Official from "./official/Official";
import Meeting from "./meeting/Meeting.jsx";
import Doing from "./doing/Doing.jsx";
import Project from "./Projects/Project"
import Benefits from "./Benefits/Benefits";
import Technologies from "./Technologies/Technologies";
import Oppinion_index from "./Oppinion_index/Oppinion_index";
import HeaderIndex from "../header/HeaderIndex";
import {Contact_finish} from "../Contact/Contact_finish";
import {useDispatch, useSelector} from "react-redux";
import {addAlert} from "../../store/alertsReducer";


let v_header_index = <HeaderIndex/>

const Index = (props) => {
  //var messages_array = ["1", "2"]

  const messages_array = useSelector(state => state.alerts.alerts_array)

  return (
    <div className="Index">
      {messages_array.map(one_element => <Contact_finish type="success" id={one_element.id} key={one_element.id}>Привет </Contact_finish>)}
      <Official/>
      <Meeting/>
      <Doing />
      <Project />
      <Benefits />
      <Technologies />
      <Oppinion_index />
    </div>
  );
}

export default Index;
