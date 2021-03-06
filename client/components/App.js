import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import Header from './common/Header'

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <Header />
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    )
  }
}

export default App;