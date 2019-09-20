import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

export default class BubblePage extends React.Component {
  state = {
    colorList: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth().get("/colors")
      .then(res => {
        this.setState({
          colorList: res.data
        })
      })
      .catch(err => console.log(err))
  };

  setColorList = color => {
    this.setState({
      colorList: [...this.state.colorList, color]
    })
  }

  render() {
    return (
      <>
        <ColorList colors={this.state.colorList} updateColors={this.setColorList} />
        <Bubbles colors={this.state.colorList} />
      </>
    );
  }
};