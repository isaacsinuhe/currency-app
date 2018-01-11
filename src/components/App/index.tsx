import * as React from 'react';
import NavBar from '../NavBar';
import Content from '../Content';
import Footer from '../Footer';
import './index.css';
import { MuiThemeProvider, getMuiTheme, lightBaseTheme } from 'material-ui/styles';
import { Card } from 'material-ui';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card>
            <NavBar />
            <Content />
            <Footer />
          </Card>
      </MuiThemeProvider>
    );
  }
}
