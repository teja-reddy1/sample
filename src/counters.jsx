import React,{Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        console.log('Counters Rendered');
        return(
                <React.Fragment>
                { this.props.counters.map(x => (<div><Counter key={x.id} value = {x.value} handle ={this.props.handle} 
                ondelete={this.props.ondel}  id={x.id} /></div>) ) }
                </React.Fragment>
        )
    }
}

export default Counters;