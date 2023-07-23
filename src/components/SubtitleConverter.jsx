import React, { useState } from 'react';
import './SubtitleConverter.css';
import { Link } from 'react-router-dom';

function SubtitleConverter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState({
    source: "",
    destination: "", 
    output:"",
    translatedFilePath:"",  
   });



  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  function handleSubmit(e) {
    e.preventDefault();
    console.log(data)
    const formData=new FormData();
    formData.append('file',selectedFile);
    formData.append('source',data.source);
    formData.append('destination',data.destination);
    fetch('http://127.0.0.1:5000/result', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      setData({translatedFilePath:url})
      console.log(url)
    });
  }
    
    function handleDownload(e) {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = data.translatedFilePath;
      link.setAttribute(
        'download',
        `FileName.text`,
      );
  
      document.body.appendChild(link);
      link.click();
  
      link.parentNode.removeChild(link);}
  

  function handleChange(event) {
    const newdata = { ...data };
    newdata[event.target.name] = event.target.value;
    setData(newdata);
  }


  return (
    <nav className="Subsmain">
    <div className="Video-container" type="video/mp4">
      <div className="Subsmain-container" >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Source Language</label>
            <select onChange={handleChange} name="source" value={data.source} className="form-control">
              <option hidden selected>Select one..</option>
              <option value="English">English</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="Hindi">Hindi</option>
              <option value="German">German</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Input SRT file</label><br />
            <input type="file" onChange={handleFileChange}  className="form-control-file" id="exampleFormControlFile1" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Destination Language</label>
            <select onChange={handleChange} name="destination" value={data.destination} className="form-control">
              <option hidden selected>Select one..</option>
              <option value="English">English</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="Hindi">Hindi</option>
              <option value="German">German</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Convert</button>
        </form>
        <button onClick={handleDownload}>Download Translated File</button>

      </div>
      </div>
      {/* <div className="Subsmain-container" type="video/mp4"> */}
            {/* </div> */}
    </nav>
  );
}

export default SubtitleConverter;
