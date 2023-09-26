import { TextEditorbgcontainer, TextEditorContainer, List, ImageContainer, Image, Heading, TextareaContainer, BoldCOntainer, TextArea, Button } from './styledComponents'
import { Component } from 'react'
import { VscBold } from "react-icons/vsc"
import { GoItalic } from "react-icons/go"
import { AiOutlineUnderline } from "react-icons/ai"

class Editor extends Component {
  state = {
    text: '',
    bold: false,
    italic: false,
    underline: false,
    boldColor: "#f1f5f9",
    italicColor: "#f1f5f9",
    underlineColor: "#f1f5f9"
  }

  onClickBold = () => {
    this.setState(prev => ({
      bold: !prev.bold,
      boldColor: prev.bold ? "#f1f5f9" : "#faff00"
    }))
  }

  onClickItalic = () => {
    this.setState(prev => ({
      italic: !prev.italic,
      italicColor: prev.italic ? "#f1f5f9" : "#faff00"
    }))
  }

  onClickUnderline = () => {
    this.setState(prev => ({
      underline: !prev.underline,
      underlineColor: prev.underline ? "#f1f5f9" : "#faff00"
    }))
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const { bold, text, italic, underline, boldColor, italicColor, underlineColor } = this.state
    return (
      <TextEditorbgcontainer>
        <TextEditorContainer>
          <ImageContainer>
            <Heading> Text Editor</Heading>
            <Image src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png" alt="text editor" />
          </ImageContainer>
          <TextareaContainer>
            <BoldCOntainer>
              <List>
                <Button type="button" data-testid="bold" onClick={this.onClickBold} style={{ color: boldColor }}>
                  <VscBold size={25} />
                </Button>
              </List>
              <List>
                <Button type="button" data-testid="italic" onClick={this.onClickItalic} style={{ color: italicColor }}>
                  <GoItalic size={25} />
                </Button>
              </List>
              <List>
                <Button data-testid="underline" type="button" onClick={this.onClickUnderline} style={{ color: underlineColor }}>
                  <AiOutlineUnderline size={25} />
                </Button>
              </List>
            </BoldCOntainer>

            <TextArea
              rows="35"
              cols="50"
              value={text}
              onChange={this.onChange}
              style={{
                fontWeight: bold ? "bold" : "normal",
                fontStyle: italic ? "italic" : "normal",
                textDecoration: underline ? "underline" : "none"
              }}
            >
              {text}
            </TextArea>
          </TextareaContainer>
        </TextEditorContainer>
      </TextEditorbgcontainer>
    )
  }
}

export default Editor;
