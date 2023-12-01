import axios from "axios"
import { useEffect, useState } from "react"
import api from "../api/api"
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";


export default function Allmembers() {


    const [display, setDisplay] = useState([])
    useEffect(() => {
        axios.get(`${api}/members`)
            .then(res => {
                setDisplay(res.data.rooms.reverse())
            })
    }, [])
    console.log(display)

    const handleDelete = (id) => {

        const datas = display.filter(d => d.id !== id)

        setDisplay(datas)

        axios.delete(`${api}/members/${id}`)
            .then(res => {
                console.log('delete success', id, res.data)
                toast.success(' Members Delete SuccessFully!', {
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

    return (
        <div className="">
            <h2 className="text-4xl font-semibold my-5 text-gray-200 text-center">All Members</h2>
            <span className="block w-32 h-1 bg-red-500 mx-auto"></span>
            <div  className="grid grid-cols-4 gap-4 my-10">
                {
                    display?.map(d => <div key={d.id} className="bg-[#171b2e] rounded-md text-gray-100 text-center pt-5 pb-5">
                        <img className="w-28 h-28 rounded-full mx-auto" src={d.image} alt="" />
                        <div className=" mt-4 mb-2">
                            <h2 className="font-semibold text-gray-400 text-xl"> Name: {d.roomName}</h2>
                            <h2 className="font-semibold text-gray-400 text-xl">Phone: {d.roomPrice}</h2>
                        </div>
                        <div className="text-center">
                            <h2>Address : {d.roomDetails}</h2>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button onClick={() => handleDelete(d.id)} className="p-2 bg-red-500 mt-2 rounded flex items-center gap-2"><MdDeleteForever /> Delete</button>
                        </div>

                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    )
}
