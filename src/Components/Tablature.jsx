import React from 'react';
            // Bass Fret Image
import bass_tab_image from '../bass_tab_image.png';
            // Note Images
import sixteenth_note from "../sixteenth_note.png";
import eighth_note from "../eighth_note.png";
import dotted_eighth_note from "../dotted_eighth_note.jpg";
import quarter_note from "../quarter_note.png";
import dotted_quarter_note from "../dotted_quarter_note.jpg";
import half_note from "../half_note.png";
import dotted_half_note from "../dotted_half_note.jpg";
import whole_note from "../whole_note.png";
              // Rest Images
import sixteenth_rest from "../sixteenth_rest.jpg";
import eighth_rest from "../eighth_rest.jpg";
import dotted_eighth_rest from "../dotted_eighth_rest.png";
import quarter_rest from "../quarter_rest.jpg";
import dotted_quarter_rest from "../dotted_quarter_rest.gif";
import half_rest from "../half_rest.jpg";
import whole_rest from "../whole_rest.jpg";

                // Note Image Vars
var sNote = (
  <img style={{ height: "50px" }} src={sixteenth_note} alt="sixteenth_note" />
);

var eNote = (
  <img style={{ height: "50px" }} src={eighth_note} alt="eighth_note" />
);

var dENote = (
  <img
    style={{ height: "30px" }}
    src={dotted_eighth_note}
    alt="dotted_eighth_note"
  />
);

var qNote = (
  <img style={{ height: "50px" }} src={quarter_note} alt="quarter_note" />
);

var dQNote = (
  <img
    style={{ height: "30px" }}
    src={dotted_quarter_note}
    alt="dotted_quarter_note"
  />
);

var hNote = <img style={{ height: "50px" }} src={half_note} alt="half_note" />;

var dHNote = (
  <img
    style={{ height: "30px" }}
    src={dotted_half_note}
    alt="dotted_half_note"
  />
);

var wNote = (
  <img style={{ height: "30px" }} src={whole_note} alt="whole_note" />
);

                // Rest Image Vars
var sRest = (
  <img style={{ height: "20px" }} src={sixteenth_rest} alt="sixteenth_rest" />
);

var eRest = (
  <img style={{ height: "20px" }} src={eighth_rest} alt="eighth_rest" />
);

var dERest = (
  <img
    style={{ height: "50px" }}
    src={dotted_eighth_rest}
    alt="dotted_eighth_rest"
  />
);

var qRest = (
  <img style={{ height: "30px" }} src={quarter_rest} alt="quarter_rest" />
);

var dQRest = (
  <img
    style={{ height: "40px" }}
    src={dotted_quarter_rest}
    alt="dotted_quarter_rest"
  />
);

var hRest = <img style={{ height: "20px" }} src={half_rest} alt="half_rest" />;

var wRest = (
  <img style={{ height: "35px" }} src={whole_rest} alt="whole_rest" />
);

// Object destructuring
function Tablature({ tablatureData }) {
  
  function TablatureValue({ noteRestData, fretData }) {
    // Assigns Fret Number to String Number
    if (fretData.stringNumber === "4") {
      var stringOne = fretData.fretNumber;
    } else if (fretData.stringNumber === "3") {
      var stringTwo = fretData.fretNumber;
    } else if (fretData.stringNumber === "2") {
      var stringThree = fretData.fretNumber;
    } else {
      var stringFour = fretData.fretNumber;
    }
    // Assigns Note Image under Tab
    if (noteRestData === "16N") {
      var selectedNoteRest = sNote;
    } else if (noteRestData === "8N") {
      selectedNoteRest = eNote;
    } else if (noteRestData === ".8N") {
      selectedNoteRest = dENote;
    } else if (noteRestData === "QN") {
      selectedNoteRest = qNote;
    } else if (noteRestData === ".QN") {
      selectedNoteRest = dQNote;
    } else if (noteRestData === "HN") {
      selectedNoteRest = hNote;
    } else if (noteRestData === ".HN") {
      selectedNoteRest = dHNote;
    } else if (noteRestData === "WN") {
      selectedNoteRest = wNote;
    } else if (noteRestData === "16R") {
      selectedNoteRest = sRest;
    } else if (noteRestData === "8R") {
      selectedNoteRest = eRest;
    } else if (noteRestData === ".8R") {
      selectedNoteRest = dERest;
    } else if (noteRestData === "QR") {
      selectedNoteRest = qRest;
    } else if (noteRestData === ".QR") {
      selectedNoteRest = dQRest;
    } else if (noteRestData === "HR") {
      selectedNoteRest = hRest;
    } else if (noteRestData === "WR") {
      selectedNoteRest = wRest;
    }
    return (
      <div className="tab-container">
        <img
          fluid="true"
          style={{ width: "90%" }}
          src={bass_tab_image}
          alt="bass-fretboard"
        />
        <div className="line1">{stringOne}</div>
        <div className="line2">{stringTwo}</div>
        <div className="line3">{stringThree}</div>
        <div className="line4">{stringFour}</div>

        <div className="noterest">{selectedNoteRest}</div>
      </div>
    );
  }

  return tablatureData.map((tabValue, index) => (
    <TablatureValue
      key={index}
      noteRestData={tabValue.rhythmValue}
      fretData={{
        stringNumber: tabValue.stringNumber,
        fretNumber: tabValue.fretNumber,
      }}
    />
  ));
}

export default Tablature;
