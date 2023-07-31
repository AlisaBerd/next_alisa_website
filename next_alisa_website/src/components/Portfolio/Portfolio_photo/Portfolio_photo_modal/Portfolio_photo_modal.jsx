import React from "react";
import portfolio_photo_modal from './Portfolio_photo_modal.module.css'
import {useDispatch, useSelector} from "react-redux";

const Portfolio_photo_modal = ({active, setActive}) => {

  const img = useSelector(state => state.img.img)

  return(
    <div className={active ? portfolio_photo_modal.portfolio_photo_modal_active : portfolio_photo_modal.portfolio_photo_modal} onClick={() => setActive(false)}>
      <div className={portfolio_photo_modal.portfolio_photo_modal_content} onClick={e => e.stopPropagation()}>
        <img src={img}/>
      </div>
    </div>
  )
}

export default Portfolio_photo_modal
