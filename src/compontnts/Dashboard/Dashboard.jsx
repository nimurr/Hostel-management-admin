import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import api from "../../api/api";
import { ToastContainer, toast } from "react-toastify";


export default function Dashboard() {

  const [display, setDisplay] = useState([])
  useEffect(() => {
    axios.get(`${api}/coremember`)
      .then(res => {
        setDisplay(res.data.rooms.reverse())
      })
  }, [])

  const [allmembers , setAllmembers] = useState([]);
    useEffect(() => {
      axios.get(`${api}/members`)
        .then(res => {
          setAllmembers(res.data.rooms.reverse())
        })
    }, [])

  const [hotelRoom , setAllhotelRoom] = useState([]);
    useEffect(() => {
      axios.get(`${api}/hotelRoom`)
        .then(res => {
          setAllhotelRoom(res.data.rooms.reverse())
        })
    }, [])

  const handleDelete = (id) => {
      const datas = display.filter(d => d.id !== id)
      setDisplay(datas)
  
      axios.delete(`${api}/coremember/${id}`)
        .then(res => {
          console.log('delete success', id, res.data)
          toast.success(' Members Delete SuccessFully!', {
            position: "top-center",
            autoClose: 1000,
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
    <div className='my-10'>
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
      <div className='grid grid-cols-3 gap-4'>
        <div className='text-center bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded' >
          <h2 className='text-2xl text-gray-300 font-semibold'>Available Room</h2>
          <h3 className='text-5xl text-gray-200 font-semibold'>{hotelRoom?.length}</h3>
        </div>
        <div className='text-center bg-gradient-to-r from-cyan-500 to-green-500 p-4 rounded' >
          <h2 className='text-2xl text-gray-300 font-semibold'>All Members</h2>
          <h3 className='text-5xl text-gray-200 font-semibold'>{allmembers?.length}</h3>
        </div>
        <div className='text-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4 rounded' >
          <h2 className='text-2xl text-gray-300 font-semibold'>Old Members</h2>
          <h3 className='text-5xl text-gray-200 font-semibold'>25</h3>
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-4xl font-semibold text-gray-200 mb-6">Core Members</h2>
        <div>
          {
            display.length == 0 && <h2 className="text-xl font-semibold text-red-500 text-center">Members Not Available !! </h2>
          }
          <div className='grid lg:grid-cols-3 md:grid-cols-2 px-4 lg:px-0 gap-6 max-w-7xl mx-auto '>

            {
              display?.map(d => <div key={d.id}>
                <div className='bg-[#171b2e] rounded-md overflow-hidden'>
                  <img width={200} height={200} className='w-52 h-52 my-2 mx-auto rounded-full' src={`${d.image}`} alt="" />
                  <div className='p-3'>
                    <h2 className='text-gray-200  text-4xl my-2 text-center'>{d.roomName}</h2>
                    <h3 className='text-gray-200 text-xl my-2 text-center'> {d.roomDetails}</h3>
                    <h3 className='text-gray-200 text-xl my-2 text-center'> Phone : {d.roomPrice}</h3>
                    <button onClick={() => handleDelete(d.id)} className="text-center flex items-center justify-center gap-1 w-4/12 mx-auto py-2 px-5 rounded font-semibold bg-red-500 text-white" ><MdDeleteForever /> Delete</button>
                  </div>
                </div>
              </div>)
            }

          </div>
        </div>
      </div>

      <div className="my-10">
        <h2 className=" text-gray-200 font-semibold text-4xl mb-4">User Message</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-200  dark:bg-gray-700 dark:text-gray-400">
              <tr className="flex justify-between py-2">
                <th scope="col" className="px-6 py-3">
                  User name
                </th>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium bg-blue-500 text-white px-4 py-2 rounded dark:text-blue-500 hover:underline">Accept</a>
                  <a href="#" className="font-medium bg-red-500 ml-2 text-white px-4 py-2 rounded dark:text-blue-500 hover:underline">Delete</a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium bg-blue-500 text-white px-4 py-2 rounded dark:text-blue-500 hover:underline">Accept</a>
                  <a href="#" className="font-medium bg-red-500 ml-2 text-white px-4 py-2 rounded dark:text-blue-500 hover:underline">Delete</a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium bg-blue-500 text-white px-4 py-2 rounded dark:text-blue-500 hover:underline">Accept</a>
                  <a href="#" className="font-medium bg-red-500 ml-2 text-white px-4 py-2 rounded dark:text-blue-500 hover:underline">Delete</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
