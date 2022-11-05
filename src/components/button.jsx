import React from "react";
import "./button.css";
const Button =  (props) => {
  const text = props.text;
  const style = "btn " + props.styles;
  const icons = props.icons;
  console.log(style)
    return ( 
      <div >
        <a className={style} >{icons} {text}</a>
      </div>

     );
}
Button.defaultProps = {
  text: "Button",
}

export default Button;