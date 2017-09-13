/**
 * Created by liaopeng on 2017/8/29.
 */
import React from 'react';
import {Layout, Spin, Card, InputNumber, Modal, Input, Alert, Button, Row, Col, Radio, Tooltip} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const confirm = Modal.confirm;
const RadioGroup = Radio.Group;
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            payment: 0,
            plate:"",
            showtip:false,
            showtip2:false,
            total:0,
            loading:false,
            mobile:"",
            showpay:false,
            goods: [
                {
                    id: 1,
                    num: 1,
                    price: 99,
                    title: "亨达年卡",
                    img: "./img/1.jpg",
                    content: "内含亨亨养车10次机洗服务，有效期1年，可在亨亨养车任意实体店铺消费"
                },
                {
                    id: 2,
                    num: 1,
                    price: 699,
                    title: "亨通年卡",
                    img: "./img/2.jpg",
                    content: "内含亨亨养车50次机洗服务和10次精洗服务，有效期1年，可在亨亨养车任意实体店铺消费"
                },
                {
                    id: 3,
                    num: 1,
                    price: 2499,
                    title: "亨运年卡",
                    img: "./img/3.jpg",
                    content: "内含亨亨养车10次机洗服务，有效期1年，可在亨亨养车任意实体店铺消费"
                },
                {
                    id: 4,
                    num: 1,
                    price: 2499,
                    title: "亨运年卡",
                    img: "./img/3.jpg",
                    content: "内含亨亨养车10次机洗服务，有效期1年，可在亨亨养车任意实体店铺消费"
                }
            ],
            goods_key: 0
        }

    }

    setModal2Visible(modal2Visible) {
        if(modal2Visible)
        {
            if(!this.state.plate)
            {
                this.setState({
                    showtip:true
                })
                setTimeout(()=>{
                    this.setState({
                        showtip:false
                    })
                },2000)
                return;
            }
            if(!this.state.mobile)
            {
                this.setState({
                    showtip2:true
                })
                setTimeout(()=>{
                    this.setState({
                        showtip2:false
                    })
                },2000)
                return;
            }


            this.setState({
                loading:true,
            })
            setTimeout(()=>{
                this.setState({
                    loading:false,
                    showpay:true,
                })
            },800)


        }

        this.setState({modalVisible: false});
    }

    changepayment(e) {
        this.setState({
            payment: e.target.value,
        });

    }

    Changenum(value, id) {
        var re = /^[0-9]+.?[0-9]*$/;
        if (!re.test(value)) {
            console.log(value)
            value = 1
        }
        this.state.goods[id].num = value;
        this.setState({
            goods: this.state.goods
        }, console.log(this.state.goods))

    }
    cannelpay()
    {
        this.setState({
            showpay:false,
        })

    }

    render() {
        return (
            <Layout style={{minHeight: "100vh"}}>
                <Header style={{backgroundColor: "#cc0033"}}>
                    <div style={{fontSize: "20px", color: "#ffffff"}}>亨亨养车 | <span style={{fontSize:"12px"}}>线上单品购买渠道，请在线下体验店工作人员的指导下进行购买</span></div>

                </Header>
                <Content style={{backgroundColor: "#ffffff"}}>
                    <Row>
                        <Col span="2"/>
                        <Col span="10">
                            <Card style={{width: "98%", margin: "2%"}}>
                                <div className="custom-image">
                                    <img alt="亨卡" width="100%" src={this.state.goods[0].img}/>
                                </div>
                                <div className="custom-card">
                                    <h3 style={{marginTop: "10px"}}>{this.state.goods[0].title}<span style={{
                                        paddingLeft: "15px",
                                        color: "#cc0033"
                                    }}>￥{this.state.goods[0].price.toFixed(2)}</span></h3>
                                    <p style={{height: "60px", marginTop: "10px"}}>{this.state.goods[0].content}</p>
                                    <p style={{textAlign: "right", marginTop: "20px"}}><Button
                                        type="primary" style={{textAlign: "right"}} onClick={() => {
                                        this.setState({goods_key: 0, modalVisible: true});
                                    }}>立即购买</Button></p>
                                </div>
                            </Card>
                        </Col>
                        <Col span="10">
                            <Card style={{width: "98%", margin: "2%"}}>
                                <div className="custom-image">
                                    <img alt="亨卡" width="100%" src={this.state.goods[1].img}/>
                                </div>
                                <div className="custom-card">
                                    <h3 style={{marginTop: "10px"}}>{this.state.goods[1].title}<span style={{
                                        paddingLeft: "15px",
                                        color: "#cc0033"
                                    }}>￥{this.state.goods[1].price.toFixed(2)}</span></h3>
                                    <p style={{height: "60px", marginTop: "10px"}}>{this.state.goods[1].content}</p>
                                    <p style={{textAlign: "right", marginTop: "20px"}}><Button
                                        type="primary" style={{textAlign: "right"}} onClick={() => {
                                        this.setState({goods_key: 1, modalVisible: true});
                                    }}>立即购买</Button></p>
                                </div>
                            </Card>
                        </Col>
                        <Col span="2"/>
                    </Row>
                    <Row>
                        <Col span="2"/>
                        <Col span="10">
                            <Card style={{width: "98%", margin: "2%"}}>
                                <div className="custom-image">
                                    <img alt="亨卡" width="100%" src={this.state.goods[2].img}/>
                                </div>
                                <div className="custom-card">
                                    <h3 style={{marginTop: "10px"}}>{this.state.goods[2].title}<span style={{
                                        paddingLeft: "15px",
                                        color: "#cc0033"
                                    }}>￥{this.state.goods[2].price.toFixed(2)}</span></h3>
                                    <p style={{height: "60px", marginTop: "10px"}}>{this.state.goods[1].content}</p>
                                    <p style={{textAlign: "right", marginTop: "20px"}}><Button
                                        type="primary" style={{textAlign: "right"}} onClick={() => {
                                        this.setState({goods_key: 2, modalVisible: true});
                                    }}>立即购买</Button></p>
                                </div>
                            </Card>
                        </Col>
                        <Col span="10">
                            {/*  <Card style={{width: "98%", margin: "2%"}}>
                                <div className="custom-image">
                                    <img alt="亨卡" width="100%" src={this.state.goods[3].img}/>
                                </div>
                                <div className="custom-card">
                                    <h3 style={{marginTop: "10px"}}>{this.state.goods[3].title}<span style={{
                                        paddingLeft: "15px",
                                        color: "#cc0033"
                                    }}>￥{this.state.goods[2].price.toFixed(2)}</span></h3>
                                    <p style={{height: "60px", marginTop: "10px"}}>{this.state.goods[3].content}</p>
                                    <p style={{textAlign: "right", marginTop: "20px"}}><Button
                                        type="primary" style={{textAlign: "right"}} onClick={() => {
                                        this.setState({goods_key:3, modalVisible: true});
                                    }}>立即购买</Button></p>
                                </div>
                            </Card>*/}
                        </Col>
                        <Col span="2"/>
                    </Row>


                </Content>
                <Footer style={{backgroundColor: "#cc0033"}}>
                    <div style={{color: "#ffffff"}}> 湘ICP备17004929号-1 精准电子商务有限公司</div>
                </Footer>
                <Modal
                    wrapClassName="vertical-center-modal"
                    visible={this.state.loading}
                    footer={null}
                    closable={false}
                    style={{textAlign:"center"}}
                >

                <Spin tip="加载中...">

                </Spin>
                </Modal>

                <Modal
                    title="确认购买"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    okText="确认购买"
                    cancelText='我再想想'
                    onOk={this.setModal2Visible.bind(this, true)}
                    onCancel={this.setModal2Visible.bind(this, false)}
                >
                    <div style={{height: "80px", width: "100%", paddingLeft: "20%"}}>
                        <img src={this.state.goods[this.state.goods_key].img} style={{height: "80px", float: "left"}}/>
                        <div style={{float: "left", height: "80px", lineHeight: "80px", marginLeft: "30px"}}>
                            <p>商品:{this.state.goods[this.state.goods_key].title}</p>
                        </div>
                    </div>
                    <div style={{clear: "both"}}/>
                    <Row style={{marginTop: "20px"}}>
                        <Col span="4">
                            <p style={{textAlign: "right", marginRight: "10px", height: "28px", lineHeight: "28px"}}>
                                您的车牌 </p>
                        </Col>
                        <Col span="20">
                            <Tooltip title="请输入车牌" visible={this.state.showtip}>
                            <Input onKeyUp={(e)=>{this.setState({plate:e.target.value,showtip:false})}} style={{width: "80%"}} placeholder="湘A888888" defaultValue={this.state.plate} placeholderTextColor="#ffffff"/>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "20px"}}>
                        <Col span="4">
                            <p style={{textAlign: "right", marginRight: "10px", height: "28px", lineHeight: "28px"}}>
                                您的手机 </p>
                        </Col>
                        <Col span="20">
                            <Tooltip title="请输入手机号码" visible={this.state.showtip2}>
                                <Input onKeyUp={(e)=>{this.setState({mobile:e.target.value,showtip2:false})}} style={{width: "80%"}} placeholder="18888888888" defaultValue={this.state.mobile} placeholderTextColor="#ffffff"/>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "20px"}}>
                        <Col span="4">
                            <p style={{textAlign: "right", marginRight: "10px", height: "28px", lineHeight: "28px"}}>
                                数量 </p>
                        </Col>
                        <Col span="20">
                            <InputNumber min={1} onChange={(value) => this.Changenum(value,this.state.goods_key)} max={10} value={this.state.goods[this.state.goods_key].num}/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "20px"}}>
                        <Col span="4">
                            <p style={{textAlign: "right", marginRight: "10px", height: "28px", lineHeight: "28px"}}>
                                支付方式 </p>
                        </Col>
                        <Col span="20">
                            <RadioGroup value={this.state.payment} onChange={(e) => {
                                this.changepayment(e)
                            }} style={{height: "28px", lineHeight: "28px"}}>
                                <Radio value={0}>
                                    微信支付
                                </Radio>
                                <Radio value={1}>
                                    支付宝
                                </Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "20px"}}>
                        <Col span="4">
                            <p style={{textAlign: "right", marginRight: "10px", height: "28px", lineHeight: "28px"}}>
                                总计 </p>
                        </Col>
                        <Col span="20">
                            <p style={{marginRight: "10px", color: "#cc0033", height: "28px", lineHeight: "28px"}}>
                                ￥{(this.state.goods[this.state.goods_key].num*this.state.goods[this.state.goods_key].price).toFixed(2)}元 </p>
                        </Col>
                    </Row>
                </Modal>
                <Modal
                    title={this.state.payment==0?"微信支付 | 收银台":"支付宝 | 收银台"}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showpay}
                    footer={false}
                    onCancel={this.cannelpay.bind(this)}
                >
                    <Row style={{height:"300px"}}>
                        <Col span={18}>
                            二维码区
                        </Col>
                        <Col span={6} style={{borderLeftWidth:1,borderLeftColor:"#cccccc",}}>
                            <p>订单信息</p>
                            <img src={this.state.goods[this.state.goods_key].img} style={{width:"80px"}}/>
                            <p>{this.state.goods[this.state.goods_key].title}</p>
                            <p style={{color:"#cc0033"}}>￥{(this.state.goods[this.state.goods_key].num*this.state.goods[this.state.goods_key].price).toFixed(2)}</p>
                            <p>
                                购买后相应车牌进去实体点将自动扣除服务所对应卡劵，不在需要额外支付
                            </p>
                        </Col>
                    </Row>

                </Modal>


            </Layout>


        );
    }
}