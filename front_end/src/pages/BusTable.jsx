import React, {useEffect, useState} from 'react';
import {getListBus} from "../services/API.jsx";
import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi";
import {BiSearch} from "react-icons/bi";
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import moment from "moment";
import {AiFillEye} from "react-icons/ai";

const BusTable = () => {
    const [listBus, setListBus] = useState([])
    const [keyword, setKeyword] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await handleGetListBus()
        }
        fetchData()
    }, [keyword])

    const handleGetListBus = async () => {
        const res = await getListBus(keyword)
        if (res && res.code === '200') {
            setListBus(res.data)
        } else {
            setListBus([])
        }
    }

    const handleSearchBus = (e) => {
        setKeyword(e.target.value)
    }
    return (
        <>
            <div className={`max-w-screen-xl mx-auto py-12 sm:py-12 lg:max-w-7xl`}>
                <div className={`flex items-center justify-between mb-10`}>
                    <div className={`inline-block`}>
                        <Link to={`/create`}
                              className={`rounded-lg bg-green-600 px-4 py-2 uppercase font-semibold text-white flex items-center`}><FiPlus
                            className={`mr-2`}/> Add bus</Link>
                    </div>
                    <form className={`w-96`}>
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                            </div>
                            <input type="search" id="default-search"
                                   className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search bus..." onChange={(e) => handleSearchBus(e)}/>
                        </div>
                    </form>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 w-2 py-3">
                                #
                            </th>
                            <th scope="col" className="w-44 px-6 py-3">
                                Bus Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                License Plates
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seat Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listBus.map((bus, index) => {
                                return (
                                    <tr key={`product-${index}`}
                                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-2">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4">
                                            {bus.busName}
                                        </td>
                                        <td scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {bus.licensePlates}
                                        </td>
                                        <td className="px-6 py-4 font-semibold">
                                            {bus.seatQuantity}
                                        </td>
                                        <td className="px-6 py-4">
                                            {bus.createdAt ? moment(bus.createdAt).format("DD-MM-YYYY HH:mm:ss") : ""}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`flex items-center`}>
                                                <div className={`cursor-pointer hover:bg-yellow-400 bg-yellow-300 inline-flex items-center justify-center text-center text-white duration-300 p-2 rounded mr-3`}>
                                                    <Link to={`/edit`} state={{busId: bus?.id}}
                                                          className="cursor-pointer dark:text-blue-500">
                                                        <AiFillEye className={`w-5 h-5`}/>
                                                    </Link>
                                                </div>
                                                <div className={`cursor-pointer hover:bg-primaryColor bg-primaryColor_hover inline-flex items-center justify-center text-center text-white duration-300 p-2 rounded mr-3`}>
                                                    <Link to={`/edit`} state={{busId: bus?.id}}
                                                          className="cursor-pointer dark:text-blue-500">
                                                        <FaPencilAlt className={`w-5 h-5`}/>
                                                    </Link>
                                                </div>
                                                <div className={`cursor-pointer hover:bg-dangerColor-default_3 bg-dangerColor-default_2 inline-flex items-center justify-center text-center text-white duration-300 p-2 rounded`}>
                                                    <button className="cursor-pointer dark:text-red-500">
                                                        <FaTrashAlt className={`w-5 h-5`}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default BusTable;