import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid, v4 } from "uuid";

function ShoppingList({ items, setItems }) {
//  console.log(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
 
  // const [filterData, setFilterData] = useState([])

    

  function handleCategoryChange(e) {
   setSearch(e.target.value)
  }
  
   const filterData = items.filter((data)=>data.name.toLowerCase().includes(search.toLowerCase()))
   console.log(filterData)

   function handleInputData(item){
      const copy = [...items, item]
      setItems(copy)
   }

  const itemsToDisplay = filterData.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList" search = {selectedCategory}>
      <ItemForm onItemFormSubmit = {handleInputData} />
      <Filter onSearchChange={handleCategoryChange} search = {search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
