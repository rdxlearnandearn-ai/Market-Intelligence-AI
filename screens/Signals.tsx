import React from 'react';
import { View, Text, FlatList } from 'react-native';

const items = [
  { id: '1', title: 'Buy BTC at 30000' },
  { id: '2', title: 'Sell TCS at 3500' },
];

export default function Signals() {
  return (
    <View style={{flex:1, padding:16}}>
      <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Signals</Text>
      <FlatList data={items} keyExtractor={i=>i.id} renderItem={({item})=>(
        <View style={{padding:12, borderBottomWidth:1, borderColor:'#eee'}}>
          <Text>{item.title}</Text>
        </View>
      )} />
    </View>
  );
}
