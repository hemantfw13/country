import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
export const Navbar = () => {
  const Main = styled.div`
    button {
      margin-left: 50px;
      width: 200px;
      height: 50px;
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 40px;
    }
  `;
  return (
    <Main>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"/add-city"}>Add City</Link>
      </button>
      <button>
        <Link to={"/add-country"}>Add Country</Link>
      </button>
    </Main>
  );
};
