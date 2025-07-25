import { HashLink } from "react-router-hash-link"
export default function Menu() {
    return (
        <div className=' absolute w-[100%] text-white flex justify-center self-center gap-[5vw] font-sans rounded-tl-0 rounded-bl-[2vh]
          rounded-tr-0 rounded-br-[2vh]  text-center lg:w-[70%] p-2 bg-red-400'>
            <HashLink smooth to="#aboutme" className='text-[3vh]  transition-transform hover:scale-130 h-fit hover:text-[#e6e6e6] hover:rounded-[2vh] hover:font-bold cursor-pointer'>
                About
            </HashLink>
            <HashLink smooth to="#projects" className=' text-[3vh] transition-transform  hover:scale-130 h-fit hover:text-[#e6e6e6] hover:rounded-[2vh] hover:font-bold cursor-pointer'>
                Projects
            </HashLink>
            <HashLink smooth to="#contact" className='  text-[3vh] transition-transform  hover:scale-130 h-fit hover:text-[#e6e6e6] hover:rounded-[2vh] hover:font-bold cursoor-pointer'>
                Contacts
            </HashLink>
        </div>)
}