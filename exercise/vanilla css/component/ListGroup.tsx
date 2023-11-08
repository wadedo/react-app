import { useState } from "react";
import "./ListGroup.css";//attention!

interface Props {
  items: string[];
  heading: string;
  // onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: Props) {
  //这个里面其实是声明了一个变量，一个函数，还有一个初始变量。
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    //"()"is necessary
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
