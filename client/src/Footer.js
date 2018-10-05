import React, { Component } from 'react';
import pbu_40_yellow from './img/pbu_40_yellow.png';

class Footer extends Component {

render() {
    return(
    <div className="footer">
        <a href="https://untappd.com/" target="_blank" rel="noopener noreferrer"><img className="footerLogo" src={pbu_40_yellow} alt="powered by untappd" /></a>
    </div>
    )
}
}

export default Footer;