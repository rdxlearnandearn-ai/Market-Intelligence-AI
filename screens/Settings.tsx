import React from 'react';
import { View, Text, Switch } from 'react-native';

export default function Settings() {
  const [dark, setDark] = React.useState(false);
  return (
    <View style={{flex:1, padding:16}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Settings</Text>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:12}}>
        <Text style={{flex:1}}>Dark theme</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
    </View>
  );
}
