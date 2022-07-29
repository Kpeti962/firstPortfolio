import React, {useState} from 'react';
import musicPlayer from "../img/musicPlayer.png";
import shoppingList from "../img/shoppingList.png";
import pizzaComparison from "../img/pizzaComparison.png";


const MyProjects = () => {
    const [isHovering, setIsHovering] = useState(false)

const handleMouseOver = () => {
    setIsHovering(true)
}

const handleMouseOut = () => {
    setIsHovering(false)
}


    return (
<div className="myProjectsSection">
    <div className="myProjectsTitle">
        My Projects
    </div>
    <div className="myProjectsWithInfo">
        <div  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="shoppingList">
            <img src={shoppingList} alt="" />
            { isHovering && <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, est.</h4>}
        </div>
        <div className="musicPlayer">
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, architecto!
            </h4>
            <img src={musicPlayer} alt="" />
        </div>
        <div className="pizzaComparison">
            <img src={pizzaComparison} alt="" />
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, commodi!
            </h4>
        </div>
    </div>

</div>
    )
}


export default MyProjects