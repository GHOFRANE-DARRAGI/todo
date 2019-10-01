import React, {Component} from "react"
import {connect} from "react-redux"
import {deleteTask,completeTask,editTask} from "../action/actions"


class TodoItems extends Component{
    constructor(props){
        super(props)
        this.state={
            edit:""
        }
    }
    handleEdit=e=>{
        this.setState({
            edit:e.target.value
        })
    }




    render() {
return(
    <div>
        {this.props.items.map(el=> 
            <div key={el.key}>
                <h3 className={el.complete?"completed":""}>{el.edit ? <input type="text" value={this.state.edit} onChange={this.handleEdit}/> : el.title}></h3>
                <button onClick={() => {this.props.deleteTask(el.key)}}> DELETE</button>
               <button onClick={() => {this.props.completeTask(el.key)}}> COMPLETE</button>
               <button onClick={() => {this.setState({edit:el.title}); this.props.editTask({id:el.key,newtitle:this.state.edit})}}> EDIT</button>
             

            </div>)}
    </div>
)



}}


const mapStateToProps =(state)=>{
    return { items: state}
}


const mapDispatchToProps =(dispatch)=>{
    return {
        deleteTask :(payload) =>dispatch(deleteTask(payload)),
        completeTask :(payload) =>dispatch(completeTask(payload)),
         editTask :(payload) =>dispatch(editTask(payload))
        
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(TodoItems)