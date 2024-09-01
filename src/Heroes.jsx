import React from "react";

function Heroes ({ name, gender, image, onClick}) {
return (
<li onClick= {onClick}>
    <img src={image} alt={name} />
    {name} - {gender}
    </li>
);

}
export default Heroes;