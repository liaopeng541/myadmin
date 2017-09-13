/**
 * Created by liaopeng on 2017/8/29.
 */
import React from 'react';
import ReactDOM from "react-dom"
import {Layout, Menu, Breadcrumb,Tabs,Tooltip, Dropdown, Button, Row, Col, Avatar, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
import Index from "./pages/index"
import  "./main.less"
const menu = (
    <Menu>
        <Menu.Item>
            修改密码
        </Menu.Item>
        <Menu.Item>
            退出
        </Menu.Item>

    </Menu>
);
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            activeKey: '1',
            panes:[
                { title: '首页', content: 'Content of Tab 1', key: '1', closable: false }
            ]
        };
    }
    onChange(activeKey){
        this.setState({ activeKey });
    }
    onEdit (targetKey, action){
        this[action](targetKey);
    }
    add(item)
    {
        var key=item.key
        this.state.panes.map((item,i)=>{
            if(item.key==key)
            {
                this.setState({
                    activeKey:key
                })
                return;
            }
        })
        this.state.panes.push({ title: key, content: <Index/>, key: key })
        this.setState({panes:this.state.panes,activeKey:key},()=>{console.log(this.state.panes)});
    }

    remove (targetKey) {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    closeall()
    {
        var temppanel=[];
        temppanel.push(this.state.panes[0])
        this.setState({
            activeKey:"1",
            panes: temppanel
        })
    }

    render() {
        return (
            <Layout style={{minHeight: "100vh"}}>
                <Row style={{backgroundColor: "#0d68ab"}}>

                    <Col span="20">
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px', backgroundColor: "#0d68ab"}}
                        >
                            <Menu.Item key="0" disabled style={{ cursor: "pointer"}}>
                                <span style={{fontSize: "20px", color:"#ffffff"}}>xxoo管理系统</span>
                            </Menu.Item>
                            <Menu.Item key="1" >主菜单1111111111111111</Menu.Item>
                            <Menu.Item key="2">主菜单2</Menu.Item>
                            <Menu.Item key="3">主菜单3</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span="4">
                        <Dropdown overlay={menu}>
                            <div className="headerright">
                                <Icon type="down"
                                      style={{fontSize: "16px", float: "right", margin: "8px", color: "#ffffff"}}/>
                                <Avatar style={{float: "right"}}
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>

                                <span style={{
                                    float: "right",
                                    height: "32px",
                                    lineHeight: "32px",
                                    marginRight: "8px",
                                    color: "#ffffff"
                                }}>
                                廖鹏
                            </span>
                            </div>
                        </Dropdown>
                    </Col>


                </Row>
                <Layout>
                    <Sider collapsable
                           trigger={null}
                           collapsed={this.state.collapsed} width={200} style={{background: '#fff'}}>

                        <Menu onSelect={this.add.bind(this)} defaultSelectedKeys={['1']} mode="inline" style={{height: "100%", border: "none"}}>

                            <Menu.Item key="10" disabled style={{backgroundColor: "#108ee9", cursor: "auto"}}>

                                <Icon type="windows" style={{fontSize: "16px", color: "#ffffff"}}/>
                                <span style={{color: "#ffffff", fontSize: "16px"}}>管理菜单</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user"/><span>系统设置</span></span>}
                            >
                                <Menu.Item key="999" ><span><Icon type="user"/><span>Tom111</span></span></Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team"/><span>权限管理</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file"/>
                                <span>File</span>
                            </Menu.Item>
                            <Menu.Item key="888">
                                <Icon type="pie-chart"/>
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="777">
                                <Icon type="desktop"/>
                                <span>Option 2</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{flexDirection: "row"}}>
                        <div style={{height: "100%", width: "16px", justifyContent: "center",}}>

                            <Icon type={this.state.collapsed ? 'caret-right' : 'caret-left'}
                                  onClick={() => {
                                      this.setState({collapsed: !this.state.collapsed})
                                  }} className="coll-img"/>

                        </div>
                        <Layout>
                            <Content style={{background: '#fff',  minHeight: 280,marginTop:"5px"}}>
                                <Row>
                                    <Col span={22}>
                                <Tabs
                                    onChange={this.onChange.bind(this)}
                                    activeKey={this.state.activeKey}
                                    type="editable-card"
                                    onEdit={this.onEdit.bind(this)}
                                    hideAdd={true}
                                    className="card-container"
                                >
                                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                        {pane.content}
                                    </TabPane>)}
                                </Tabs>
                                    </Col>
                                    <Col span={2} style={{backgroundColor:"#ececec",height:"32px",textAlign:"right",
                                        lineHeight:"32px", paddingRight:"5px"
                                    }}><Tooltip title="全部关闭" placement="left">
                                        <Button shape="circle" icon="close" onClick={this.closeall.bind(this)} size="small"  />
                                    </Tooltip>
                                    </Col>
                                </Row>
                            </Content>

                        </Layout>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
ReactDOM.render(<Login/>, document.getElementById('root'));