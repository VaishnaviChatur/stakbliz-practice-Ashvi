import React,{useState} from "react";
import "./style.css";

export default function App() {
 const [data, setData] = useState([
    { id: 1, name: 'ram' },
    { id: 2, name: 'sita' },
    { id: 3, name: 'hanuman' },
    { id: 4, name: 'lakshman' },
    { id: 5, name: 'bharat' },
    { id: 6, name: 'shatrughn' },
  
  ]);
   const [search, setSearch] = useState('');


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
      <ul>
        {data
          .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
          .map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>
    
    </div>
  );
}
