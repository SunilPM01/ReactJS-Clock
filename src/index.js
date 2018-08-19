import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



class TicTock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()};
        console.log(this.state);
    }
    
    componentDidMount(){
        this.ClockId = setInterval(
            ()=>this.tic(),1000
        );
    }
    
    componentUnmount(){
        clearInterval(this.ClockId);
    }
    
    tic(){
        this.setState({
            date:new Date()
        });
    }
    
    render(){
        return(
            <h1 style={{fontSize:120}}>{this.state.date.toLocaleTimeString()}</h1>
        );
    }
}

ReactDOM.render(
    <TicTock/>,
    document.getElementById('root1')
);
