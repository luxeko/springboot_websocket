import React, {useEffect, useState} from 'react';
import {TbMinusVertical, TbMinus} from 'react-icons/tb'
import PositionBox from "./PositionBox.jsx";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";

const SeatRender = (props) => {
    const {maxRow, maxColumn, setMaxRow, setMaxColumn} = props
    const [rows, setRows] = useState([])

    useEffect(() => {
        const newRows = []
        for (let i = 1; i <= maxRow; i++) {
            const row = []
            for (let j = 1; j <= maxColumn; j++) {
                row.push(<PositionBox key={`row-${i}-col-${j}`} row={i} column={j} maxColumn={maxColumn} setMaxColumn={setMaxColumn}/>)
            }
            if (i === maxRow) {
                newRows.push(<div key={`row-${i}`} className={`row flex items-center relative`}>
                    {row}
                    <span className={`absolute -bottom-10 -left-8`}>
                            <div className={`cursor-pointer`} onClick={()=>setMaxRow(maxRow+1)}><AiFillPlusCircle className={`text-lime-600 w-6 h-6`}/></div>
                            <span> <TbMinus className={`w-6 h-6`}/> </span>
                            <div className={`cursor-pointer`} onClick={()=>setMaxRow(maxRow-1)}><AiFillMinusCircle className={`text-dangerColor-default_2 w-6 h-6`}/></div>
                        </span>
                </div>)
            } else {
                newRows.push(<div key={`row-${i}`} className={`row flex items-center`}>{row}</div>)
            }
        }
        setRows(newRows)
    }, [maxColumn, maxRow])

    return (
        <div>
            {rows.map((row, indexRow) => (
                row
            ))}
        </div>
    );
};

export default SeatRender;