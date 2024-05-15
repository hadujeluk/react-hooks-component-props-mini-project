import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}
export default Header;