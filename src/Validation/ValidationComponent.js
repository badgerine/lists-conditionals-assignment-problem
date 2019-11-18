import React, {Component} from 'react';

class ValidationComponent extends Component {
    constructor(props){
        super();
    }

    render(){
        
        const outputMessage = 5 > this.props.userInput.toString().length ? 'Text too short' : 
                            'Text long enough'; 
        const view = (
            <div>{outputMessage + ': '+  this.props.userInput.length}</div>);

        return view;
    }
}

export default ValidationComponent;