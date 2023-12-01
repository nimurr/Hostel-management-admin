import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdAlignHorizontalLeft } from "react-icons/md";
import { HiMiniUserPlus } from "react-icons/hi2";
import { TiHome } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";



export default function Navigation() {

    return (
        <div className="sticky top-0">
            <div>
                <ul className="flex flex-col justify-start  py-10 text-blue-500 bg-[#171b2e] h-[100vh]">
                    <p className="font-semibold text-center text-4xl text-blue-500 mb-10">SB-Villa</p>
                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold flex items-center gap-2' to='/'><TiHome />All Details</NavLink>
                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold flex items-center gap-2' to='/allmembers'><FaUsers />Members</NavLink>
                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold flex items-center gap-2' to='/addmembers'><HiMiniUserPlus />Add Member</NavLink>

                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold flex items-center gap-2' to='/editrooms'><MdAlignHorizontalLeft />Rooms</NavLink>
                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold flex items-center gap-2' to='/rooms'><IoMdAddCircleOutline />Add Room</NavLink>
                    
                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold flex items-center gap-2' to='/gallery'>
                    <FaImage />Hostel Gallery</NavLink>
                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold flex items-center gap-2' to='/coremembers'><FaHouseUser /> Add Core Member</NavLink>
                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold' to='/review'>view Review</NavLink>
                    <NavLink className='py-2  pl-6 text-xl my-1 font-semibold' to='/others'>Others</NavLink>

                </ul>
            </div>
        </div>
    )
}
