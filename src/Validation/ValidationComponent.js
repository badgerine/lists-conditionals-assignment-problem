import React, {Component} from 'react';

class ValidationComponent extends Component {
    constructor(props){
        super();
    }

    render(){
        
        const outputMessage = 5 > this.props.userInputLength ? 'Text too short' : 
                            'Text long enough'; 
        const view = (
            <div>{outputMessage + ': '+  this.props.userInputLength}</div>);

        return view;
    }
}

export default ValidationComponent;