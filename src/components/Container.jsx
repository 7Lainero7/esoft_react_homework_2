import { useState, useEffect } from "react";
import Header from "./Header";
import Greeting from "./Greeting";
import Clock from "./Clock";

const names = ["Andrew", "Nikita", "Mark", "Mary", "Pam-pam"];

function Container() {
    const [name, setName] = useState("");

    useEffect(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        setName(randomName);

        const intervalId = setInterval(() => {
            const newName = names[Math.floor(Math.random() * names.length)];
            setName(newName);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
          <Header />
          <Greeting name={name} />
          <Clock />
        </div>
      );
}

export default Container;