import * as React from 'react';
import { Layout, Menu, Icon, Modal, Input, message } from 'antd';
import { Link, Switch, Redirect } from 'react-router-dom';
import { IMenuModel } from '../model/layout';
import * as styles from './ManageLayout.less';
import { Dispatch, bindActionCreators } from 'redux';
import { createGetModulesAction } from '../actions/module';
import { connect } from 'dva';

const { Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;

interface LayoutComponentProps {
    getModules: () => Promise<any>
}

interface LayoutComponentState {
    collapsed: boolean,
    isChangePassword: boolean
    menuData: [],
    oldpassword: string,
    newpassword: string,
    newpasswordConfirm: string,
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    dispatch,
    getModules: bindActionCreators(createGetModulesAction, dispatch),
})

@connect(undefined, mapDispatchToProps)
export default class LayoutComponent extends React.Component<LayoutComponentProps, LayoutComponentState> {

    constructor(props: LayoutComponentProps) {
        super(props);
        this.state = {
            collapsed: false,
            menuData: [],
            isChangePassword: false,
            oldpassword: '',
            newpassword: '',
            newpasswordConfirm: '',
        };

        this.onLogout = this.onLogout.bind(this);
        this.onShowPasswordDialog = this.onShowPasswordDialog.bind(this);
        this.onHidePasswordDialog = this.onHidePasswordDialog.bind(this);
        this.onPasswordCommit = this.onPasswordCommit.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
    }

    componentDidMount() {
        debugger;
        this.props.getModules();
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    renderMenu(data: IMenuModel[]) {
        return <div></div>
    }

    onLogout() {

    }

    onShowPasswordDialog() {
        this.setState({
            isChangePassword: true
        })
    }

    onHidePasswordDialog() {
        this.setState({
            isChangePassword: false
        })
    }

    onFormChange(event: React.ChangeEvent<HTMLInputElement>) {

    }

    onPasswordCommit() {

    }

    render() {
        return (
            <div>layout</div>
        )
    }

}