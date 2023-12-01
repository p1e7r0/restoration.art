import { styled } from "@mui/material";

const Root = styled("div")`
  width: 100vw;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Links = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  margin-right: 16px;
`;

const Logo = styled("div")`
  margin-left: 16px;
`;

const Space = styled("div")`
  flex: 1;
`;

const Header = () => {
  return (
    <Root>
      <Logo>Logo</Logo>
      <Space />
      <Links>
        <div>Home</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </Links>
    </Root>
  );
};

export default Header;
