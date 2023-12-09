import { useState } from 'react'
import './Card.css'

function Card(props) {

    const [status, setStatus] = useState(true)

    const updateStatus = () => {
        setStatus(!status)
    }


    return (
            <div className='Crad-main-container'>
                <div className='Crad-main-subcontainer'>
                    <h3 className='Card-heading'>{props.index+1} . {props.item} </h3>


                    <p className='Card-para'>status : {status ? "Pending" : "Completed"}</p>

                    <button className='update-btn' onClick={updateStatus}>Update Status</button>
                    <button className='delete-btn' onClick={e =>{props.deleteItem(props.index)}}>Remove</button>


                </div>
            </div>

    )

}

export default Card