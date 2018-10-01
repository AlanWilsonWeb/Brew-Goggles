import React, { Component } from 'react';
import Landing from './Landing';

class Route extends Component {
    constructor(props){
        super(props);
        this.state = {
          page: this.renderSwitch(window.location.hash)
        };
        this.renderSwitch = this.renderSwitch.bind(this);
        this.routeSwitch = this.routeSwitch.bind(this);
      }
      
      componentDidMount() {
          window.addEventListener("hashchange", this.routeSwitch);
          this.setState({user: this.props.user})
      }
      
      routeSwitch() {
        this.setState({
          page: this.renderSwitch(window.location.hash)
          });
      }
      
        renderSwitch(pathname) {
          switch(pathname) {
            case "#home":
              return <Landing />;
            // case "#page2":
            //   return <Page2 />;
            // case "#page3":
            //   return <Page3 />;
            default:
              return <Landing />;
          }
        }
      
        render() {
          return(
            <div>
            {this.state.page}
            </div>
          )
        }
}

export default Route; 