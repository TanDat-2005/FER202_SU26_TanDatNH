import logo from './logo.svg';
import './App.css';

function App() {
  const name = "TanDat";
  let chao1 = (name) => `Xin chao ${name}`;
  //Khai bao 1 doi tuong user co thuoc tinh id, name va age, address
  let user = {
    id: 1,
    name: "TanDat",
    age: 20,
    address: "Ha Noi"
  }
  return (
    <>
      <button onClick={() => alert(chao1(name))}>Chao</button>

      <div className="Card">
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Address: {user.address}</p>
      </div>
    </>

  );
}

export default App;
