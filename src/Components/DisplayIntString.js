const DisplayIntString = (props) => {
  return ( 
    <div>
    { isNaN(props.content)  ? 
    <h1 style= {{backgroundColor: props.bgcolor, color: props.color}}>The word is:  {props.content} </h1> : 
    <h1 style= {{backgroundColor: props.bgcolor, color: props.color}}>The number is : {props.content} </h1> }
    </div>
   );
}
 
export default DisplayIntString;