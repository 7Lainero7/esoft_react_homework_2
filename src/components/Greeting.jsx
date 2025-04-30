import { useEffect, useState } from 'react';

function Greeting({ name }) {
  const [prevName, setPrevName] = useState(null);

  useEffect(() => {
    if (prevName !== null && prevName !== name) {
      // Имя изменилось
    }
    setPrevName(name);
  }, [name, prevName]);

  return (
    <div>
      {prevName !== null && prevName !== name ? (
        <p>Привет, у тебя поменялось имя, теперь ты {name}!</p>
      ) : (
        <p>Привет, {name}!</p>
      )}
    </div>
  );
}

export default Greeting;