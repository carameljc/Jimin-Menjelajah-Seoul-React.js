import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const messages = [
  "Harap sabar, ini ujian kodok",
  "Katak sedang warming up...",
  "Ngoding katak dulu ya...",
  "Katak nyari sandal dulu...",
  "Masih loading... jangan disiram!",
];

export const useLoadingLogic = () => {
  const [message, setMessage] = useState(messages[0]);
  const navigate = useNavigate();

  useEffect(() => {
    let remaining = [...messages];
    function cycle() {
      if (remaining.length === 0) {
        navigate("/explore");
        return;
      }
      const i = Math.floor(Math.random() * remaining.length);
      const msg = remaining.splice(i, 1)[0];
      setMessage(msg);
      setTimeout(cycle, 3000);
    }
    cycle();
  }, [navigate]);

  return message;
};
