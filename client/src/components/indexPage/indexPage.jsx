import React from 'react';
import { Typography } from '@material-ui/core'
import useStyles from './indexStyles.js';

function IndexPage() {
    const classes = useStyles();
    return (
        <div className={`${classes.index}`}>
            <div className={`${classes.headers}`}>
                <Typography variant="h2" component="header">SpacedLearning</Typography>
                <Typography variant="h6" component="header">Forget more, know more</Typography>
            </div>
        </div>
    )
}

export default IndexPage
