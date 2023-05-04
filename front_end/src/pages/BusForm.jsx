import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import SeatRender from "../components/SeatRender.jsx";
import {useDispatch} from "react-redux";
import {addPosition} from "../redux/action/positionAction.jsx";
import PositionOption from "../components/PositionOption.jsx";

const BusForm = () => {
    const busId = useLocation().state?.busId
    const [busName, setBusName] = useState("")
    const [licensePlates, setLicensePlates] = useState("")
    const [seatQuantity, setSeatQuantity] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const navigate = useNavigate();
    const [maxColumn, setMaxColumn] = useState(4)
    const [maxRow, setMaxRow] = useState(5)
    const dispatch = useDispatch()


    const handleResetForm = () => {
        setBusName("")
        setLicensePlates("")
        setSeatQuantity("")
        setCreatedAt("")
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        // after create bus => response busId
        const busId = 1
        const data = {
            busId: busId,
            row: 0,
            column: 0,
            isSeat: true,
            seatCode: "",
            fate: 0
        }
        dispatch(addPosition(data))
    }

    return (
        <>
            <div className={`max-w-screen-xl mx-auto py-12 sm:py-12 lg:max-w-7xl`}>
                <form className="col-span-1">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="busName">
                                Bus Name
                            </label>
                            <input
                                value={busName ? busName : ""}
                                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="busName" name={`busName`} type="text"
                                onChange={(e) => setBusName(e.target.value)}/>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="licensePlates">
                                License Plates
                            </label>
                            <input
                                value={licensePlates ? licensePlates : ""}
                                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="licensePlates" name={`licensePlates`} type="text" onChange={(e) => setLicensePlates(e.target.value)}/>
                        </div>
                    </div>
                    <div className={`flex items-end justify-end`}>
                        <button type="submit"
                                onClick={(e) => handleSubmitForm(e)}
                                className="mr-2 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Save
                        </button>
                        <button type="reset"
                                onClick={handleResetForm}
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black border bg-white rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:text-white hover:bg-red-700">
                            Reset
                        </button>
                    </div>
                    <div className={`grid grid-cols-2 gap-10 mt-20`}>
                        <div className={`col-span-1`}>
                            <SeatRender maxColumn={maxColumn} maxRow={maxRow} setMaxColumn={setMaxColumn} setMaxRow={setMaxRow}/>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
};

export default BusForm;