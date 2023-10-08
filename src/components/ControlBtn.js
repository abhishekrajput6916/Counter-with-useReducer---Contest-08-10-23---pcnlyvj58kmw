export default function ControlBtn({id,state,dispatch,payload}){
    return <button id={id} onClick={()=>{
        dispatch(state,{type:payload})
    }} >{payload}</button>
}