import './App.css';
import Header from './Components/header/header'
import CardHolder from './Components/card-holder/cardholder'
import Footer from './Components/footer/footer'
import Meals from './meals.json'
import {useState} from 'react'
import Recepie from './Components/RecepiePage/recepie'



function App() {

  const obj = Meals

  const [type_category, settype_category] = useState("all")

  const type_breakfast = ()=>{

    settype_category("breakfast")

  }
  const type_lunch = ()=>{

    settype_category("Lunch")

  }
  const type_dinner = ()=>{

    settype_category("Dinner")

  }
  const type_all = ()=>{

    settype_category("all")

  }

  const [dish, setDish] = useState("")

  function set(dish_name ){
    
    setDish(dish_name)
    console.log(dish)
  }

  return (
    <>
      <Header type_breakfast = {()=>type_breakfast} type_lunch={()=>type_lunch} type_dinner={()=>type_dinner} type_all={()=>type_all}/>
      <Recepie dish={dish}/>
      <CardHolder dish={obj} type={type_category} set={set}/>
      <br></br>
      <br></br>
      <br></br>
      
      <Footer />
    </>
  );
}

export default App;
