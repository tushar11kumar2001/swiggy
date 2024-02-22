//funtional component
import { useState } from "react";
import { useEffect } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("useeffect");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useeffect return");
    };
  }, []);
  return (
    <div className="userclass">
      <h1>cout : {count}</h1>
      <h1>cout1 : {count1}</h1>
      <h2>{name}</h2>
      <h3>Location : Delhi</h3>
      <h4>Contact : @tusharkumar</h4>
    </div>
  );
};

export default User;
