// import React, { useState } from "react";

// const Demo = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Username:", username);
//     console.log("Password:", password);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Username</label>&nbsp;
//         <input
//           type="text"
//           placeholder="Enter Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <label>Password</label>&nbsp;
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Demo;

import React, { useState } from "react";

const Demo = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username : ", username);
    console.log("Username : ", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Enter Username
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          Enter Password
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Demo;
