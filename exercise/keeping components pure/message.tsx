//to make component pure, count and count++ should be all in one render phase.
const Message = () => {
  let count = 0;
  count++;
  return <div>message {count}</div>;
};

export default Message;
