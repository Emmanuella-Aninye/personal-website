import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  /**
   * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
   */
};

const originalColors = ['#282c34', '#ff5f45', '#0798ec'];

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: ['#4BBFC3'],
      fullpages: [
        {
        }
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }




  render() {
    const { fullpages } = this.state;
    return (
      <div className="App">
        <ReactFullpage
          debug /* Debug logging */
          scrollOverflow
          navigation
          sectionsColor={this.state.sectionsColor}
          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }) => (
                <div key={text} className="section">
                <h1>
                  Welcome to my Application
                </h1>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}     
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('react-root');


export default Homepage;
