import React from 'react';
import BassFretboard from '../BassFretboard.png';
import styled from 'styled-components';

const Button = styled.button`
  id: ${(props) => props.id};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  position: absolute;
  border-radius: 50%;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: white;
  line-height: 5px;
`;

function Fretboard(props) {

  function buttonClicked(event) {
    props.onClickFret({
      fretNumber: event.target.id,
      stringNumber: event.target.value,
    });
  }
  
  return (
    <div className="fbcontainer">
      <img
        fluid="true"  
        style={{ width: "100%" }}
        src={BassFretboard}
        alt="bass-fretboard"
      />

      {/* E string buttons */}

      <Button
        top="60%"
        left="0.8%"
        width="4%"
        padding="1%"
        value="1"
        id="0"
        onClick={buttonClicked}
      >
        E/0
      </Button>
      <Button
        top="61%"
        left="5%"
        width="4%"
        padding="1%"
        value="1"
        id="1"
        onClick={buttonClicked}
      >
        F/1
      </Button>
      <Button
        top="62%"
        left="9.5%"
        width="6%"
        padding="1%"
        value="1"
        id="2"
        onClick={buttonClicked}
      >
        F#/2
      </Button>
      <Button
        top="62.5%"
        left="16.3%"
        width="6%"
        padding="1%"
        value="1"
        id="3"
        onClick={buttonClicked}
      >
        G/3
      </Button>
      <Button
        top="64.5%"
        left="22.5%"
        width="6%"
        padding="1%"
        value="1"
        id="4"
        onClick={buttonClicked}
      >
        G#/4
      </Button>
      <Button
        top="65%"
        left="29.5%"
        width="5%"
        padding="1%"
        value="1"
        id="5"
        onClick={buttonClicked}
      >
        A/5
      </Button>
      <Button
        top="65%"
        left="35.2%"
        width="5%"
        padding="1%"
        value="1"
        id="6"
        onClick={buttonClicked}
      >
        A#/6
      </Button>
      <Button
        top="66%"
        left="40.7%"
        width="5%"
        padding="1%"
        value="1"
        id="7"
        onClick={buttonClicked}
      >
        B/7
      </Button>
      <Button
        top="67%"
        left="45.9%"
        width="5%"
        padding="1%"
        value="1"
        id="8"
        onClick={buttonClicked}
      >
        C/8
      </Button>
      <Button
        top="67.5%"
        left="50.8%"
        width="4.5%"
        padding="1%"
        value="1"
        id="9"
        onClick={buttonClicked}
      >
        C#/9
      </Button>
      <Button
        top="68.5%"
        left="55.5%"
        width="4.1%"
        padding="1%"
        fontSize="small"
        value="1"
        id="10"
        onClick={buttonClicked}
      >
        D/10
      </Button>
      <Button
        top="68.5%"
        left="59.8%"
        width="4.3%"
        padding="1%"
        fontSize="small"
        value="1"
        id="11"
        onClick={buttonClicked}
      >
        D#/11
      </Button>
      <Button
        top="69%"
        left="64%"
        width="4%"
        padding="1%"
        fontSize="small"
        value="1"
        id="12"
        onClick={buttonClicked}
      >
        E/12
      </Button>
      <Button
        top="70%"
        left="68%"
        width="3.8%"
        padding="1%"
        fontSize="x-small"
        value="1"
        id="13"
        onClick={buttonClicked}
      >
        F/13
      </Button>
      <Button
        top="71.5%"
        left="71.5%"
        width="3.6%"
        padding="0.8%"
        fontSize="x-small"
        value="1"
        id="14"
        onClick={buttonClicked}
      >
        F#/14
      </Button>
      <Button
        top="72%"
        left="75.1%"
        width="3.6%"
        padding="0.8%"
        fontSize="x-small"
        value="1"
        id="15"
        onClick={buttonClicked}
      >
        G/15
      </Button>
      <Button
        top="73.5%"
        left="78.2%"
        width="3.5%"
        padding="0.7%"
        fontSize="x-small"
        value="1"
        id="16"
        onClick={buttonClicked}
      >
        G#/16
      </Button>
      <Button
        top="74%"
        left="81.7%"
        width="3.3%"
        padding="0.7%"
        fontSize="x-small"
        value="1"
        id="17"
        onClick={buttonClicked}
      >
        A/17
      </Button>
      <Button
        top="76%"
        left="84.6%"
        width="3%"
        padding="0.6%"
        fontSize="xx-small"
        value="1"
        id="18"
        onClick={buttonClicked}
      >
        A#/18
      </Button>
      <Button
        top="77%"
        left="87.6%"
        width="2.7%"
        padding="0.5%"
        fontSize="xx-small"
        value="1"
        id="19"
        onClick={buttonClicked}
      >
        B/19
      </Button>
      <Button
        top="77.5%"
        left="90.1%"
        width="2.7%"
        padding="0.5%"
        fontSize="xx-small"
        value="1"
        id="20"
        onClick={buttonClicked}
      >
        C/20
      </Button>
      <Button
        top="78%"
        left="92.4%"
        width="2.8%"
        padding="0.5%"
        fontSize="xx-small"
        value="1"
        id="21"
        onClick={buttonClicked}
      >
        C#/21
      </Button>
      <Button
        top="78%"
        left="94.8%"
        width="2.5%"
        padding="0.5%"
        fontSize="xx-small"
        value="1"
        id="22"
        onClick={buttonClicked}
      >
        D/22
      </Button>

      {/* A string buttons */}

      <Button
        top="45%"
        left="0.8%"
        width="4%"
        padding="1%"
        value="2"
        id="0"
        onClick={buttonClicked}
      >
        A/0
      </Button>
      <Button
        top="45.5%"
        left="5%"
        width="4%"
        padding="1%"
        value="2"
        id="1"
        onClick={buttonClicked}
      >
        A#/1
      </Button>
      <Button
        top="46%"
        left="9.5%"
        width="6%"
        padding="1%"
        value="2"
        id="2"
        onClick={buttonClicked}
      >
        B/2
      </Button>
      <Button
        top="46.5%"
        left="16.3%"
        width="6%"
        padding="1%"
        value="2"
        id="3"
        onClick={buttonClicked}
      >
        C/3
      </Button>
      <Button
        top="47%"
        left="22.5%"
        width="6%"
        padding="1%"
        value="2"
        id="4"
        onClick={buttonClicked}
      >
        C#/4
      </Button>
      <Button
        top="47%"
        left="29.5%"
        width="5%"
        padding="1%"
        value="2"
        id="5"
        onClick={buttonClicked}
      >
        D/5
      </Button>
      <Button
        top="48%"
        left="35.2%"
        width="5%"
        padding="1%"
        value="2"
        id="6"
        onClick={buttonClicked}
      >
        D#/6
      </Button>
      <Button
        top="48%"
        left="40.7%"
        width="5%"
        padding="1%"
        value="2"
        id="7"
        onClick={buttonClicked}
      >
        E/7
      </Button>
      <Button
        top="48%"
        left="45.9%"
        width="5%"
        padding="1%"
        value="2"
        id="8"
        onClick={buttonClicked}
      >
        F/8
      </Button>
      <Button
        top="48%"
        left="50.8%"
        width="4.5%"
        padding="1%"
        value="2"
        id="9"
        onClick={buttonClicked}
      >
        F#/9
      </Button>
      <Button
        top="48%"
        left="55.5%"
        width="4.1%"
        padding="1%"
        fontSize="small"
        value="2"
        id="10"
        onClick={buttonClicked}
      >
        G/10
      </Button>
      <Button
        top="48%"
        left="59.8%"
        width="4.3%"
        padding="1%"
        fontSize="small"
        value="2"
        id="11"
        onClick={buttonClicked}
      >
        G#/11
      </Button>
      <Button
        top="48%"
        left="64%"
        width="4%"
        padding="1%"
        fontSize="small"
        value="2"
        id="12"
        onClick={buttonClicked}
      >
        A/12
      </Button>
      <Button
        top="48%"
        left="67.7%"
        width="3.8%"
        padding="1%"
        fontSize="x-small"
        value="2"
        id="13"
        onClick={buttonClicked}
      >
        A#/13
      </Button>
      <Button
        top="50%"
        left="71.8%"
        width="3.6%"
        padding="0.8%"
        fontSize="x-small"
        value="2"
        id="14"
        onClick={buttonClicked}
      >
        B/14
      </Button>
      <Button
        top="51%"
        left="75.1%"
        width="3.6%"
        padding="0.8%"
        fontSize="x-small"
        value="2"
        id="15"
        onClick={buttonClicked}
      >
        C/15
      </Button>
      <Button
        top="51.5%"
        left="78.2%"
        width="3.5%"
        padding="0.7%"
        fontSize="x-small"
        value="2"
        id="16"
        onClick={buttonClicked}
      >
        C#/16
      </Button>
      <Button
        top="52%"
        left="81.7%"
        width="3.3%"
        padding="0.7%"
        fontSize="x-small"
        value="2"
        id="17"
        onClick={buttonClicked}
      >
        D/17
      </Button>
      <Button
        top="53%"
        left="84.6%"
        width="3%"
        padding="0.6%"
        fontSize="xx-small"
        value="2"
        id="18"
        onClick={buttonClicked}
      >
        D#/18
      </Button>
      <Button
        top="54%"
        left="87.6%"
        width="2.7%"
        padding="0.5%"
        fontSize="xx-small"
        value="2"
        id="19"
        onClick={buttonClicked}
      >
        E/19
      </Button>
      <Button
        top="54%"
        left="90.1%"
        width="2.7%"
        padding="0.5%"
        fontSize="xx-small"
        value="2"
        id="20"
        onClick={buttonClicked}
      >
        F/20
      </Button>
      <Button
        top="54%"
        left="92.4%"
        width="2.8%"
        padding="0.5%"
        fontSize="xx-small"
        value="2"
        id="21"
        onClick={buttonClicked}
      >
        F#/21
      </Button>
      <Button
        top="54%"
        left="94.8%"
        width="2.5%"
        padding="0.5%"
        fontSize="xx-small"
        value="2"
        id="22"
        onClick={buttonClicked}
      >
        G/22
      </Button>

      {/* D string buttons */}

      <Button
        top="30.5%"
        left="0.8%"
        width="4%"
        padding="1%"
        value="3"
        id="0"
        onClick={buttonClicked}
      >
        D/0
      </Button>
      <Button
        top="30%"
        left="5%"
        width="4%"
        padding="1%"
        value="3"
        id="1"
        onClick={buttonClicked}
      >
        D#/1
      </Button>
      <Button
        top="30%"
        left="9.5%"
        width="6%"
        padding="1%"
        value="3"
        id="2"
        onClick={buttonClicked}
      >
        E/2
      </Button>
      <Button
        top="29%"
        left="16.3%"
        width="6%"
        padding="1%"
        value="3"
        id="3"
        onClick={buttonClicked}
      >
        F/3
      </Button>
      <Button
        top="28.7%"
        left="22.5%"
        width="6%"
        padding="1%"
        value="3"
        id="4"
        onClick={buttonClicked}
      >
        F#/4
      </Button>
      <Button
        top="28%"
        left="29.5%"
        width="5%"
        padding="1%"
        value="3"
        id="5"
        onClick={buttonClicked}
      >
        G/5
      </Button>
      <Button
        top="28%"
        left="35.2%"
        width="5%"
        padding="1%"
        value="3"
        id="6"
        onClick={buttonClicked}
      >
        G#/6
      </Button>
      <Button
        top="27%"
        left="40.7%"
        width="5%"
        padding="1%"
        value="3"
        id="7"
        onClick={buttonClicked}
      >
        A/7
      </Button>
      <Button
        top="27%"
        left="45.9%"
        width="5%"
        padding="1%"
        value="3"
        id="8"
        onClick={buttonClicked}
      >
        A#/8
      </Button>
      <Button
        top="27%"
        left="50.8%"
        width="4.5%"
        padding="1%"
        value="3"
        id="9"
        onClick={buttonClicked}
      >
        B/9
      </Button>
      <Button
        top="27%"
        left="55.5%"
        width="4.1%"
        padding="1%"
        fontSize="small"
        value="3"
        id="10"
        onClick={buttonClicked}
      >
        C/10
      </Button>
      <Button
        top="27%"
        left="59.8%"
        width="4.3%"
        padding="1%"
        fontSize="small"
        value="3"
        id="11"
        onClick={buttonClicked}
      >
        C#/11
      </Button>
      <Button
        top="27%"
        left="64%"
        width="4%"
        padding="1%"
        fontSize="small"
        value="3"
        id="12"
        onClick={buttonClicked}
      >
        D/12
      </Button>
      <Button
        top="26%"
        left="67.7%"
        width="3.8%"
        padding="1%"
        fontSize="x-small"
        value="3"
        id="13"
        onClick={buttonClicked}
      >
        D#/13
      </Button>
      <Button
        top="28%"
        left="71.8%"
        width="3.6%"
        padding="0.8%"
        fontSize="x-small"
        value="3"
        id="14"
        onClick={buttonClicked}
      >
        E/14
      </Button>
      <Button
        top="27.5%"
        left="75.1%"
        width="3.6%"
        padding="0.8%"
        fontSize="x-small"
        value="3"
        id="15"
        onClick={buttonClicked}
      >
        F/15
      </Button>
      <Button
        top="29%"
        left="78.2%"
        width="3.5%"
        padding="0.7%"
        fontSize="x-small"
        value="3"
        id="16"
        onClick={buttonClicked}
      >
        F#/16
      </Button>
      <Button
        top="29%"
        left="81.7%"
        width="3.3%"
        padding="0.7%"
        fontSize="x-small"
        value="3"
        id="17"
        onClick={buttonClicked}
      >
        G/17
      </Button>
      <Button
        top="30%"
        left="84.6%"
        width="3%"
        padding="0.6%"
        fontSize="xx-small"
        value="3"
        id="18"
        onClick={buttonClicked}
      >
        G#/18
      </Button>
      <Button
        top="31%"
        left="87.6%"
        width="2.7%"
        padding="0.5%"
        fontSize="xx-small"
        value="3"
        id="19"
        onClick={buttonClicked}
      >
        A/19
      </Button>
      <Button
        top="31%"
        left="90.1%"
        width="2.7%"
        padding="0.5%"
        fontSize="xx-small"
        value="3"
        id="20"
        onClick={buttonClicked}
      >
        A#/20
      </Button>
      <Button
        top="31%"
        left="92.4%"
        width="2.8%"
        padding="0.5%"
        fontSize="xx-small"
        value="3"
        id="21"
        onClick={buttonClicked}
      >
        B/21
      </Button>
      <Button
        top="31%"
        left="94.8%"
        width="2.5%"
        padding="0.5%"
        fontSize="xx-small"
        value="3"
        id="22"
        onClick={buttonClicked}
      >
        C/22
      </Button>

      {/* G string buttons */}

      <Button
        top="14%"
        left="0.8%"
        width="4%"
        padding="1%"
        value="4"
        id="0"
        onClick={buttonClicked}
      >
        G/0
      </Button>
      <Button
        top="13.5%"
        left="5%"
        width="4%"
        padding="1%"
        value="4"
        id="1"
        onClick={buttonClicked}
      >
        G#/1
      </Button>
      <Button
        top="12%"
        left="9.5%"
        width="6%"
        padding="1%"
        value="4"
        id="2"
        onClick={buttonClicked}
      >
        A/2
      </Button>
      <Button
        top="12%"
        left="16.3%"
        width="6%"
        padding="1%"
        value="4"
        id="3"
        onClick={buttonClicked}
      >
        A#/3
      </Button>
      <Button
        top="11%"
        left="22.5%"
        width="6%"
        padding="1%"
        value="4"
        id="4"
        onClick={buttonClicked}
      >
        B/4
      </Button>
      <Button
        top="10.5%"
        left="29.5%"
        width="5%"
        padding="1%"
        value="4"
        id="5"
        onClick={buttonClicked}
      >
        C/5
      </Button>
      <Button
        top="9.5%"
        left="35.2%"
        width="5%"
        padding="1%"
        value="4"
        id="6"
        onClick={buttonClicked}
      >
        C#/6
      </Button>
      <Button
        top="9%"
        left="40.7%"
        width="5%"
        padding="1%"
        value="4"
        id="7"
        onClick={buttonClicked}
      >
        D/7
      </Button>
      <Button
        top="8%"
        left="45.9%"
        width="5%"
        padding="1%"
        value="4"
        id="8"
        onClick={buttonClicked}
      >
        D#/8
      </Button>
      <Button
        top="7.5%"
        left="50.8%"
        width="4.5%"
        padding="1%"
        value="4"
        id="9"
        onClick={buttonClicked}
      >
        E/9
      </Button>
      <Button
        top="6.5%"
        left="55.5%"
        width="4.1%"
        padding="1%"
        fontSize="small"
        value="4"
        id="10"
        onClick={buttonClicked}
      >
        F/10
      </Button>
      <Button
        top="6%"
        left="59.8%"
        width="4.3%"
        padding="1%"
        fontSize="small"
        value="4"
        id="11"
        onClick={buttonClicked}
      >
        F#/11
      </Button>
      <Button
        top="5.5%"
        left="64%"
        width="4%"
        padding="1%"
        fontSize="small"
        value="4"
        id="12"
        onClick={buttonClicked}
      >
        G/12
      </Button>
      <Button
        top="4.5%"
        left="67.7%"
        width="3.8%"
        padding="1%"
        fontSize="x-small"
        value="4"
        id="13"
        onClick={buttonClicked}
      >
        G#/13
      </Button>
      <Button
        top="6%"
        left="71.8%"
        width="3.6%"
        padding="0.8%"
        fontSize="x-small"
        value="4"
        id="14"
        onClick={buttonClicked}
      >
        A/14
      </Button>
      <Button
        top="5.5%"
        left="75.1%"
        width="3.6%"
        padding="0.8%"
        fontSize="x-small"
        value="4"
        id="15"
        onClick={buttonClicked}
      >
        A#/15
      </Button>
      <Button
        top="6%"
        left="78.5%"
        width="3.5%"
        padding="0.7%"
        fontSize="x-small"
        value="4"
        id="16"
        onClick={buttonClicked}
      >
        B/16
      </Button>
      <Button
        top="6%"
        left="81.7%"
        width="3.3%"
        padding="0.7%"
        fontSize="x-small"
        value="4"
        id="17"
        onClick={buttonClicked}
      >
        C/17
      </Button>
      <Button
        top="7%"
        left="84.6%"
        width="3%"
        padding="0.6%"
        fontSize="xx-small"
        value="4"
        id="18"
        onClick={buttonClicked}
      >
        C#/18
      </Button>
      <Button
        top="7.5%"
        left="87.6%"
        width="2.7%"
        padding="0.5%"
        fontSize="xx-small"
        value="4"
        id="19"
        onClick={buttonClicked}
      >
        D/19
      </Button>
      <Button
        top="7.3%"
        left="90.1%"
        width="2.7%"
        padding="0.5%"
        fontSize="xx-small"
        value="4"
        id="20"
        onClick={buttonClicked}
      >
        D#/20
      </Button>
      <Button
        top="7%"
        left="92.4%"
        width="2.8%"
        padding="0.5%"
        fontSize="xx-small"
        value="4"
        id="21"
        onClick={buttonClicked}
      >
        E/21
      </Button>
      <Button
        top="7%"
        left="94.8%"
        width="2.5%"
        padding="0.5%"
        fontSize="xx-small"
        value="4"
        id="22"
        onClick={buttonClicked}
      >
        F/22
      </Button>
    </div>
  );
};

export default Fretboard;