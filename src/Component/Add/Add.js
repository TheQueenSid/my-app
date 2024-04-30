import { Sub } from "../Sub/Sub"

export const Add = (props) => {
    console.log("props",props)

    return(
        <div>
        <h1>Addition:{parseInt(props.a) + parseInt(props.b)}</h1>
        <Sub a={props.a} b={props.b}></Sub>
        </div>
    )
}