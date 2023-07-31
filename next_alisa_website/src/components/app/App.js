import React from "react";
//import logo from '../../logo.svg';
import './App.module.css';
//import '../../styleNew.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import About_me from "../About_me/About_me";
import Index from "../Index/Index";
import Service from "../Service/Service";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import Oppinion from "../Oppinion/Oppinion";
import Contact from "../Contact/Contact";
import Political from "../Political/Political";
import Question from "../Question/Question";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import IndexMobile from "../Index/IndexMobile";
import FooterMobile from "../footer/FooterMobile";
import AboutMobile from "../About_me/AboutMobile";
import ServiceMobile from "../Service/ServiceMobile";
import OppinionMobile from "../Oppinion/OppinionMobile";
import QuestionMobile from "../Question/QuestionMobile";
import PoliticalMobile from "../Political/PoliticalMobile";
import PortfolioMobile from "../Portfolio/PortfolioMobile";
import HeaderMobile from "../header/HeaderMobile";
import ContactMobil from "../Contact/ContactMobile";
import Irenagroup from "../Index/Projects/Projects/Irenagroup";
import Struchkoff from "../Index/Projects/Projects/Struchkoff";
import Mastersofpankes from "../Index/Projects/Projects/Mastersofpankes";
import Lerastickers from "../Index/Projects/Projects/Lerastickers";
import Bootssite from "../Index/Projects/Projects/Bootssite";
import WeddingNataandVitaliy from "../Index/Projects/Projects/WeddingNataandVitaliy";
import Bootssite_mobil from "../Index/Projects/Projects/Bootssite_Mobile";
import Irenagroup_mobil from "../Index/Projects/Projects/Irenagroup_Mobil";
import Lerastickers_mobil from "../Index/Projects/Projects/Lerastickers_Mobil";
import Mastersofpankes_mobil from "../Index/Projects/Projects/Mastersofpankes_Mobil";
import Struchkoff_mobil from "../Index/Projects/Projects/Struchkoff_mobil";
import WeddingNataandVitaliy_mobil from "../Index/Projects/Projects/WeddingNataandVitaliy_mobil";
import Milk from "../Portfolio/Projects/Milk";
import Milk_mobil from "../Portfolio/Projects/Milk_mobil";
import Father from "../Portfolio/Projects/Father";
import Father_mobil from "../Portfolio/Projects/Father_mobil";
import Wine from "../Portfolio/Projects/Wine";
import Wine_mobil from "../Portfolio/Projects/Wine_mobile";
import Saint from "../Portfolio/Projects/Saint";
import Saint_mobil from "../Portfolio/Projects/Saint_mobil";
import Rosa from "../Portfolio/Projects/Rosa";
import Rosa_mobil from "../Portfolio/Projects/Rosa_mobil";
import Landing_designer from "../Landings/Landing_designer";
import Landing_designer_mobil from "../Landings/Landing_designer_mobil";
import Landing_develover from "../Landings/Landing_developer";
import Landing_developer_mobil from "../Landings/Landing_developer_mobil";
import LandingWebDeveloper from "../Landings/LandingWebDeveloper/LandingWebDeveloper";
import LandingWebDesigner from "../Landings/LandingWebDesigner/LandingWebDesigner";
import LandingWebDesigner_mobile from "../Landings/LandingWebDesigner/LandingWebDesigner_mobile";
import LandingWebDeveloper_mobile from "../Landings/LandingWebDeveloper/LandingWebDeveloper_mobil";
import LandingSale from "../Landings/LandingSale/LandingSale";
import LandingSale_mobile from "../Landings/LandingSale/LandingSale_mobile";


