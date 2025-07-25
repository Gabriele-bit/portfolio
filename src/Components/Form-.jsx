import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Form() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_svcyprk",   // ← sostituisci
                "template_ywpqxxe",  // ← sostituisci
                form.current,
                "K8gw2P9TRCc9QrHwB"       // ← sostituisci
            )
            .then(
                (result) => {
                    alert("Messaggio inviato!");
                    console.log(result.text);
                },
                (error) => {
                    alert("Errore nell'invio del messaggio");
                    console.log(error.text);
                }
            );
    };
    return (
        <form ref={form} className="flex flex-col bg-[#333333a3] p-5 gap-2.5 w-[300px] text-[white] border-1 border-[#ffffff64]  rounded-xl"  onSubmit={sendEmail}>
            <input type="text" className="border-1 border-white p-3 rounded-xl" name="user_name" placeholder="Nome" required />
            <input type="email" className="border-1 border-white p-3 rounded-xl" name="user_email" placeholder="Email" required />
            <textarea name="message"  className=" h-[100px] scrollable resize-none border-1 border-white p-3 rounded-xl" placeholder="Messaggio" required />
            <button type="submit" className="cursor-pointer text-xl bg-red-400 w-fit self-center pt-1 pb-1 pl-2 pr-2 hover:bg-red-800">Invia</button>

        </form>)
}