import { useState } from 'react';
import {Container} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Title';
import Category from './components/category';
import ItemList from './components/ItemList';
import { items } from './data';
function App() {
  const[itemsData,setItemsData]=useState(items)
  const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]
  const filterByCategory = (cat) =>{
    if (cat === "الكل") {
      setItemsData(items)
    } else {
      const newArr = items.filter((item)=> item.category === cat)
      setItemsData(newArr)
    }
  }
  const filterbySearch = (word) => {
    if (word !=='') {
      const newAr = items.filter((item) => item.title === word)
      setItemsData(newAr)
    }
  }
  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header/>
        <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
        <ItemList itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
