import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";
import { ToastContainer, toast } from "react-toastify";

export default function Gallery() {
  const [display, setDisplay] = useState([])
  async function handlePost(e) {
    e.preventDefault();
    const form = e.target;
    const image = form.name.value;
    const rooms = { image }
    fetch(`${api}/gallery`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rooms)
    })
      .then(res => {
        toast.success(' Add Gallery Photo Successfully !', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res)
        form.reset()
        location.reload();

      })


  }

  useEffect(() => {
    axios.get(`${api}/gallery`)
      .then(res => {
        setDisplay(res.data.rooms)
      })
  }, [])
  console.log(display)



  const handleDelete = (id) => {

    const datas = display.filter(d => d.id !== id)
    setDisplay(datas)

    axios.delete(`${api}/gallery/${id}`)
      .then(res => {
        console.log('Add Image successfully !', id, res.data)
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


  return (
    <div>
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
      <form onSubmit={handlePost} className="w-6/12 bg-[#171b2e] p-5 my-10">
        <h2 className="my-4 text-4xl text-center text-gray-200">Add Gallery Image</h2>
        <div className="mb-5 ">
          <label className="block text-left mb-2 text-sm font-medium text-gray-200 dark:text-white ">Gallery Image URL</label>
          <input required type="text" id="base-input" name="name" className="bg-transparent border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        </div>
        <button type="submit" className="p-2 text-white w-full bg-blue-500 rounded mt-2 font-semibold">Submit</button>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {
          display?.map(d => <div className="p-2 bg-[#171b2e]" key={d.id}>
            <img className="w-full h-44" src={d.image} alt="" />
            <button onClick={() => handleDelete(d.id)} className="w-full bg-red-500 py-2 my-2 text-white rounded">Delete</button>
          </div>)
        }
      </div>
    </div>
  )
}
