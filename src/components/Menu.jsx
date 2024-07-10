import React, { useEffect, useState } from "react"
import { MenuData } from "../../data"
import "../styles/App.css"
import Select from "./Select"

const Menu = () => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        console.log("handleCategorySelect", selectedCategory);
    }

    const newData = MenuData.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));


    useEffect(() => {
    },[])
    return (
        <div className="menu-container">
            <h2>Our Menu</h2>
            <Select onCategorySelect={handleCategorySelect}/>
        <div className="menus">
            { selectedCategory.length > 0 ? newData.map((menu) => (
                <div key={menu.id} className="menu">
                    <img src={menu.img} alt={menu.title}/>
                    <div className="article">
                        <div className="head">
                           <h5>{menu.title}</h5>
                           <p>$ {menu.price}</p>
                        </div>
                        <div>
                            {menu.desc}
                        </div>
                    </div>
                </div>
            )) : (
                MenuData.map((menu) => (
                <div key={menu.id} className="menu">
                    <img src={menu.img} alt={menu.title}/>
                    <div className="article">
                        <div className="head">
                           <h5>{menu.title}</h5>
                           <p>$ {menu.price}</p>
                        </div>
                        <div>
                            {menu.desc}
                        </div>
                    </div>
                </div>
            ))
            )}
        </div>
    </div>
    )
}

export default Menu