import React , {Component} from "react";

// functional Components
function FnComponents(props){
    return(
        <div>
            <h1>functional components</h1>
            <h2>{props.name}</h2>
        </div>
    );
}

//class components
class ClassComponents extends Component{
    render() {
        return(
            <div>
                <h1>class components</h1>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}


export default function Components(){
    return(
        <div>
            <h1>function components</h1>
            <FnComponents name = 'swarup'/>
            <ClassComponents name = 'harshal'/>
        </div>
    );
}