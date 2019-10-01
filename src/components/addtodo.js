import React, { Component } from 'react'
import {connect} from "react-redux"
import {addTask} from "../action/actions"

class addtodo extends Component {
state={
    input:""
}

handleChangeInput =(event)=>{
    this.setState({
        input:event.target.value
    })
}

handleClickBtn=(e)=>{
    e.preventDefault();
    this.props.addTask({title:this.state.input,complete:false,edit:false,
    key:Math.random()})
    this.setState({
        input:""
    })
    
}


    render() {
        return (
            <div>
                <p> TO DO LIST</p>
                <input value={this.state.input} onChange={this.handleChangeInput} type="text"/>
              
                <button onClick={e =>this.handleClickBtn(e)}> ADD </button>
            </div>
        )
    }
}



 const mapDispatchToProps =(dispatch)=>{
     return {
        addTask:(payload) =>dispatch(addTask(payload))

     }
 }
export default connect(null,mapDispatchToProps) (addtodo)