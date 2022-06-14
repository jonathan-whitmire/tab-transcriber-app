import React, { useState } from 'react';
import Fretboard from './Fretboard';
import Tablature from './Tablature';
import NotesRestsButtons from './Rhythm';
import NavBar from './Navbar';
import Header from './Header';

function App(props) {
  const [selectedFret, setSelectedFret] = useState({})
  function onClickFret(data) {
    setSelectedFret(data)
  }
  const [selectedNoteRest, setSelectedNoteRest] = useState()
  const [tablatureData, setTablatureData] = useState([])
  function onClickNoteRest(data) {
    setSelectedNoteRest(data)
    setTablatureData([...tablatureData, { ...selectedFret, rhythmValue: data }])
    console.log(tablatureData)
  }
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Header />
      </div>
      <hr
        style={{
          marginTop: "0",
          marginBottom: "0",
          marginLeft: "auto",
          marginRight: "auto",
          border: "13px inset #5c98d6",
          width: "100%",
        }}
      ></hr>
      <div>
        <Fretboard onClickFret={onClickFret} />
      </div>
      <hr
        style={{
          marginTop: "0",
          marginBottom: "0",
          marginLeft: "auto",
          marginRight: "auto",
          border: "13px inset #5c98d6",
          width: "100%",
        }}
      ></hr>
      <div>
        <Tablature fretData={selectedFret} noteRestData={selectedNoteRest} tablatureData={tablatureData} />
      </div>
      <hr
        style={{
          marginTop: "0",
          marginBottom: "0",
          marginLeft: "auto",
          marginRight: "auto",
          border: "13px inset #5c98d6",
          width: "100%",
        }}
      ></hr>
      <div>
        <NotesRestsButtons onClickNoteRest={onClickNoteRest} />
      </div>
      <hr
        style={{
          marginTop: "0",
          marginBottom: "0",
          marginLeft: "auto",
          marginRight: "auto",
          border: "13px inset #5c98d6",
          width: "100%",
        }}
      ></hr>
    </div>
  );
}
    
export default App;