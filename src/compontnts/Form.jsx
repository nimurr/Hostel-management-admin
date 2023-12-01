
// import { axios } from 'axios';

import api from "../api/api";

export default function Form() {

    async function handlePost  (e){
        e.preventDefault();
        const form = e.target;
        const image = form.name.value;
        const roomName = form.imageUrl.value;
        const roomDetails = form.roomDetails.value;
        const roomPrice = form.roomPrice.value;
        const rooms = {image, roomName ,roomPrice, roomDetails  }
        console.log(rooms)
        fetch(`${api}/hotelRoom`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(rooms)
        })
        .then(res => {
            console.log(res)
        })

        // try {
        //     await axios.post(`http://localhost:3000/hotelRoom`, rooms);
        //   } catch (error) {
        //     console.log("ERORR:: ", error?.message);
        //   } finally {
        //     console.log("updated data ", );
        //   }

        // axios.post(`http://localhost:3000/hotelRoom`, rooms);
    }


    return (
        <div className="p-4 bg-gray-100 w-4/12 mx-auto">

            <form onSubmit={handlePost} className="">
                <div className="mb-5">
                    <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="base-input" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-5">
                    <label  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"> Image Url</label>
                    <input type="text" name="imageUrl" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div>
                    <label  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">roomDetails</label>
                    <input type="text" name="roomDetails" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div>
                    <label  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="text" name="roomPrice" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <button type="submit" className="p-2 text-white w-full bg-blue-500 rounded mt-2 font-semibold">Submit</button>
            </form>

        </div>
    )
}
