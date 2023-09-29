import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//Database
import products from "./db/data";

function App() {
const [selectedCategory,setSelectedCategory] = useState(null);

//----------------Input filter
const [query,setQuery] = useState("");
const handleInputChange = event =>{
  setQuery(event.target.value)
}

const filteredItems = products.filter(product=>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
);

//----------------Radio filter
const handleChange = event =>{
  setSelectedCategory(event.target.value)
}

//---------------- Buttons filter
const handleClick = event =>{
  setSelectedCategory(event.target.value)
}

function filteredData (products,selected,query) {
  let filteredProducts = products

  if(query){
    filteredProducts = filteredItems
  }

  if(selected){
    filteredProducts = filteredProducts.filter(
      ({category, color, company, newPrice, title}) => 
        category === selected ||
        color === selected || 
        company === selected ||
        newPrice === selected ||
        title === selected 
      );
  }

  return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice})=>(
    <card 
    key={Math.random()}
    img={img}
    title={title}
    star ={star}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice}/>

  ));
}

const result = filteredData(products,selectedCategory,query)


  return (
  <>
    <Sidebar/>
    <Navigation/>
    <Recommended/>
    <Products/>
  </>
  );
}

export default App;
