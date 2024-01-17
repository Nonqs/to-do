import "./Edit.css"
import { useState } from "react"


export function Edit({ res, onDelete }) {


    const [edit, setEdit] = useState(false)
    const [newValue, setNewValue] = useState(res)
    const [complete, setComplete] = useState(true)


    const handleClickEdit = () => {
        setEdit(true)
    }

    const handleClickDelete = () => {

        onDelete();
    };
    const handleClick = () => {

        setEdit(false)

    }

    const handleChange = (event) => {
        setNewValue(event.target.value)
    }


    return (

        <div className="task-container">

            {edit == true
                ? (
                    <ul className="todo-task">
                        <input className="buttons on-edit" onChange={handleChange} type="text" value={newValue} />
                        <button className='buttons edit' onClick={handleClick} >+</button>
                    </ul>
                )
                : (

                    <ul className="todo-task">

                        <div style={{display: "flex"}}>

                            <input className="check" type="checkbox" onChange={() => { setComplete(!complete) }} />
                            {complete
                                ? (<p> {newValue} </p>)
                                : (<p style={{ textDecoration: "line-through" }}>{newValue}</p>)
                            }

                        </div>

                        <div>
                            <button className='buttons edit' onClick={handleClickEdit}>Edit</button>
                            <button className='buttons delete' onClick={handleClickDelete}>Delete</button>
                        </div>
                    </ul>
                )
            }
        </div>

    )
}