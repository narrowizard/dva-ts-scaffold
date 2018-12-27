import * as React from 'react';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';

import { NS } from '@models/home';

import styles from './Index.less';
import { IState } from '@definitions/global';
import { RootAction } from '@definitions/types';

interface IIndexProps {
    info: number
}

class Index extends React.Component<IIndexProps> {
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);