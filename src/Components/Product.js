import React from "react";

import picture1 from '../images/s1.png'
import picture2 from '../images/s2.png'

import ProductBox from "./ProductBox";

function Feature() {
    return (
        <div id='product'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sapiente.</p>
            <div className="a-container">
                <ProductBox image={picture1} title="Luger Burger"/>
                <ProductBox image={picture2} title="Luger Burger "/>
                <ProductBox image={picture1} title="Luger Burger"/>

            </div>

        </div>
    )

}

export default Feature