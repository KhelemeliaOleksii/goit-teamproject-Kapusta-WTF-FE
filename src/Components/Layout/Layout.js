import { Outlet } from "react-router-dom";
import Container from "../Containter";
import AppBar from "../AppBar";
import NotifyContainer from "../NotifyContainer";

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Outlet />
      <NotifyContainer />
    </Container>
  );
}
