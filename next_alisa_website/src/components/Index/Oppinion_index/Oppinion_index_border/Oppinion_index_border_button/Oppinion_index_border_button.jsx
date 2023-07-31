import React from 'react'
import oppinion_index_border_button from './Oppinion_index_border_button.module.css'
import Link from "next/link";

const Oppinion_index_border_button = (props) => {
  return(
    <div className={oppinion_index_border_button.oppinion_index_border_button}>
      <button className={oppinion_index_border_button.button}>
        <Link href="/oppinion">Больше отзывов</Link>
      </button>
    </div>
  )
}

export default Oppinion_index_border_button
