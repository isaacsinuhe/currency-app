import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { AppBar, Drawer, MenuItem, Paper } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';

export default class NavBar extends React.Component<NavBar.props, NavBar.state> {
    style = {
        appBarStyle: { backgroundColor: 'rgb(255, 64, 129)' }
    }
    state: NavBar.state = {
        open: false
    }

    handleToggle = () => this.setState({ open: !this.state.open })
    handleClose = () => this.setState({ open: false })

    render () {
        return (
            <div style={{height: '100%'}} className="NavBar">
                <AppBar
                    title="My Fabulous Currency App"
                    style={this.style.appBarStyle}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                <Paper>
                    <AppBar
                        title="Options"
                        style={this.style.appBarStyle}
                        onLeftIconButtonClick={this.handleToggle}
                    />
                        <Link onClick={this.handleClose} to="/">
                            <MenuItem 
                                primaryText="Home" 
                                rightIcon={
                                    <FontIcon 
                                        className="material-icons"
                                        style={{ color: 'white' }}
                                    >
                                        home
                                    </FontIcon>
                                } 
                            />
                        </Link>
                        <Link onClick={this.handleClose} to="/transactions">
                            <MenuItem 
                                primaryText="Transactions" 
                                rightIcon={
                                    <FontIcon 
                                        style={{color: 'white'}} 
                                        className="material-icons"
                                    >
                                        compare_arrows
                                    </FontIcon>
                                } 
                            />
                        </Link>
                        <Link onClick={this.handleClose} to="/currency-converter" >
                            <MenuItem 
                                primaryText="Converter" 
                                rightIcon={
                                    <FontIcon
                                        style={{ color: 'white' }}
                                        className="material-icons"
                                    >
                                            monetization_on
                                    </FontIcon>
                                } 
                            />
                        </Link>
                        <MenuItem
                            disabled={true}
                            primaryText="Settings"
                            rightIcon={<FontIcon className="material-icons">settings</FontIcon>}
                        />
                    </Paper>
                </Drawer>
            </div>
            // <div className="NavBar">
            //     <ul>
            //         <img src="logo.png" alt="transactions-logo"/>
            //         <Link to="/transactions">Transactions</Link>
            //         <Link to="/currency-converter" >Currency Converter</Link>
            //     </ul>
            // </div>
        )
    }
}
    