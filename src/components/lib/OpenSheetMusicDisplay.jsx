import React, { Component } from "react";
import { OpenSheetMusicDisplay as OSMD } from "opensheetmusicdisplay";

class OpenSheetMusicDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { dataReady: false };
    this.osmd = undefined;
    this.divRef = React.createRef();
  }

  afterRender() {
    let cursor = this.osmd.cursor;
    cursor.show();
    cursor.next();
  }

  setupOsmd() {
    const options = {
      autoResize: this.props.autoResize ? this.props.autoResize : true,
      drawTitle: this.props.drawTitle ? this.props.drawTitle : true,
    };
    this.osmd = new OSMD(this.divRef.current, options);
    this.osmd.load(this.props.file).then(() => {
      this.osmd.render();
      this.afterRender();
      // this.osmd.cursor.show();
    });
  }

  // setupCursor() {
  //   this.cursor = new Cursor(this.divRef.current, this.osmd);
  // }

  // resize() {
  //   this.forceUpdate();
  // }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  componentDidUpdate(prevProps) {
    if (this.props.drawTitle !== prevProps.drawTitle) {
      this.setupOsmd();
    } else {
      this.osmd.load(this.props.file).then(() => this.osmd.render());
    }
    window.addEventListener("resize", this.resize);
  }

  // Called after render
  componentDidMount() {
    this.setupOsmd();
  }

  render() {
    return <div className="osmd-container" ref={this.divRef} />;
  }
}

export default OpenSheetMusicDisplay;
