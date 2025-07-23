import { useEffect, useState } from "react";


export default function SingleProject(props) {
    const [screen, setScreen] = useState(props.screenDesktop);
    const [num, setNum] = useState(1);
    const imageNumber = {
        num: num,
        img: screen
    }



    const changeScreen = () => {
        if (imageNumber.num === 1) {
            setScreen(props.screenMobile);
            setNum(2);
        } else {
            setScreen(props.screenDesktop);
            setNum(1);
        }
    }

    return (
        <div className="flex flex-1 lg:flex-1/4 bg-[#333333a3] flex-col justify-center items-center text-white h-fit">
            <div className="flex w-[100%] flex-col justify-center items-center leading-4 mb-2 ">
                <div className="flex justify-end relative p-2 w-[100%]">
                    <span className="absolute text-xl font-bold font-mono  left-1/2 -translate-x-1/2">{props.title}</span>
                    <span className="text-[#ffffff8c] mr-3">{imageNumber.num}/{2}</span>
                </div>
                <span className="text-[2vh]">{props.subtitle}</span>
            </div>
            <div className=" w-[100%] h-[30vh] flex flex-col justify-center items-center relative">
                <div className="flex gap-2.5 text-[5vh] text-[#ffffff67] font-bold ">
                    <input type="button" className=" hover:text-red-400 cursor-pointer absolute bottom-[40%] right-5 " onClick={() => changeScreen()} value={">"}></input>
                    <input type="button" className=" hover:text-red-400 cursor-pointer absolute bottom-[40%] left-5" onClick={() => changeScreen()} value={"<"}></input>
                </div>
                <img className=" w-[auto] h-full " src={imageNumber.img} />
            </div>

            <div className="flex w-full flex-col justify-center items-center ">
                <div className="flex flex-1 flex-col w-full items-center h-full justify-center ">
                    <p className="text-[#ffffffc2]">Made with</p>
                    <span className=" text-[#ffffffc2]"> {props.technologies}</span>
                    <hr className="border-0.5 border-[#ffffff45] w-full"></hr>
                </div>

                <div className="w-[70%] h-[4.5rem]  m-3 flex justify-center items-start relative">
                    <p className="w-full text-xs text-[#ffffff99] line-clamp-3 overflow-hidden text-ellipsis text-justify
                                hover:absolute hover:bg-[#000000d4] hover:text-white hover:p-2 hover:overflow-auto 
                                hover:line-clamp-none ">
                        {props.description || " "}
                    </p>

                </div>

                <div className="flex flex-1 justify-center items-center w-full p-2">
                    <a href={props.link} className="text-red-400  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-red-400 to-[#C9A74D] text-xl font-bold">Go to {props.title}</a>
                </div>
            </div>
        </div>
    )
}