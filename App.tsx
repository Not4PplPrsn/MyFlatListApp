import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button, } from 'react-native';
import { useState } from "react";

const [users, setUsers] = useState([
  { id: "1", name: "Siya", age: 25 , favColour: 'red'}, 
  { id: "2", name: "Caryn", age: 30, favColour: 'pink' },
  { id: "3", name: "Jaco", age: 22, favColour: 'maroon' },
  { id: "4", name: "Mihle", age: 28, favColour: 'navy' },
]);
const UserItem = ({ name, age, favColour }: { name: string; age: number; favColour: string }) => (
  <View style={styles.item}>
    <Text style={styles.name}>Name:{name}</Text>
    <Text style={styles.age}>Age: {age}</Text>
    <Text style={styles.name}>Favourite Colour: {favColour}</Text>
  </View>
);
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 My First FlatList</Text>
      <FlatList
	      data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem name={item.name} age={item.age} favColour= {item.favColour} />}
      />
    </View>
  );
  const [newName, setNewName]= useState('')
    const[newAge, setNewAge]= useState('')
    const[newFavColour, setNewFavColour] = useState('')
    return(
      <View>
        <TextInput style={styles.title}>Please enter the new details😜</TextInput>
        <TextInput style={styles.name}>What is your name?:{newName}</TextInput>
        <TextInput style={styles.age}>How decrepit are you?:{newAge}</TextInput>
        <TextInput style= {styles.name}>What colour do you like?:{newFavColour}</TextInput>
        <Button></Button>
      </View>
      
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36e9c2ff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  item: {
    backgroundColor: "#2ca0d6ff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  age: {
    fontSize: 14,
    color: "#555",
  },
});


