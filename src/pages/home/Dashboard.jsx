import React, {useEffect, useState} from "react";
import {getComments} from "../../services/commentService";
import ClipLoader from "react-spinners/ClipLoader";
import ModalDetail from "./modalDetail"



export default function Dashboard() {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);

    const [currentItem, setCurrentItem] = useState(false);


    useEffect(() => {


        const timer = setTimeout(() => {
            getComments()
                .then(({data}) => {
                    setLoading(false);
                    setComments(data);
                });


        }, 2000);
        return () => clearTimeout(timer);
    }, [])


    return <div id="main" className="overflow-x-auto relative shadow-md sm:rounded-lg"
                style={{height: 'calc(100vh - 160px)', maxHeight: '800px', overflow: 'scroll'}}>
        <div>

            {showModal && <ModalDetail item={currentItem} handleClose={() => setShowModal(false)}/>}

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        ID
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Email
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

                    </th>
                </tr>
                </thead>
                <tbody>
                {comments?.map((item, idx) =>
                    <tr key={idx}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {item.id}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.name}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.email}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button onClick={(e) => {
                                setCurrentItem(item);
                                console.log(item);
                                setShowModal(true)
                            }}>
                                <i className="fas fa-eye text-emerald-500 mr-4"></i>
                            </button>
                        </td>
                    </tr>)}

                </tbody>
            </table>

            <div className="text-center">
                <ClipLoader
                    color="#00a5b9"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>

        </div>

    </div>


}
