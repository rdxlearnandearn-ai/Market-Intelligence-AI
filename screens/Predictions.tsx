import React from 'react';
import { View, Text, FlatList } from 'react-native';

const items = [
  { id: '1', title: 'AAPL up 2% next day' },
  { id: '2', title: 'NIFTY probable bounce' },
  { id: '3', title: 'USDINR steady' },
];

export default function Predictions() {
  return (
    <View style={{flex:1, padding:16}}>
      <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Market Predictions</Text>
      <FlatList data={items} keyExtractor={i=>i.id} renderItem={({item})=>(
        <View style={{padding:12, borderBottomWidth:1, borderColor:'#eee'}}>
          <Text>{item.title}</Text>
        </View>
      )} />
    </View>
  );
}
