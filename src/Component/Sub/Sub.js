import { Multi } from "../Multi/Multi"



export const Sub=(props)=>{

    return(
        <div>
        <h1>Subtraction:{props.a - props.b}</h1>
        <Multi a={props.a} b={props.b}></Multi>
        </div>
    )
}