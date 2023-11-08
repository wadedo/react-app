import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //这个里面其实是声明了一个变量，一个函数，还有一个初始变量。
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    //"()"is necessary
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
