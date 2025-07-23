import Button from "./Button"
export default function Alternative() {
    return (
        <div className="flex-1 flex flex-col justify-center text-white min-h-full gap-10">
            <div className="flex flex-col flex-1/3 w-fit self-center items-center justify-end leading-[5vh]">
                <span className=" font-[jersey] text-[3vh] self-start">Hi there!</span>
                <span className="text-[#C9A74D] font-[bungee] text-[6vh] text-center
                lg:text-[8vh]">Gabriele<span className=" text-[#F5F5F5] font-[jersey] text-[5vh]"> here</span> </span>
                <span className="text-[4.5vh] lg:text-[5.5vh] font-[jersey] text-center">I build stuff for the <span className="font-mono font-bold"> web</span>.</span>
            </div>

            <div className="flex flex-1/3 items-start justify-center ">
                <Button></Button>
            </div>

        </div>
    )
}