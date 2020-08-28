import React from 'react';
import {Text,View } from 'react-native';
import Login from './component/login'
import Home from './component/home'
const Blackpink=()=>{
  const data="Blackpink with Selena Gomaz"
  const data2="Ice-Cream"
  return (
    <View>
      <Login data2={data2}/>
      <Home data1={data}/>
    </View>
    )
  }
export default Blackpink;
