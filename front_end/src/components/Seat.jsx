import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {decreaseSeat, increaseSeat} from "../redux/action/seatAction.js";

const Seat = (props) => {
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false)
    const toggleActive = (props) => {
        if (isActive) {
            dispatch(decreaseSeat(props.id))
        } else {
            dispatch(increaseSeat(props))
        }
        setIsActive(!isActive);
    };

    return (
        <div className={`position`}>
            {props.seat.code ?
                <div className={isActive === true ? 'active seat' : 'seat'}
                     onClick={()=>toggleActive(props.seat)}>
                    <MdOutlineEventSeat/>
                    <span>{props.seat.code}</span>
                </div>
                :
                <span className={`way`}></span>}
        </div>
    );
};

export default Seat;