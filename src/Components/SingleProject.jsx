import { useEffect, useState } from "react";

export default function SingleProject(props) {
  const [screen, setScreen] = useState(props.screenDesktop);
  const [num, setNum] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);  // stato per espansione testo su mobile
  const [fullScreen, setFullScreen] = useState(false);
  const imageNumber = {
    num: num,
    img: screen,
  };

  const changeScreen = () => {
    if (imageNumber.num === 1) {
      setScreen(props.screenMobile);
      setNum(2);
    } else {
      setScreen(props.screenDesktop);
      setNum(1);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setExpanded(false); // chiudo testo espanso se cambio dimensione schermo
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleExpanded = () => {
      setExpanded((prev) => !prev);
  };

  return (
    <>
      {/*Contenitore single project */}
      <div className="text-[2vh] flex lg:flex-1 lg:min-w-[50%] min-w-full mb-5 p-3 bg-[#333333a3] flex-col justify-center items-center text-white gap-1">
        {/*Contenitore titolo, sottotitolo e numeri immagine */}
        <div className="flex w-[100%] flex-col justify-center items-center leading-[2vh] ">
          <div className="flex justify-end relative w-[100%]">
            <span className="absolute font-bold font-mono  left-1/2 -translate-x-1/2">{props.title}</span>
            <span className="text-[#ffffff8c] mr-2">{imageNumber.num}/{2}</span>
          </div>
          <span className="text-[#ffffffc2]">{props.subtitle}</span>
        </div>
        {/*Contenitore immagine e pulsanti per cambiarla */}
        <div className=" w-[100%] h-[30vh] flex flex-row justify-center items-center relative">
          <div className="relative w-[auto]  h-full flex justify-center items-center">
            {!fullScreen ?
              <>
                <img
                  onClick={() => setFullScreen(true)}
                  src={imageNumber.img}
                  draggable="false"
                  className="block w-auto max-w-full h-full hover:opacity-30 cursor-zoom-in"
                /></> : <>
                <div
                  className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                  onClick={() => setFullScreen(false)} >
                  <img
                    src={imageNumber.img}
                    className="max-w-[90vw] max-h-[90vh] object-contain cursor-zoom-out"
                    draggable="false"
                  />
                </div>
              </>
            }
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className={"lg:size-15 absolute lg:block left-2 size-10 hover:text-red-400 bg-[#0000005f] lg:bg-transparent pl-2 pr-2 cursor-pointer "} onClick={() => changeScreen()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="lg:size-15 absolute lg:block right-2 size-10 hover:text-red-400 bg-[#0000005f] lg:bg-transparent pl-2 pr-2 cursor-pointer " onClick={() => changeScreen()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

        {/*Contenitore  tecnologie, descrizione e link */}
        <div className="flex w-full flex-col justify-center items-center ">
          <div className="flex flex-1 flex-col w-full items-center h-full justify-center ">
            <p className="text-[#ffffffc2]">Made with</p>
            <span className=" text-[#ffffffc2]"> {props.technologies}</span>
            <hr className="border-0.5 border-[#ffffff45] w-full"></hr>
          </div>

          <div className="w-[50%] h-[4.5rem] m-3 flex justify-center items-start relative ">
            <p
              onClick={toggleExpanded}
              className={
                "w-full text-xs text-[#ffffff99] text-justify cursor-pointer hover:absolute hover:bottom-0 hover:bg-[#000000d4] hover:text-white hover:p-2 hover:overflow-auto hover:line-clamp-none " +
                (
                  expanded
                    ? "whitespace-normal overflow-visible line-clamp-none p-2 bg-[#000000d4] text-white absolute bottom-0"
                    : "line-clamp-3 overflow-hidden text-ellipsis")
              }
              style={{ transition: "all 0.3s ease" }}
              title={isMobile ? props.description : undefined}>
              {props.description || " "}
            </p>
          </div>
          <div className="flex flex-1 justify-center items-center w-full p-2">
            <a href={props.link} className="text-red-400  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-red-400 to-[#C9A74D] font-bold">Go to {props.title}</a>
          </div>
        </div>
      </div>
    </>
  )
}