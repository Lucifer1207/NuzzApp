import React,{ Component }  from 'react'
import Navbar from './Component/Navbar';
import Nuzz from './Component/Nuzz';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

export default class App extends Component {
 
  handleClick=()=>{
    if(this.state.mode==="dark"){
        document.body.style.backgroundColor="black"
       this.setState({mode:"light"});
    }
    else{
        document.body.style.backgroundColor="grey"
      this.setState({mode:"dark"});
    }
}
constructor(){
  super();
    this.state={
        mode:"light"
    }
}
  render() {
    
    return (
      <div>
        <Navbar title="Taza Khabhar" handle={this.handleClick}/>
        <BrowserRouter>
       <Routes>
       <Route path="/" element={<Nuzz category="general"/>}></Route>
       <Route path="/sports" element={<Nuzz category="sports"/>}></Route>
       <Route path="/science" element={<Nuzz category="science"/>}></Route>
       <Route path="/Health" element={<Nuzz category="Health"/>}></Route>
       <Route path="/Entertainment" element={<Nuzz category="Entertainment"/>}></Route>
      
       </Routes>
       </BrowserRouter>
      </div>
    )
  }
}