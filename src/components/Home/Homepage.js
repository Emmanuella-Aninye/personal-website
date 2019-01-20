import React , {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import "./homepage.css";
import "./override.css";
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sectionsColor: [...originalColors],
          fullpages: [
            {
              text: 'Welcome to my website. My name is E and I am a developer',
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
    
        if (!fullpages.length) {
          return null;
        }
    
        const Menu = () => (
          <div
            className="menu"
            style={{
              position: 'fixed',
              top: 0,
              zIndex: 100,
              width: '100%'
            }}
          >
          <ul>
              <h3 onClick={console.log('SUP')}>
                  Home
              </h3>
          </ul>
          </div>
        );
    
        return (
          <div className="App">
            <Menu />
            <ReactFullpage
              debug /* Debug logging */
              scrollOverflow
              navigation
              onLeave={this.onLeave.bind(this)}
              sectionsColor={this.state.sectionsColor}
              pluginWrapper={pluginWrapper}
              render={comp => (
                <ReactFullpage.Wrapper>
                  {fullpages.map(({ text }) => (
                    <div key={text} className="section">
                      <h2>{text}</h2>
                    </div>
                  ))}
                </ReactFullpage.Wrapper>
              )}
            />
          </div>
        );
      }
    }


const pluginWrapper = () => {
    /**
     * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
     */
  };
  
  const originalColors = ['#001a33','#001a33','#001a33'];
  
    
export default Homepage;