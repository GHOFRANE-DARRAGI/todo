import {ADD_TASK , DELETE_TASK,COMPLETE_TASK,EDIT_TASK} from "../action/actionsTypes"

const initialState=[]

const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TASK:
            return state.concat(action.payload)

        case DELETE_TASK:
            return state.filter(el =>el.key!==action.payload)

        case COMPLETE_TASK:
            return state.map(el =>(el.key===action.payload)?{...el,complete: !el.complete}:el )
            
        case EDIT_TASK:
            return state.map(el =>(el.key===action.payload.id)?{...el,edit: !el.edit,title:action.payload.newtitle}:el )     
                
        default:
                return state
    }

}
export default Reducer