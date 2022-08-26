import { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { useRouter } from 'next/router';
import {
  StyledHeader,
  LogoContainer,
  StyledLink,
  StyledMenu,
  MainMenu,
  ButtonContainer,
  StyledDrawer,
} from './MainNavbarElements';
import { MenuOutlined } from '@ant-design/icons';

const MainNavbar = () => {
  const [visible, setVisible] = useState(false);

  const router = useRouter;

  useEffect(() => {
    setVisible(false);
  }, [router.asPath]);

  const showDrawer = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <StyledHeader>
        <LogoContainer>
          <StyledLink href="/">
            <a>AllNotRecipes</a>
          </StyledLink>
        </LogoContainer>
        <StyledMenu>
          <div>
            <MainMenu mode={'horizontal'} />
          </div>
          <ButtonContainer type="primary" size="large" onClick={showDrawer}>
            <MenuOutlined />
          </ButtonContainer>

          <StyledDrawer
            title="Recipe Page"
            placement="right"
            closable={true}
            onClose={showDrawer}
            visible={visible}
          >
            <MainMenu mode={'inline'} />
          </StyledDrawer>
        </StyledMenu>
      </StyledHeader>
    </>
  );
};

export default MainNavbar;
