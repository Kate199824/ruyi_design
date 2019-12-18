import React, { Component } from "react";
import axios from "axios";
import { Modal, Input, message } from "antd";
import "./style.scss";

import mailIcon from "./mail.png";

export default class MailBox extends Component {
  state = {
    ModalText:
      "请在下方留下您的联系方式和想咨询的问题，我们的工作人员会在第一时间给您回复，谢谢！",
    visible: false,
    confirmLoading: false
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div className="mail-box">
        <div className="icon-container" onClick={this.showModal}>
          <img src={mailIcon} />
        </div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
          <span>联系方式</span>
          <Input ref="mailbox_input1" />
          <span>咨询问题</span>
          <Input ref="mailbox_input2" />
        </Modal>
      </div>
    );
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "正在发送您的问题...",
      confirmLoading: true
    });
    const text1 = this.refs["mailbox_input1"].state.value;
    const text2 = this.refs["mailbox_input2"].state.value;
    console.log(text1, text2);
    axios
      .request({
        url: "/api/sendEmail",
        method: "post",
        params: {
          name: text1,
          content: text2
        },
        data: {
          name: text1,
          content: text2
        }
      })
      .then(res => {
        this.setState({
          visible: false,
          confirmLoading: false
        });
        message.success("发送成功");
      })
      .catch(err => {
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false
          });
        }, 500);
        message.success("发送失败"); //not
      });
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  onSendMail = () => {
    axios.request({
      url: "/api/sendEmail",
      method: "post",
      params: {
        name: "kate",
        content: "hello, world"
      },
      data: {
        name: "kate",
        content: "hello, world"
      }
    });
  };
}
