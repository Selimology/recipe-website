import styled from 'styled-components';
import { Layout, Button, Drawer } from 'antd';
import Link from 'next/link';
import RightMenu from './Menu';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  ${({ theme }) => `
  padding: 0 ${theme['padding-large']};
  background-color: ${theme['header-color']};
  border-bottom-color:${theme['header-border-color']};
  border-bottom-right:1px;
  border-bottom-style:solid;
  display:flex;
  align-items:center;
  justify-content:space-around;


`}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => `
    background-color: ${theme['header-color']};
    display:flex;
    align-items:center;

    a{
      color:black;
      font-weight:bold;
      text-decoration:none;
      inline-block;
      font-size: ${theme['font-size-large']}

    }
    `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => `

`}
`;

export const ButtonContainer = styled(Button)`
  ${({ theme }) => `
  float:right;
  height:32px;
  padding: ${theme['padding-large']};
  margin-top:${theme['margin-small']};
  display:none;
  background:none;
  margin-right:10px;
  


  @media(max-width:767px){
    display:flex;
    justify-content:center;
    align-items:center;
    background: #1890ff;
  }

`}
`;

export const StyledMenu = styled.div`
  ${({ theme }) => `

  display:flex;
  align-items:center;

  @media (max-width: 767px){
    display:block;
    margin-right:${theme['margin-small']};
    
      }

  div{
    @media(max-width:767px){
    display:none;
    }

    ul{
      display:flex;
      justify-content:center;
    }


}
  }

`}
`;

export const MainMenu = styled(RightMenu)`
  ${({ theme }) => `
`}
`;

export const StyledDrawer = styled(Drawer)`
  ${({ theme }) => `

@media(max-width:767px){
.ant-drawer-content-wrapper{
  width:100% !important;
}
.ant-drawer-title{
  font-weight:bold;
  text-decoration:none;
  text-transform: uppercase;


}
}
`}
`;
