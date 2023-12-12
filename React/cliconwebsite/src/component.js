export const TaskElement = (props) =>{
    return(
        <div>
            <h1>{props.item}</h1>
            <button onClick={ () => props.deleteTask(props.item)}>Remove</button>
        </div>
        ) 
};
