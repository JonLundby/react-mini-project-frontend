import { useState, useEffect } from "react";
import Table from "./Table";

export default function Names() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("http://localhost:3333/names");
        const data = await res.json();

        console.log(data);
        setData(data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return <Table data={data} />;
}
