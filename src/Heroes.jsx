import React from "react";

function Heroes ({ name, gender, image}) {
return (
<li>
    <img src={image} alt={name} width="50"/>
    {name} - {gender}
    </li>
)

}
export default Heroes;