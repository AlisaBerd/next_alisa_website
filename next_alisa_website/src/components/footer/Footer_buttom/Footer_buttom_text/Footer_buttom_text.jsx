import React from 'react';
import button from'./Footer_buttom_text.module.css';

const Footer_button_text = (props) => {
  return (
      <p className={button.paragraf}> Алиса Бердышева &copy; {new Date().getFullYear()}Все права защищены.Вся информация, размещенная на сайте, является интеллектуальной собственностью.
        Любое копирование и использование информации без письменного разрешения запрещено.</p>
  )
}

export default Footer_button_text
