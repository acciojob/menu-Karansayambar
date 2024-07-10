import React, { useState } from 'react'
import { MenuData } from '../../data'
import "../styles/App.css"

const Select = ({onCategorySelect}) => {
    const uniqueCategories = Array.from(new Set(MenuData.map((item) => item.category)));

    const getCategory = (e) => {
      const selectedCategory = e.target.innerText;
      onCategorySelect(selectedCategory);
    }
  return (
   <div className='select'>
      {uniqueCategories.map((category, index) => (
        <div key={index}>
          <p className='iselect' onClick={getCategory}>{category}</p>
        </div>
      ))}
    </div>
  )
}

export default Select