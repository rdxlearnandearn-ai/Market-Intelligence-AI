import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Profile() {
  return (
    <View style={{flex:1, padding:16}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Profile</Text>
      <Text style={{marginTop:8}}>Email: user@example.com</Text>
    </View>
  );
}
