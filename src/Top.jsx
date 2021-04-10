import React,{Component} from 'react';
import Counters from './counters'


class Top extends React.Component {
    state={
        counters:[
            {id:0,value:0},{id:1,value:1},{id:2,value:2}
        ]
    };

    render(){
        console.log('Top Redered');
        return(
            <div>
            <h1 align="center">{this.state.counters.length}</h1>
            <Counters counters ={this.state.counters} handle={this.handle} ondel = {this.ondel}/>
            </div>
        )
    }

    handle= cid =>{
        console.log('click pressed');
        // for(var i=0;i<this.state.counters.length;i++){
        //     if(this.state.counters[i].id == cid)
        //         this.state.counters[i].value +=1; 
        
        // }
        this.state.counters.map(x=>{
            if(x.id==cid){
                x.value+=(x.id+1);
            }
        });
        this.setState({counters:this.state.counters});
    }

    ondel= cid =>{
        console.log('delete clicked',this.ondel,'Teja');
        const counters = this.state.counters.filter(x=>x.id!==cid.props.id);
        this.setState({counters});
    }
}

export default Top;