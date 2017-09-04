/**
 * Created by liaopeng on 2017/8/29.
 */
import React from 'react';
import ReactDOM from "react-dom"
import {Layout, Menu, Breadcrumb, Button, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
import  "./main.less"
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }


    render() {
        return (
            <Layout style={{minHeight: "100vh"}}>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">主菜单1</Menu.Item>
                        <Menu.Item key="2">主菜单2</Menu.Item>
                        <Menu.Item key="3">主菜单3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider collapsable
                           trigger={null}
                           collapsed={this.state.collapsed} width={200} style={{background: '#fff'}}>

                        <Menu defaultSelectedKeys={['1']} mode="inline" style={{height:"100%",border:"none"}}>

                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>系统设置</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>权限管理</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{flexDirection: "row"}}>
                        <div style={{height: "100%", width: "16px", justifyContent: "center",}}>

                                <Icon type={this.state.collapsed ? 'caret-right' : 'caret-left'}
                                      onClick={()=>{this.setState({collapsed:!this.state.collapsed})}} className="coll-img"/>

                        </div>
                        <Layout>
                            <Breadcrumb style={{margin: '12px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                                Content
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
ReactDOM.render(<Login/>, document.getElementById('root'));