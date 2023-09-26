import styled from 'styled-components'

export const TextEditorbgcontainer=styled.div`
background-color:#25262c;
background-size:cover;
height:100vh;
padding:55px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center`

export const TextEditorContainer=styled.div`
background-color:#1b1c22;
height:900px;
width:1200px;
border-radius:10px;
display:flex;
padding:55px;`

export const ImageContainer=styled.div`
background-color:#1b1c22;
display:flex;
justify-content:flex-start;
flex-direction:column

`
export const Image=styled.img`
height:400px;
width:500px;`

export const Heading=styled.h1`
color:white;
font-family:"Roboto"
margin-left:20px;`

export const TextareaContainer=styled.div`
background-color:#25262c;
border-radius:15px
height:400px;
width:550px;
padding:20px;
`

export const BoldCOntainer=styled.ul`
display:flex`

export const TextArea=styled.textarea`
font-style: ${(props)=>(props.italic?'Italic':'normal')};
font-weight:${(props)=>(props.bold?'Bold':'normal')};
text-decoration:${(props)=>(props.underline?'underline':'normal')};
background-color:#25262c;
border-radius:15px;
padding:15px;



`
export const Button=styled.button`
background-color:transparent;
border:0px;`

export const List =styled.li`
list-style-type:none;`

