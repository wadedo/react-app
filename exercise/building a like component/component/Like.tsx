import React from "react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  // 两个函数放在一个函数变量里
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return (
      <div>
        <AiFillHeart color="red" size="30" onClick={toggle}></AiFillHeart>
      </div>
    );
  else return <AiOutlineHeart size="30" onClick={toggle}></AiOutlineHeart>;
};

export default Like;
