import { HashLink } from "react-router-hash-link"
export default function Button() {
    return (
        <HashLink smooth to="#contact" className="cursor-pointer bg-red-400 text-[4vh] font-[bungee] p-[2vh] pl-[4vh] pr-[4vh] rounded-[4vh] hover:bg-red-900 shadow-xl/30 shadow-red-300">
            Lets' do it!
        </HashLink>
    )
}