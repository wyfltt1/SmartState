import {Input, Layout, Menu, Button} from 'antd'

import {AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined} from '@ant-design/icons'
const {Header, Content, Sider} = Layout
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [getItem('菜单一', 'sub1', <MailOutlined />, [getItem('子菜单1-1', '1'), getItem('子菜单1-2', '2')]), getItem('菜单二', 'sub2', <AppstoreOutlined />, [getItem('子菜单2-1', '1'), getItem('子菜单2-1', '2')])]
export default function App() {
  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        1111
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline' theme='dark' items={items} />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Input style={{width: 200}}></Input>
            <Button type='primary'>保存</Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
