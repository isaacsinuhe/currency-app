import * as React from 'react'
import './index.css';
import { Paper } from 'material-ui';

const Home = () => {
    const style: {[prop: string]: React.CSSProperties} = {
        root: { 
            height: '400px',
            // backgroundImage: `url(home-bg.gif)`
        }
    }
    return (
        <Paper className="Home" style={style.root}>
            <h1>Welcome to this awesome app</h1>
            <h3>Feel free to click on the upper left icon so you can test all of our awesome features</h3>
        </Paper>
    )
}

export default Home;