import { Menu } from 'antd';
import Link from 'next/link';

const items = [
  { label: 'item 1', key: '/' },
  { label: 'item 2', key: '/about' },
];

const RightMenu = ({ mode }) => {
  return (
    <Menu mode={mode} makeClosable={true} style={{ width: 300 }}>
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/about">
        <Link href="/about">
          <a>About</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
