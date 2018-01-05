import * as React from 'react';
import NavBar from '../NavBar';
import Content from '../Content';
import Footer from '../Footer';
import './index.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}
