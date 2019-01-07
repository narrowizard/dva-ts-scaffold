import * as React from 'react';
import { connect } from 'dva';
import { Dispatch, bindActionCreators } from 'redux';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';

import { NS } from '@models/home';
import styles from './Index.less';
import { IState } from '@definitions/global';
import { RootAction } from '@definitions/types';
import actionCreators from '@models/actions/home';
import { ISearchReposParams } from '@services/github/api';

interface IIndexProps {
    info: number;
    getBooksList: () => Promise<void>;
    searchGithub: (params: ISearchReposParams) => Promise<void>;
}

class Index extends React.Component<IIndexProps> {

    componentDidMount() {
        this.props.searchGithub({
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


const mapStateToProps = (state: IState) => ({
    info: state[NS].info
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
    dispatch,
    getBooksList: bindActionCreators(actionCreators(NS).getBooksListAction, dispatch),
    searchGithub: bindActionCreators(actionCreators(NS).searchGithub, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);