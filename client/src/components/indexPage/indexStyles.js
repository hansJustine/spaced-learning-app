import { makeStyles } from '@material-ui/core/styles'

const bgUrl = 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'

export default makeStyles((theme) => ({
    index: {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgUrl}) center no-repeat`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headers: {
        color: '#fafafa',
        textAlign: 'center',
        marginRight: '15%',
        '& header': {
            letterSpacing: '8px',
        }
    }

}));