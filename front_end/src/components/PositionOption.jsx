import React, {useState} from 'react';
import {GrClose} from "react-icons/gr";

const PositionOption = ({isOpen, setOpenModal, row, column}) => {
    const [positionType, setPositionType] = useState("")
    return (
        <div id="defaultModal" tabIndex="-1" aria-hidden="true"
             className={`z-[10] fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${isOpen ? 'justify-center items-center flex' : 'hidden'}`}>
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Choose position option
                        </h3>
                        <button type="button" onClick={() => setOpenModal(false)}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal">
                            <GrClose/>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <div>
                            <label>Row</label>
                            <input className={`bg-[#6b7280]/30`} value={row} readOnly={true} type={`text`}/>
                        </div>
                        <div>
                            <label>Column</label>
                            <input value={column} className={`bg-[#6b7280]/30`} readOnly={true} type={`text`}/>
                        </div>
                        <div>
                            <span>Position type</span>
                            <div>
                                <label>Seat</label>
                                <input type={"radio"} onClick={() => setPositionType("seat")} name={`isSeat`}/>
                            </div>
                            <div>
                                <label>Way</label>
                                <input type={"radio"} onClick={() => setPositionType("way")} name={`isSeat`}/>
                            </div>
                        </div>
                        {
                            positionType === "seat" ?
                                <div>
                                    <label>Seat Code</label>
                                    <input type={`text`}/>
                                </div> :
                                <></>
                        }
                    </div>
                    <div
                        className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="defaultModal" type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
                        </button>
                        <button onClick={() => setOpenModal(false)} data-modal-hide="defaultModal" type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PositionOption;