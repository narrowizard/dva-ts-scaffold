import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import intl from 'react-intl-universal';

import { IEmpty } from '../model/global';
import styles from './Login.less';
import { connect } from 'dva';
import { Dispatch, bindActionCreators } from 'redux';
import { createLoginAction } from '../actions/user';
import { routerRedux } from 'dva/router';

const FormItem = Form.Item;

namespace LoginForm {

    export interface OwnProps {
        onSucc: () => void,
        form: WrappedFormUtils,
    }

    export interface DispatchProps {
        login?: (account: string, password: string) => Promise<any>;
        go?: (pathname: string) => void;
    }

    export type Props = OwnProps & DispatchProps;
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    dispatch,
    login: bindActionCreators(createLoginAction, dispatch),
    go: (pathname: string) => { dispatch(routerRedux.push(pathname)) }
})

@connect(undefined, mapDispatchToProps)
class LoginFormFactory extends React.Component<LoginForm.Props, IEmpty> {

    constructor(props: LoginForm.Props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e: React.FormEvent<any>) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (this.props.login) {
                this.props.login(values.account, values.password).then(data => {
                    if (this.props.go) {
                        this.props.go('/');
                    }
                });
            }
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.onSubmit} className={styles.loginForm} >
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
                    <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                        {intl.get('action.login')}
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const LoginForm = Form.create()(LoginFormFactory);

export default class LoginComponent extends React.Component<IEmpty, { redirect: boolean }> {

    constructor(props: IEmpty) {
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
