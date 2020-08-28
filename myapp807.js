import React,{Component} from 'react';
import {Text,View, Button } from 'react-native';

class Blackpink extends Component{
  constructor(){
    super()
    this.state={
      data:"Blackpink with Selena Gomaz"
    }
  }
  testState(){
    this.setState({data:"Ice-Cream"})
  }
  render(){
    return(
      <View>
        <Text style={{fontSize:90,textAlign:'center'}}>{this.state.data}</Text>
        <Button title="Update" 
                onPress={()=>{this.testState({})}}
        />
      </View>
    )
  }
}
export default Blackpink;
