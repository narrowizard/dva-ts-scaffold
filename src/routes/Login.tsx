import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Empty } from '../model/global';
import { WrappedFormUtils } from 'antd/lib/form/Form';
const FormItem = Form.Item;

interface LoginFormFactoryProps {
    form: WrappedFormUtils,
    onSucc: () => void
}

class LoginFormFactory extends React.Component<LoginFormFactoryProps, Empty> {

    constructor(props: LoginFormFactoryProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e: React.FormEvent<any>) {
        var me = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.onSubmit} className="login-form" style={{ margin: "auto" }} >
                <FormItem>
                    {getFieldDecorator('account', {
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                </Button>
                </FormItem>
            </Form>
        );
    }
}

const LoginForm = Form.create()(LoginFormFactory);

export class LoginComponent extends React.Component<Empty, { redirect: boolean }> {

    constructor(props: Empty) {
        super(props);
        this.state = {
            redirect: false
        }
        this.onSucc = this.onSucc.bind(this);
    }

    onSucc() {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/layout" />
        }

        return (
            <div style={{ marginTop: 200 }}>
                <h1 style={{ textAlign: "center" }}>登录</h1>
                <LoginForm onSucc={this.onSucc} />
            </div>
        )
    }
}
