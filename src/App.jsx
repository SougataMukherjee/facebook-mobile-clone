import "./index.css";
import { useState } from "react";
import Card from "./Card";
import { posts } from "./data";
export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  return (
    <div className="container">
      {user ? (
        <>
          <div className="navbar">
            <span className="logo">Facebook</span>
            <div className="icons">
              <div className="icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3239/3239952.png"
                  height="20"
                  alt=""
                  className="iconImg"
                />
                <div className="counter">3</div>
              </div>
              <div className="icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/953/953810.png"
                  height="20"
                  alt=""
                  className="iconImg"
                />
                <div className="counter">2</div>
              </div>
              <div className="icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2040/2040504.png"
                  height="20"
                  alt=""
                  className="iconImg"
                />
                <div className="counter">1</div>
              </div>
            </div>
          </div>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
          <span className="username">{user}</span>
        </>
      ) : (
        <>
          <div className="login">
            <input
              placeholder="user-name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => setUser(username)}>Login</button>
          </div>
        </>
      )}
    </div>
  );
}
