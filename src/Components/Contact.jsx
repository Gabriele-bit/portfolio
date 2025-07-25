import Form from "./Form-";

export default function Contact() {
  const openPage = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="contact" className="min-h-full flex flex-col gap-4 bg-neutral-900 p-6">
      <div className="flex flex-col text-white items-center gap-3">
        <h1 className="w-full font-bold text-[5vh] text-center text-white">Contacts</h1>

        <div className="flex gap-6 items-center">
          <img
            src="/images/git.png"
            className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => openPage("https://github.com/Gabriele-bit?tab=repositories")}
            title="GitHub"
            alt="GitHub"
          />
          <img
            src="/images/linkedin.png"
            className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => openPage("https://www.linkedin.com/in/gabriele-luca-patan%C3%A8-8597a81b5/")} // ← cambia con il tuo link
            title="LinkedIn"
            alt="LinkedIn"
          />
          <a
            href="/cv/Curriculum.pdf" 
            className="text-white underline hover:text-amber-300 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        <p className="text-white text-xl text-center">Or send me a message!</p>
        <Form />
      </div>

      <div className="flex-1 flex justify-center items-end mt-8">
        <span className="text-[5vh] lg:text-[8.5vh] font-[jersey] text-center tracking-widest font-bold drop-shadow-[0_0_10px_rgba(255,0,128,0.6)] text-white">
          Ideas become interfaces, <span className="text-red-400 underline">fast.</span>
        </span>
      </div>
    </div>
  );
}
