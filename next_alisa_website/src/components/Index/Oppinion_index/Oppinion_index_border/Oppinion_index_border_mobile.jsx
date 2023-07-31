import React from 'react'
import oppinion_index_border_mobile from './Oppinion_index_border_mobile.module.css'
import Oppinion_index_border_button from "./Oppinion_index_border_button/Oppinion_index_border_button";
import {OppinionJson} from "./OppinionJson";
import Oppinion_text from "./Oppinion_text/Oppinion_text";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from "next/image";

const Oppinion_index_border_mobile = (props) => {
  let oppinion_array = OppinionJson.map(element => <Oppinion_text text={element.text} name={element.name}/>)
  return(
    <div className={oppinion_index_border_mobile.oppinion_index_border}>

      <CarouselProvider
        naturalSlideWidth={90}
        naturalSlideHeight={25}
        totalSlides={2} >

        <div>
          <Slider className={oppinion_index_border_mobile.slider}>
            <Slide index={0}>{oppinion_array [0]}</Slide>
            <Slide index={1}>{oppinion_array [1]}</Slide>
          </Slider>
        </div>

        <div className={oppinion_index_border_mobile.buttons}>
          <ButtonBack><Image className="button_back" src={'/images/button_back.svg'} width={45} height={35} alt=""/></ButtonBack>
          <ButtonNext><Image className="button_next" src={'/images/button_next.svg'} width={45} height={35} alt=""/></ButtonNext>
        </div>
      </CarouselProvider>

      <div className={oppinion_index_border_mobile.button_oppinion}>
        <Oppinion_index_border_button />
      </div>
    </div>
  )
}

export default Oppinion_index_border_mobile
