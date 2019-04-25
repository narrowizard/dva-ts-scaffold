import * as React from 'react';
import { connect } from 'dva';
import { Dispatch, bindActionCreators } from 'redux';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';

import { NS } from '@models/home';
import styles from './Index.less';
import { IState } from '@definitions/global';
import { RootAction } from '@definitions/types';
import actionCreators, { IActionsM } from '@models/actions/home';
import { ISearchReposParams } from '@services/github/api';

const actions = actionCreators(NS);

const mapStateToProps = (state: IState) => ({
    info: state[NS].info
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
    dispatch,
    actions: bindActionCreators<typeof actions, IActionsM>(actions, dispatch),
})

interface IIndexProps extends ReturnType<typeof mapStateToProps> {

}

interface IIndexProps extends ReturnType<typeof mapDispatchToProps> {

}

@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends React.Component<IIndexProps> {

    componentDidMount() {
        this.props.actions.searchGithub({
            q: 'tinyts',
            sort: 'star',
            order: 'desc'
        });
    }

    render() {
        return (
            <div className={styles.main}>
                {intl.get('index.greet')}
                <br />
                {this.props.info}
                <br />
                <Link to="/some">go</Link>
            </div>
        )
    }
}
