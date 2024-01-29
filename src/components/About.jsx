import User from "./User";
import Userbyclass from "./Userbyclass";
import {Component} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

class About extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            userinfo : {
              name: "unknown",
              location: "unknown",
              avatar_url: "unknown",
          
            }
        }
        // console.log("Parent Constructor");
    };

   async componentDidMount(){
        // console.log(" Parent componentDidMount");
     
       


    }

 render(){

    // console.log("Parent render");

    return(
        <div>
            <div className="aboutheading">
            <h1>ABOUT</h1>
            <h2>This is our about page</h2>  
            </div>


        {/* functional component */}
        {/* <User name={"Tushar kumar(function)"}/> */}

         {/* class based component */}
        <Userbyclass/>
        
        </div>
    );
 }

}





export default About;