
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../api/api';

export default function Addrooms() {


    async function handlePost(e) {
        e.preventDefault();
        const form = e.target;
        const image = form.name.value;
        const roomName = form.imageUrl.value;
        const roomDetails = form.roomDetails.value;
        const roomPrice = form.roomPrice.value;
        const rooms = { image, roomName, roomPrice, roomDetails }
        console.log(rooms)
        fetch(`${api}/hotelRoom`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rooms)
        })
        .then(res => {
                console.log(res)
                toast.success(' Room add SuccessFully!', {
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
        form.reset();

    }



    return (
        <div className="w-8/12 mx-auto my-10  ">
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
            <form onSubmit={handlePost} className="bg-[#171b2e] text-white p-4 rounded">
                <h2 className="text-2xl font-semibold text-center  mb-4">Add a Rooms</h2>
                <div className="mb-5">
                    <label className="block text-left mb-2 text-sm font-medium text-gray-200 dark:text-white"> Room Image Url</label>
                    <input required type="text" id="base-input" name="name" className="bg-transparent border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label required className="block text-left  text-sm font-medium text-gray-200 mb-2 dark:text-white">Room Name</label>
                    <input required type="text" name="imageUrl" id="base-input" className="bg-transparent border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label  className="block text-left  text-sm font-medium text-gray-200 mb-2 dark:text-white">Room Details</label>
                    <input required type="text" name="roomDetails" id="base-input" className="bg-transparent border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label className="block text-left  text-sm font-medium text-gray-200 dark:text-white mb-2">Room Price</label>
                    <input required type="text" name="roomPrice" id="base-input" className="bg-transparent border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="p-2 mt-5 text-white w-full bg-blue-500 rounded font-semibold">Add Room</button>
            </form>

        </div>
    )
}
