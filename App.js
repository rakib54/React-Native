import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import User from './components/User/User';

export default function App() {
  const [name, setName] = useState('')

  const [users, setUser] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <View style={styles.container}>
      <Text>Hello Sir I am Coming</Text>
      {
        users.map(user => <User user={user}></User>)
      }
      <Text style={{ fontSize: '40px' }}>{name}</Text>
      <Image
        source={{
          uri: 'https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/68657550_2939074412985070_8248171837960224768_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEwkbCOy6ETiJqlNSVrBMxFps41Ph5URK2mzjU-HlRErd9-zgVnJ4NGpl1a6YkpB_JNhyLBlNJkuKR_IPXPwvJG&_nc_ohc=fXYIgVnq_QUAX_PEdGg&_nc_ht=scontent.fdac24-1.fna&oh=5cf6b26f699a997bc5ea7faa2074c06a&oe=60A2DAD0',
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        onChangeText={text => setName(text)}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue=""
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
