import React,{Component} from 'react';
import './counter.css'


class Counter extends Component {
    render(){
        console.log('counter Rendered ',this.props.id);
        return (
            <React.Fragment>
                <span className="badge badge-primary p-2 m-5">{this.props.value}</span>
                <button className="btn btn-secondary btn-sm" onClick={()=>this.props.handle(this.props.id)}>increment</button>
                <button className="teja m10 p5" onClick={() => this.props.ondelete(this)}>delete</button>
            </React.Fragment>
        );
    }
}

export default Counter;