const App = (props) => {
  let v_index = <Index />
  if (isMobile){
    v_index = <IndexMobile/>
  }
  let v_footer = <Footer />
  if (isMobile){
    v_footer = <FooterMobile />
  }

  let v_header = <Header/>
  if (isMobile){
    v_header = <HeaderMobile/>
  }


  let v_about = <About_me/>
  if (isMobile){
    v_about = <AboutMobile/>
  }

  let v_service = <Service/>
  if (isMobile){
    v_service = <ServiceMobile/>
  }

  let v_portfolio = <Portfolio/>
  if (isMobile){
    v_portfolio = <PortfolioMobile/>
  }

  let v_contact = <Contact/>
  if (isMobile){
    v_contact = <ContactMobil/>
  }

  let v_oppinion = <Oppinion/>
  if (isMobile){
    v_oppinion = <OppinionMobile/>
  }

  let v_question = <Question/>
  if (isMobile){
    v_question = <QuestionMobile/>
  }

  let v_political = <Political/>
  if (isMobile){
    v_political = <PoliticalMobile/>
  }

  let v_project = <Irenagroup/>
  if(isMobile){
    v_project = <Irenagroup_mobil/>
  }

  let v_struchkoff = <Struchkoff/>
  if (isMobile){
    v_struchkoff = <Struchkoff_mobil/>
  }

  let v_mastersofpankes = <Mastersofpankes/>
  if (isMobile){
    v_mastersofpankes = <Mastersofpankes_mobil/>
  }

  let v_WeddingNataandVitaliy = <WeddingNataandVitaliy/>
  if (isMobile){
    v_WeddingNataandVitaliy = <WeddingNataandVitaliy_mobil/>
  }

  let v_bootssite = <Bootssite/>
  if (isMobile){
    v_bootssite = <Bootssite_mobil/>
  }

  let v_lerastickers = <Lerastickers/>
  if (isMobile){
    v_lerastickers = <Lerastickers_mobil/>
  }

  let v_milk = <Milk/>
  if (isMobile){
    v_milk = <Milk_mobil/>
  }

  let v_father = <Father/>
  if (isMobile){
    v_father = <Father_mobil/>
  }

  let v_wine = <Wine/>
  if (isMobile){
    v_wine = <Wine_mobil/>
  }

  let v_saint = <Saint/>
  if (isMobile){
    v_saint = <Saint_mobil/>
  }

  let v_rosa = <Rosa/>
  if (isMobile){
    v_rosa = <Rosa_mobil/>
  }

  let v_design = <LandingWebDesigner/>
  if (isMobile){
    v_design = <LandingWebDesigner_mobile/>
  }

  let v_dev = <LandingWebDeveloper/>
  if (isMobile){
    v_dev = <LandingWebDeveloper_mobile/>
  }

  let v_sale = <LandingSale/>
  if (isMobile){
    v_sale = <LandingSale_mobile/>
  }

  return (
    <BrowserRouter>
        <div className='app-wrapper'>
          {v_header}
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/' element={v_index}/>
              <Route path='/about_me' element={v_about}/>
              <Route path='/service' element={v_service} />
              <Route path='/portfolio' element={v_portfolio} />
              <Route path='/oppinion' element={v_oppinion} />
              <Route path='/contact' element={v_contact}  />
              <Route path='/political' element={v_political} />
              <Route path='/question' element={v_question} />
              <Route path='/irenagroup' element={v_project } />
              <Route path='/struchkoff' element={v_struchkoff } />
              <Route path='/mastersofpankes' element={v_mastersofpankes } />
              <Route path='/wedding' element={v_WeddingNataandVitaliy } />
              <Route path='/boots' element={v_bootssite } />
              <Route path='/Lera_stickers' element={v_lerastickers } />
              <Route path='/festivalofmilk' element={v_milk}/>
              <Route path='/father' element={v_father}/>
              <Route path='/wine' element={v_wine}/>
              <Route path='/SaintPeteburg' element={v_saint}/>
              <Route path='/rosa' element={v_rosa}/>
              <Route path='/designer' element={v_design}/>
              <Route path='/developer' element={v_dev}/>
              <Route path='/sale' element={v_sale}/>
            </Routes>
          </div>
          {v_footer}
        </div>
      </BrowserRouter>
    );
};

export default App

//    "react-router-app": "^0.1.6",
