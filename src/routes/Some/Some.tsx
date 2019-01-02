import * as React from 'react';
import { connect } from 'dva';
import { Dispatch } from 'redux';

import styles from './Some.less';
import { IState } from '@definitions/global';
import { RootAction } from '@definitions/types';
import { Button } from 'antd';

class Some extends React.Component {
    render() {
        return (
            <div className={styles.title}>
                <Button type="primary">Some Button</Button>
            </div>
        )
    }
}


const mapStateToProps = (state: IState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
    dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Some);