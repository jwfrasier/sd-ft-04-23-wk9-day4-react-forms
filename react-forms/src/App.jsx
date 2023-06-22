import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ditto, setDitto] = useState({});
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    address: "",
  });

  // useEffect(() => {
  //   const fetchDitto = async () => {
  //     const getDitto = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  //     const jsonDitto = await getDitto.json();
  //     setDitto(jsonDitto);
  //   };
  //   fetchDitto();
  // }, []);

  // useEffect(() => {
  //   const fetchDitto = async () => {
  //     const getDitto = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  //     const jsonDitto = await getDitto.json();
  //     setDitto(jsonDitto);
  //   };
  //   fetchDitto();
  //   setCounter(counter + 1);
  // });

  useEffect(() => {
    const fetchDitto = async () => {
      const getDitto = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const jsonDitto = await getDitto.json();
      setDitto(jsonDitto);
    };
    console.log("ran useffect again");
    fetchDitto();
  }, [counter]);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter ++</button>
      <form action="">
        <label htmlFor="">
          <p>username</p>
        </label>
        <input
          type="text"
          name="username"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData?.username}
        />
        <label htmlFor="">
          <p>password</p>
        </label>
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData?.password}
        />
        <label htmlFor="">
          <p>email</p>
        </label>
        <input
          type="text"
          name="email"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData?.email}
        />
        <label htmlFor="">
          <p>address</p>
        </label>
        <input
          type="text"
          name="address"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData?.address}
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
