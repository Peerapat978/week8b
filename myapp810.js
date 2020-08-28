import React, {Component} from 'react';
import { Image, StyleSheet,Text, View} from 'react-native';
import styled from 'styled-components/native'
export default class App extends Component {
render() {
return (
<Container>
<Item >
  <Image style={{flex:1,
                height:"100%",
                width:"100%",}}
                source={{
                  uri:'https://image.shutterstock.com/image-photo/uyuni-reflections-one-most-amazing-260nw-1076248532.jpg',
                }}></Image>
<Title >Item number 1</Title>
</Item>
<Item >
  <Image style={{flex:1,
                height:"100%",
                width:"100%",}}
                source={{
                  uri:'https://image.shutterstock.com/image-photo/horizontal-line-calm-sea-on-260nw-1071791186.jpg',
                }}></Image>
<Title >Item number 2</Title>
</Item>
<Item >
  <Image style={{flex:1,
                height:"100%",
                width:"100%",}}
                source={{
                  uri:'https://travel.mthai.com/app/uploads/2014/06/DSC03382.jpg',
                }}></Image>
<Title >Item number 3</Title>
</Item>
<Item >
  <Image style={{flex:1,
                height:"100%",
                width:"100%",}}
                source={{
                  uri:'https://f.ptcdn.info/056/013/000/1386449734-UntitledPa-o.jpg',
                }}></Image>
<Title >Item number 4</Title>
</Item>
</Container>
);
}
}
const Container=styled.View`
flex:1;
padding:50px 0;
justify-content:center;
background-color:#f4f4f4;
align-items:center
`
const Title=styled.Text`
font-size:20px;
text-align:center;
color:red;
`
const Item=styled.View`
flex:1;
border:1px solid #ccc;
margin:2px 0;
border-radius:10px;
box-shadow:0 0 10px #ccc;
background-color:#fff;
width:80%;
padding:10px;
`