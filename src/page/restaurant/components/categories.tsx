import { useState } from "react";
import { dataC } from "../../Categories";
import { useThemeStore } from "../../../stores/themeStore";

function ListCategories() {
      const colorTheme = useThemeStore((state) => state.themeColor);
  
  const [selectedCategory, setselectedCategory] = useState(1);
    return ( 
        <>
  <div className="w-full h-18  overflow-x-auto flex items-center ">
    <div className="flex ">
      {dataC.map((item,index)=>(
        <div 
        style={{
        backgroundColor: selectedCategory == index ? colorTheme : `${colorTheme}1A`,
        color: selectedCategory == index ? "": colorTheme
        }}
        className="btn-category-selected">{item.nombre.toLocaleUpperCase()}</div>
      ))}
      

    </div>
  </div>
</>)
      ;
}

export default ListCategories;

