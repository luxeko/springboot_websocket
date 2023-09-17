import React, {useState} from 'react';
import {MdOutlineEventSeat} from "react-icons/md";
import {TbSteeringWheel, TbMinusVertical} from "react-icons/tb"
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai";
import PositionOption from "./PositionOption.jsx";

const PositionBox = (props) => {
    const {row, column, maxColumn, setMaxColumn} = props
    const [isSeat, setIsSeat] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const data = {
        row: row,
        column: column
    }
    console.log(data)
    const handleSelectTypePosition = () => {
        setOpenModal(true)
    };
    const [positionType, setPositionType] = useState("")
    return (
        <>
            <PositionOption isOpen={openModal} setOpenModal={setOpenModal} row={row} column={column}/>
            <div
                className={`${openModal ? 'overlay w-screen h-screen z-[1] fixed bg-zinc-700/75 top-0 left-0 duration-300 right-0 bottom-0' : ''}`}></div>
            {
                row === 1 && column === 1 ?
                    <TbSteeringWheel className={`border-[1px] w-20 h-20`}/> :
                    <div className={column === maxColumn && row === 1 ? 'relative' : ''}>
                        <div onClick={handleSelectTypePosition}
                             className={`hover:bg-[#1e293b]/20 cursor-pointer border-[1px] w-20 h-20`}>
                            {
                                positionType === "seat" ? <MdOutlineEventSeat/> : positionType === "way" ? <></> : <></>
                            }
                        </div>
                        {
                            (column === maxColumn) && row === 1 ?
                                <span className={`absolute -top-8 -right-10 flex items-center`}>
                            <div className={`cursor-pointer`} title={`Add column`}
                                 onClick={() => setMaxColumn(maxColumn + 1)}><AiFillPlusCircle
                                className={`text-lime-600 w-6 h-6`}/></div>
                            <span> <TbMinusVertical className={`w-6 h-6`}/> </span>
                            <div className={`cursor-pointer`} title={`Remove column`}
                                 onClick={() => setMaxColumn(maxColumn - 1)}><AiFillMinusCircle
                                className={`text-dangerColor-default_2 w-6 h-6`}/></div>
                        </span> :
                                <></>
                        }
                    </div>
            }
        </>
    );
};

export default PositionBox;