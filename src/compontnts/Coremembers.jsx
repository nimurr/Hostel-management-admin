import { ToastContainer, toast } from "react-toastify";
import api from "../api/api";

export default function Coremembers() {

    async function handlePost(e) {
        e.preventDefault();
        const form = e.target;
        const image = form.name.value;
        const roomName = form.imageUrl.value;
        const roomDetails = form.roomDetails.value;
        const roomPrice = form.roomPrice.value;
        const rooms = { image, roomName, roomPrice, roomDetails }
        console.log(rooms)
        fetch(`${api}/coremember`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rooms)
        })
            .then(res => {
                console.log(res)
                toast.success('Core Members Add SuccessFully!', {
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
            <h2 className="my-4 text-4xl text-center text-gray-200 font-semibold">Add Core members </h2>
            <span className="block w-32 h-1 bg-red-500 mx-auto"></span>
            <div className="my-10">
                <form onSubmit={handlePost} className="bg-[#171b2e] text-white p-10 w-8/12 mx-auto rounded">
                    <h2 className="text-3xl font-semibold text-center  mb-5">Add a Members</h2>
                    <div className="mb-5">
                        <label className="block text-left mb-2 text-sm font-medium text-gray-200 dark:text-white"> Member Image Url</label>
                        <input required type="text" id="base-input" name="name" className="bg-transparent border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label required className="block text-left  text-sm font-medium text-gray-200 mb-2 dark:text-white">Member Name</label>
                        <input required type="text" name="imageUrl" id="base-input" className="bg-transparent border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-left  text-sm font-medium text-gray-200 mb-2 dark:text-white">Member Status</label>
                        <input required type="text" name="roomDetails" id="base-input" className="bg-transparent border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-left  text-sm font-medium text-gray-200 dark:text-white mb-2">Member Number</label>
                        <input required type="text" name="roomPrice" id="base-input" className="bg-transparent border text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <button type="submit" className="p-2 mt-5 text-white w-full bg-blue-500 rounded font-semibold">Add Room</button>
                </form>
            </div>
        </div>
    )
}
