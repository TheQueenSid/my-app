import { Div } from "../Div/Div"


export const Multi=(props)=>{
    return(
        <div>
            <h1>Multiplication:{props.a*props.b}</h1>
            <Div a={props.a} b={props.b}></Div>
        </div>
    )
    
}