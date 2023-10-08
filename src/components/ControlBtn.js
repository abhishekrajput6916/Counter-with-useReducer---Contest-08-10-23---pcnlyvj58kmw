export default function ControlBtn({id,dispatch,payload}){
    return <button id={id} onClick={()=>{
        dispatch({type:payload})
    }} >{payload}</button>
}