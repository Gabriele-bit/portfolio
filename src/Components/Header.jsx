import { HashLink } from 'react-router-hash-link';
export default function Header() {
    return (
        <div className='flex w-full min-h-full'>
            <div className='bg-[#AEC6CF] flex flex-col items-center basis-[65%] flex-initial'>
                <div className='w-fit flex flex-1 flex-col justify-center justify-self-center items-center'>
                    <p className='text-white  text-[5vh] font-[bungee] '>Hi! </p>
                    <p className='text-[#444444]  font-[bungee]  text-[5vh]  '>Gabriele Patanè </p>
                    <h3 className='text-red-400  font-[bungee]  text-[3vh]  '>Web Developer</h3>
                    <p className='text-white  text-[5vh] font-[bungee]   '>here. </p>
                </div>

                <div className='w-[90%] flex p-[2vh] font-[playfair] flex-0.5 text-white gap-[3vh]'>
                    <HashLink smooth to="#aboutme" className='rounded-lg text-[3vh] text-[#444444] flex-1 text-center p-[10px] hover:bg-[#444444] transition-transform hover:text-white hover:scale-110'>
                    About me
                    </HashLink>
                    <HashLink smooth to="#projects" className='rounded-lg text-[3vh] text-[#444444] flex-1 text-center p-[10px] max-w-wl hover:bg-[#444444] transition-transform hover:text-white hover:scale-110'>
                    My Projects
                    </HashLink>
                    <HashLink smooth to="#contact" className='rounded-lg text-[3vh] text-[#444444] flex-1 text-center p-[10px] max-w-wl hover:bg-[#444444] transition-transform hover:text-white hover:scale-110'>
                     Contact & Resume
                    </HashLink>
                </div>
            </div>
            <div className='bg-[#444444] flex justify-center items-center basis-[35%] flex-initial'>
            </div>
        </div>
    )
}