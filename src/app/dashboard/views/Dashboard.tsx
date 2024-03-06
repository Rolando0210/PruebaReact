import {
  Button,
  Layout,
  Menu,
  MenuProps,
} from "antd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import smalllogo from "../../../assets/icons/small-logo-250x251.png";

import { useState, useEffect } from "react";
import {
  AppUrl,
  SideBarMenuKey,
} from "../../../shared/constants";
import {
  changeKeyHelper,
} from "../../../shared/helpers/PresentationInfoHelper";
import { sidebarByUrl } from "../../../shared/helpers/DashboardHelper";
import { changeSiderKey } from "../store/DashboardThunks";
import { ClientMenu } from "./components/ClientSidebarMenu";
import { useAppDispatch, useAppSelector } from "../../../shared/store/Hooks";
import { useDispatch } from "react-redux";
import FormContacto from "./components/FormContacto";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Sider, Content } = Layout;
const Dashboard: React.FC<any> = (props) => {

  const dispatch = useAppDispatch();

  const [collapsed, setCollapsed] = useState(false);
  const urlLocation = useLocation().pathname;

  const navigate = useNavigate();

  const sideKey = useAppSelector((state: any) => state.dashboard.sideBarMenuKey);


  const [loadingLoginSelectGroup, setLoadingLoginSelectGroup] =
    useState<boolean>(false),
    [visibleSelectGroup, setVisibleSelectGroup] = useState<boolean>(false);

  useEffect(() => {
    changeKeyHelper(sidebarByUrl(urlLocation), sideKey, changeKeyMethod);
  }, [urlLocation]);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const changeKeyMethod = (key: string) => {
    dispatch(changeSiderKey(key));
  };


  const DashboarMenu = () => {
    const itemsDashboardMenu: MenuItem[] = [];
    itemsDashboardMenu.push(
      ...ClientMenu(),
    );
    return itemsDashboardMenu;
  };

  return (
    <Layout style={{width:"100%"}}>
      <Sider
        style={{
          overflow: "auto",
          minHeight: "100vh",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[sideKey]}
          items={DashboarMenu()}
        />
      </Sider>
      <Layout>
      <Header style={{
            padding: 0,
            alignItems: "center",
            justifyContent: "space-between",
            width:"100%"
          }}>
      <Button
            type="text"
            style={{ color: "#ffffff" }}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
      <Content
          style={{
            width:"100%",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children != null ? props.children : <FormContacto />}
        </Content>
      </Layout>
      <Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
