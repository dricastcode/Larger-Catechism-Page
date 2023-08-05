import { useState, useEffect } from "react";
import axios from "axios";
import "./scss/main.scss";
import Catechism from "./components/Catechism";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/new");
      setData(res.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Larger Catechism</h1>
      {data.length > 0
        ? data.map((item) => {
            return <Catechism key={item.id} data={item} />;
          })
        : null}
    </div>
  );
}

export default App;
