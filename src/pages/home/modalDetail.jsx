import React from "react";


export default function ModalDetail({item, handleClose}) {

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" style={{width:'400px', left:'50%;', marginRight:"-100px"}}>
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div
                            className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h5 className="font-semibold">
                                ID: {item.id}
                            </h5>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => handleClose()}>
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 p-8 text-slate-500 text-sm leading-relaxed">
                                <h5 className="font-bold">Name</h5>
                                <span>{item.name}</span>
                                <h5 className="font-bold">Email</h5>
                                <span>{item.email}</span>
                                <h5 className="font-bold">Body</h5>
                                <span>{item.body}</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

