

export function ButtonCreation(props){
   
    return(
        <div className="button">
        <button class="p-1 " style={{background : props.btnColor === "yellow" ? "#EBC80C" : "#FA8232" ,border:"none"} }>SHOP NOW    </button>
        </div>
    );
}