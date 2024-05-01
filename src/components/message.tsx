"use client";

import { useState } from "react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import send from "./icons/send.svg";
import load from "./icons/load.svg";
const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Message() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!message) {
      return;
    }

    const res = await fetch(`${location.origin}/api`, {
      method: "POST",
      body: JSON.stringify({
        message,
      }),
    });

    const { error } = await res.json();

    if (error) {
      console.error(error);
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <form
      onSubmit={sendMessage}
      className="relative bg-stone-800 rounded overflow-hidden"
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Drop a message (don't worry its anonymous) ..."
        className={`w-full h-full p-4 ${dancing_script.className} text-lg bg-stone-800 text-stone-400
                  placeholder:text-base placeholder:font-sans placeholder:text-stone-600
                  resize-none focus:outline-none`}
      />
      {message && (
        <button
          type="submit"
          disabled={loading}
          className={`absolute right-3 bottom-3 px-2 py-1 text-sm rounded-md
                    ${
                      !loading ? "bg-stone-200" : "bg-stone-300"
                    } text-stone-800 hover:bg-stone-50 active:bg-stone-200
                      font-bold flex gap-1 items-center`}
        >
          {loading ? (
            <>
              <Image
                src={load}
                width={16}
                className="animate-spin"
                alt="Loading"
              />
              Sending
            </>
          ) : (
            <>
              <Image src={send} width={16} alt="Send" />
              Send
            </>
          )}
        </button>
      )}
    </form>
  );
}
