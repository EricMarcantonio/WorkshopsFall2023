import { useState } from "react";
import { IUser, getAllUsers } from "./backendApi";

function App() {
  return (
    <div>
      <Title text="This is my title" />
      <Counter />
      <Users />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {count}
    </div>
  );
};

interface ITitleProps {
  text: string;
}

const Title = (props: ITitleProps) => {
  return <h1>{props.text}</h1>;
};

const Users = () => {
  const [users, setUsers] = useState<IUser[]>();

  const handleOnClick = () => {
    getAllUsers().then((data) => {
      setUsers(data.data);
    });
  };

  return (
    <div>
      <button onClick={handleOnClick}>Get All Users</button>
      <div>
        {users?.map((u, i) => {
          return <User id={u.id} name={u.name} key={i} />;
        })}
      </div>
    </div>
  );
};

const User = (props: IUser) => {
  return (
    <h4>
      ID: {props.id} NAME: {props.name}
    </h4>
  );
};


export default App;
