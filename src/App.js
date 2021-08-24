import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 let parson ={
    name:'mahfujor rahman',
    job:"singer"
}

let parson2={
  name:"eva rahman",
  job:"kokil khonti"
}
let style={
  color:"orange"
}
let product=[
  {name:"photoshop",price:"$199.99"},
  {name:"primer pro",price:"$449.99"},
  {name:"primear element",price:"$499.99"},
  {name:"pdf reader",price:"$6.99"}
]
let names=['anuar','janoar','kaolow']

  return (
    <div className="App">
      <header className="App-header">
        <h1>wallcome to our website</h1>
         <p> hello {10+15}</p>
         <p> hello {parson.name+" "+parson.job}</p>
         <Counter></Counter>
         <Users></Users>
         
         {
           product.map(data => <Card product={data}></Card>)
         }

         <h2 style={style}>singer: {parson2.name+" "+parson2.job}</h2>
        <Parsons name={names[0]} nayeka="xxx"></Parsons>
        <Parsons name="ton halan" nayeka="xxx"></Parsons>
        <Parsons name="tony yoank" nayeka="xxx"></Parsons>
        <ul>
          {
            we.map(data=><li>{data}</li>)
          }
          </ul>
      </header>
    </div>
  );
}
let we =['asib','abid','atik','rasel','khako','antor'];



function Card(props){
  const styleDev={
    border:"5px solid green",
    margin:"10px",
    borderRadius:"10px"
    }
    let {name,price} =props.product;
    return (
      <div style={styleDev}>
        <h2>{name}</h2>
        <br />
        <h4>{price}</h4>
        <button>Bey now</button>
      </div>
    )
}


function Parsons(props){
  const styleDev={
    border:"5px solid gray",
    margin:"10px",
    borderRadius:"10px"
    }
  return (
    <div style={styleDev}>
 <h1>nayok: {props.name} </h1>
 <h2>nayeka: {props.nayeka}</h2>
    </div>
  )
}

function Counter(){
  const [count,setCount]=useState(0);
return (
  <div>
    <h2>count:-{count}</h2>
    <button onClick={() => setCount(count-1)}>decriese</button>
    <button onClick={() => setCount(count+1)}>Increase</button>
  </div>
)
}

function Users(){
  const [users, setUsers]=useState([])
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h2>Dynamick users; {users.length}</h2>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


export default App;
