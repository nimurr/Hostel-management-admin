import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../api/api";


export default function Rooms() {

    const [rooms, setRooms] = useState([])
    async function fetchRooms() {
        const { data } = await axios.get(`${api}/hotelRoom`)
        setRooms(data?.rooms)

    }
    useEffect(() => {
        fetchRooms()
    }, [])

    const handleDelete = (id) => {

        axios.delete(`${api}/hotelRoom/${id}`)
            .then(res => {
                console.log('delete success', id)
                toast.success("Delete Successfully !", {
                    position: toast.POSITION.TOP_CENTER,
                  });
            })
            .catch(error => {
                console.log('error is', error)
            })
    }

    return (
        <div>
            {
                rooms?.map(d =>
                    <div key={d.id} className="p-6 my-2 bg-gray-200">
                        <img src={d.roomName} alt="" />
                        <p>{d.image}</p>
                        <p>{d.roomPrice}</p>
                        <p>{d.roomDetails}</p>
                        <button onClick={() => handleDelete(d.id)} className="bg-red-500 p-2 text-white">Delete</button>
                    </div>
                )
            }
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
        </div>
    )
}
