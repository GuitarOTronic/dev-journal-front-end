import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'; 

import './note.css'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      text:''
    };    
  }

  handleEditorState = (text) => {
    console.log(text)
     this.setState({text})
    };

  render(){
    return (
      <div className="note-container">
        {/* <input value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} /> */}
        <ReactQuill 
          value={this.state.text}
          theme="snow"
          onChange={this.handleEditorState} />

      </div>
    )
  }
}