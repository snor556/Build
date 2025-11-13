// import React,{Component} from 'react'

// class CarComponents extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name : 'mustang',
//             year : 1988,
//             color : 'red'
//         };

//     }
//     changeColor = ()=>{
//         this.setState({color : 'blue'});
       
//     }
//     render(){
//         return(
//             <div>
//                 <ul>
//                     <li>Brand:{this.state.name}</li>
//                     <li>Year:{this.state.year}</li>
//                     <li>color:{this.state.color}</li>
//                 </ul>
//                 <button onClick={this.changeColor}>Change Color</button>
//             </div>
//         )
//     }
// }

// export default function Cars(){
//     return(
//         <div>
//             <h1>Car details</h1>
//             <CarComponents/>
//         </div>
//     );
// }

import React,{Component} from "react";
class Cars extends Component{
    constructor(props){
        super(props);
        this.state = {
            color : 'green'
        }


    };
    changeColor = () =>{
        this.setState({color : 'blue'});
    }
   render(){
    return(
        <div>
            <ul>
                <li> color : {this.state.color}</li>
            </ul>
            <button onClick={this.changeColor}>click me</button>
        </div>
    );
   }
}
export default function CarComponent
(){
    return(
        <div>
            <Cars/>
        </div>
    );
}