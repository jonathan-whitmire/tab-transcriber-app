import React from 'react';
            // Note Images
import sixteenth_note from "../sixteenth_note.png";
import eighth_note from '../eighth_note.png';
import dotted_eighth_note from "../dotted_eighth_note.jpg";
import quarter_note from "../quarter_note.png";
import dotted_quarter_note from "../dotted_quarter_note.jpg";
import half_note from '../half_note.png';
import dotted_half_note from "../dotted_half_note.jpg";
import whole_note from '../whole_note.png';
              // Rest Images
import sixteenth_rest from "../sixteenth_rest.jpg";
import eighth_rest from "../eighth_rest.jpg";
import dotted_eighth_rest from "../dotted_eighth_rest.png"
import quarter_rest from "../quarter_rest.jpg";
import dotted_quarter_rest from "../dotted_quarter_rest.gif";
import half_rest from "../half_rest.jpg"
import whole_rest from "../whole_rest.jpg"

import styled from "styled-components";

const Button = styled.button`
  background-image: ${(props) => props.backgroundImage};
  background-size: ${(props) => props.backgroundSize};
  value: ${(props) => props.value};
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10px;
  width: 45px;
  height: 45px;
  background-color: white;
`;

function NotesRestsButtons(props) {

  function buttonClicked(event) {
    props.onClickNoteRest(event.target.value)
  }
    return (
      <div className="grid-container">
        <div className="notes">
          <Button
            backgroundImage={`url(${sixteenth_note})`}
            backgroundSize="100%"
            value="16N"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${eighth_note})`}
            backgroundSize="100%"
            value="8N"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${dotted_eighth_note})`}
            backgroundSize="60%"
            value=".8N"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${quarter_note})`}
            backgroundSize="100%"
            value="QN"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${dotted_quarter_note})`}
             backgroundSize="70%"
            value=".QN"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${half_note})`}
            backgroundSize="100%"
            value="HN"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${dotted_half_note})`}
            backgroundSize="40%"
            value=".HN"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${whole_note})`}
            backgroundSize="50%"
            value="WN"
            onClick={buttonClicked}
          />
        </div>
        <div className="rests">
          <Button
            backgroundImage={`url(${sixteenth_rest})`}
            backgroundSize="50%"
            value="16R"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${eighth_rest})`}
            backgroundSize="50%"
            value="8R"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${dotted_eighth_rest})`}
            backgroundSize="100%"
            value=".8R"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${quarter_rest})`}
            backgroundSize="60%"
            value="QR"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${dotted_quarter_rest})`}
            backgroundSize="120%"
            value=".QR"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${half_rest})`}
            backgroundSize="60%"
            value="HR"
            onClick={buttonClicked}
          />
          <Button
            backgroundImage={`url(${whole_rest})`}
            backgroundSize="100%"
            value="WR"
            onClick={buttonClicked}
          />
        </div>
      </div>
    );
}

export default NotesRestsButtons;