import React from "react";
import { useState } from "react";

interface Props {
  children: string; //pass some text as children
  maxChars?: number; //make it uptional and give it a default value.
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  //text is a function inside expandabletext function
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <div>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
