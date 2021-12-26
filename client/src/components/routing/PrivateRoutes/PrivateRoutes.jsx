import { useEffect, useMemo } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import "antd/dist/antd.css";
import './IndexLearning.css';
import { useJwt, decodeToken, isExpired } from "react-jwt";
import { useStoreContext, useDispatchContext } from '../../../GlobalState';
import { userActions } from '../../../reducers/constantActionTypes';

import { Layout, Menu, Avatar, Image, Button } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;



function PrivateRoutes() {
    const { dispatchUser, dispatchLearning } = useDispatchContext();
    const { user, learnings } = useStoreContext();

    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        const decodedToken = authToken && decodeToken(authToken);
        const expired = authToken && isExpired(authToken);
        if (!decodedToken) {
            console.log('hello');
            localStorage.removeItem('authToken');
            return navigate('/login');
        } else if (expired) {
            console.log('expired');
            localStorage.removeItem('authToken');
            return navigate('/login')
        }
        const { id, name, email } = decodedToken;
        dispatchUser({ type: userActions.ADD_USER, payload: { id, name, email } });
        console.log('disptched: ', expired);
        console.log(decodedToken)
    }, []);



    return (
        <PrivateRoutesLayout />
    )
}

function PrivateRoutesLayout() {

    const { user } = useStoreContext();
    const { dispatchUser } = useDispatchContext();
    const navigate = useNavigate();

    function handleLogout(e) {
        dispatchUser({ type: userActions.LOGOUT });
        navigate('/login')
    }
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                theme="light"
                onBreakpoint={broken => {
                }}
                onCollapse={(collapsed, type) => {
                }}
            >
                <div className="profile">
                    <Avatar
                        className="avatar"
                        size={{ xs: 24, sm: 32, md: 40, lg: 45, xl: 45, xxl: 45 }}
                        src={<Image src="https://res.cloudinary.com/djzmhyqre/image/upload/v1640342661/avatarboy_pnnbhi.png" />}
                    />
                    <div>
                        <div className="greeting">Good Day 👋</div>
                        <div className="user-name">{user.name}</div>
                    </div>
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        My Learnings
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        nav 4
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
                    SpacedLearning
                    <Button type="primary" size='small' onClick={handleLogout}> Logout </Button>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: '100vh' }}>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default PrivateRoutes
