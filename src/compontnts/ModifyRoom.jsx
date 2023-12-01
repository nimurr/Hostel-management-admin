import axios from "axios"
import api from "../api/api"
import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify"; 




export default function ModifyRoom() {

    const [display, setDisplay] = useState([])
    useEffect(() => {
        axios.get(`${api}/hotelRoom`)
            .then(res => {
                setDisplay(res.data.rooms)
            })
    }, [])


    const handleDelete = (id) => {

        const datas = display.filter(d => d.id !== id)

        setDisplay(datas)


        axios.delete(`${api}/hotelRoom/${id}`)
            .then(res => {
                console.log('delete success', id , res.data)
                toast.success(' Room Delete SuccessFully!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                console.log('error is', error)
            })

    }

    // const handleEdit = (id)=>{
    //     console.log(id)
    // }



    return (
        <div className="m-5 w-full">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {
                display?.map((d) =>
                    <div className="mb-5 sm:flex items-center justify-between text-white bg-[#171b2e] p-2 w-full" key={d.id}>
                        <img className="w-40 h-28" src={d.image} alt="" />
                        <div className="text-center">
                            <h2 className="font-semibold text-xl">{d.roomName}</h2>
                            <h2 className="font-semibold text-3xl mt-2"> BDT {d.roomPrice}</h2>
                        </div>
                        <div className="w-4/12 text-justify">
                            {d.roomDetails}
                        </div>
                        <div className="flex">
                            

                            <button onClick={() => handleDelete(d.id)} className="p-2 bg-red-500 text-white rounded font-semibold flex items-center gap-1 mr-2"><MdDeleteForever />
                                Delete</button>
                        </div>
                    </div>)
            }



        </div>
    )
}

