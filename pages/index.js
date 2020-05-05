import fetch from "isomorphic-unfetch";
import React from "react";

export default () => {
  const [data, setData] = React.useState({});

  const postData = async () => {
    const res = await fetch("/api/user");
    const parsed = await res.json();
    setData(parsed);
  };
  return (
    <>
      <div>Hello World.</div>
      <div>
        <button onClick={() => postData()}>Post data</button>
        <p>Response:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
};
