
import React, { useState, useEffect } from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UploadOutlined,
    DashboardOutlined,
    GiftOutlined,
    ShoppingCartOutlined,
    BankOutlined,
    ShopOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';



const { Header, Sider, Content } = Layout;
function getItem(children) {
    return children
}
const Sidebar = ({ children }) => {
   
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

   
    const [ownername, setOwnername] = useState('');
    useEffect(() => {
        const ownernameFromStorage = sessionStorage.getItem('ownername');
        if (ownernameFromStorage) {
          setOwnername(ownernameFromStorage);
        }
      }, []);
    return (

        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>

                <div className="demo-logo-vertical " />
                <h3 style={{ padding: "20px 10px", color: "white", fontStyle: "italic", fontSize: "15px" }}>
                    <ShoppingCartOutlined style={{ marginBottom: "10px", color: "orange", fontSize: "20px" }} />SHOPPER's</h3>


                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}

                    items={[
                        getItem({
                            key: '1',
                            icon: <DashboardOutlined />,
                            label: <Link href="/content/dashboard/dashboard">Dashboard</Link>,
                        }),
                        getItem(
                            {
                                key: '2',
                                icon: <GiftOutlined />,
                                label: <Link href="/content/product/tab">product</Link>,
                            }),
                        getItem(
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: <Link href="/content/productdesc">productDesc</Link>,
                            }),
                        getItem(
                            {
                                key: '4',
                                icon: <BankOutlined />,
                                label: <Link href="/content/retailerbank">Banking</Link>,
                            }),
                        getItem(
                            {
                                key: '5',
                                icon: <ShopOutlined />,
                                label: <Link href="/content/retailerregister">RetailerRegister</Link>,
                            })
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        // background: colorBgContainer,
                        backgroundColor: '#001529',
                        // display:"flex"

                    }}
                >
                    {/* <div className='d-flex'> */}
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color: 'white'
                        }}
                    />
                    {/* <p style={{float:"right",color:"yellow",margin:"0 70px",}}>welcome:shivani</p> */}
                    <div style={{ float: "right", margin: "0 70px", }}>
                        <Dropdown>
                           
                            <Dropdown.Toggle style={{ background: "none", border: "none" }} >
                                welcome : {ownername}
                            </Dropdown.Toggle>
                            

                            <Dropdown.Menu>
                                <Dropdown.Item >Profile</Dropdown.Item>
                                <Dropdown.Item >Logout</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {/* </div> */}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 600,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default Sidebar;