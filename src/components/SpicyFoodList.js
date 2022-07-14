import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [select, setSelect] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods(
      [...foods, newFood]
    )
  }
  
  const handleClick = (id) => {
    // const filtered = foods.filter( food => food.id !== id);
    const updated = foods.map(food => {
      if(food.id === id){
        return {
          ...food,
          heatLevel:food.heatLevel += 1
        }
      }
      else{
        return food
      }
      
    })
    setFoods(updated)
  }

  const filteredFood =
    foods.filter(food => {
      if(select === "All"){
        return true;
      }
      else{
        return food.cuisine === select;
      }
    })
  

  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={()=>handleClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));
  const foodList = filteredFood.map((food) => (
    <li key={food.id} onClick={()=>handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));



  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={(event)=> setSelect(event.target.value)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
</select>
    </div>
  );
}

export default SpicyFoodList;
