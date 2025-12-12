import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Dashboard() {
  const data = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{ data: [50, 20, 2, 86, 71, 100] }]
  };
  return (
    <ScrollView style={{flex:1, padding:16}}>
      <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Dashboard</Text>
      <LineChart
        data={data}
        width={screenWidth-32}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#1f2937',
          backgroundGradientTo: '#111827',
          color: (opacity=1) => `rgba(255,255,255,${opacity})`
        }}
        bezier
        style={{ borderRadius:8 }}
      />
    </ScrollView>
  );
}
