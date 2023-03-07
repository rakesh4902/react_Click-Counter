// Write your code here
import {Component} from "react"
import {Login} from "./Login"
import {Logout} from "./Logout"

class Home extends Component{
    const state={isLogged:false}
    render(){
        const{isLogged}=this.state
        return(
            <div className="bg">
                {isLogged ? <Login />:<Logout/> }
            </div>
        )
    }
}