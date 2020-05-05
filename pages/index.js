import fetch from "isomorphic-unfetch";
import React from "react";

export default () => {
  const [data, setData] = React.useState({});
  const [user, setUser] = React.useState("");

  const postData = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const parsed = await res.json();
    setData(parsed);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div styles={{ paddingBottom: "5px" }}>
          <h2>Insert a JSON user object</h2>
          <ul>
            <li>Keys and values must be in quotes</li>
            <li>Enter a JSON user object (it must contain an email)</li>
          </ul>
        </div>
        <textarea
          type="textarea"
          rows="10"
          cols="80"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "14px",
          }}
        >
          <button onClick={() => postData()}>Post data</button>
        </div>
        <p>Response:</p>
        <div
          style={{
            backgroundColor: "grey",
            borderRadius: "4px",
            minWidth: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </>
  );
};
