import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const StyledImage = styled.div`
  font-size: 25px;
  margin: auto;
  margin-top: 100px;
`
const Explanation = styled.div`
  width: 50%;
  color: rgb(224, 224, 224);
  margin: auto;
  margin-bottom: 100px;
  font-size: 20px;
`

function Image() {

  const [image, setImage] = useState(null)
  const [explanation, setExplanation] = useState(null)
  const [title, setTitle] = useState(null)
  const [copyright, setCopyright] = useState(null)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data)

        setTitle(res.data.title)
        setImage(res.data.url)
        setExplanation(res.data.explanation)
        setCopyright(res.data.copyright)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
    <StyledImage>
      <h2>{title}</h2>
      <img src={image} alt="" />
    </StyledImage>

    <Explanation>
      <h3>About The Photo</h3>
      <p>{explanation}</p>
    </Explanation>
    <p>Credit: {copyright}</p>
    </>
  );
}

export default Image;


