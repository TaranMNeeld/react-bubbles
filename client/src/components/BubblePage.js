import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([])

  const getColors = () => {
    axiosWithAuth().get("/colors")
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getColors()
  }, [])

  const setColors = color => {
    setColorList([
      ...colorList,
      color
    ])
  }
    return (
      <>
        <ColorList colors={colorList} setColorList={setColorList} getColors={getColors} />
        <Bubbles colors={colorList} />
      </>
    );
};

export default BubblePage