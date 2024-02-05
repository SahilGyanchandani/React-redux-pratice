import React from "react";

export default function Fruit(props) {
    return (
        <div>
            <li>
                {props.emoji}  {props.name}  ${props.price} <b>{props.soldout ? "soldout" : ""}</b>


                {/* {props.price > 20 ? <li>{props.emoji}  {props.name}  ${props.price}</li> : ""} */}
            </li>
        </div>


    );
}