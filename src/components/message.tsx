"use client";

import { Loader, Send } from "lucide-react";
import { useState } from "react";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Message() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
      setError(error);
    }

    setLoading(false);
    setMessage("")
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
              <Loader size={16} className="animate-spin" />
              Sending
            </>
          ) : (
            <>
              <Send size={16} />
              Send
            </>
          )}
        </button>
      )}
    </form>
  );
}
