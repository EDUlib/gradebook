import React from 'react';
import { Hyperlink } from '@edx/paragon';

import EdxLogo from '../../../assets/edx-sm.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false,
    };
  }

  renderLogo() {
    return (
      <img src={EdxLogo} alt="edX logo" height="30" width="60" />
    );
  }

  render() {
    return (
      <div className="mb-3">
        <header className="d-flex justify-content-center align-items-center p-3 border-bottom-blue">
          <Hyperlink content={this.renderLogo()} destination="https://www.edx.org" />
          <div />
        </header>
      </div>
    );
  }
}
