import styled from "styled-components";
import Header from "./Header";
import Sider from "./Sider";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <Sider />
      <Container>
        <Main>
          <Header />

          <Outlet />
        </Main>
      </Container>
    </div>
  );
};

export default AdminLayout;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
`;
