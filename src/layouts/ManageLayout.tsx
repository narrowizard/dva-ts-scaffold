import * as React from 'react';
import { Layout, Menu, Icon, Modal, Input, message } from 'antd';
import { Link, Switch, Redirect } from 'react-router-dom';
import { IMenuModel } from '../model/layout';
import * as styles from './ManageLayout.less';

const { Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;

interface LayoutComponentProps {

}

interface LayoutComponentState {
    collapsed: boolean,
    isChangePassword: boolean
    menuData: [],
    oldpassword: string,
    newpassword: string,
    newpasswordConfirm: string,
}

export class LayoutComponent extends React.Component<LayoutComponentProps, LayoutComponentState> {

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