import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';


export default function App() {

  const [counter, setCounter] = useState(0)
  const [changeAge, setChangeAge] = useState({ nom: "Pio", age: 25 })

  const tab = [{ id: 0, prenom: "Pierre", nom: "Tembremande", age: "21 ans", passion: "ecrire" }]
  const affichageTab = tab.map((info) =>
    <View key={info.id}>
      <View style={styles.flexContainer}>
        <Text style={styles.title}>Prenom</Text>
        <Text style={styles.value}>{info.prenom}</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.title}>Nom</Text>
        <Text style={styles.value}>{info.nom}</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.title}>Age</Text>
        <Text style={styles.value}>{info.age}</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.title}>Passion</Text>
        <Text style={styles.value}>{info.passion}</Text>
      </View>

    </View>
  )

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];


  const Personne = ({ name, children }) => <Text>Je m'appelle{name}, {children != undefined && "\nje suis un " + children} {name == "Pio" && " et le millénaire est mon age"}</Text>;

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.header}>
          <Text>I'm The head</Text>
        </View>

        <Text>{affichageTab}</Text>
        <Personne name="Pio"></Personne>
        <Text>{counter}</Text>
        <StatusBar style="auto" />

        <View style={styles.flexContainer}>

          <Button
            onPress={() => setCounter(counter - 1)}
            title="-"
            color="#841584"
            disabled={counter === 0}
          />

          <Button
            onPress={() => setCounter(counter + 1)}
            title="+"
            color="#841584"
          />

        </View>

        <Text>Je m'appelle{changeAge.nom} et j'ai {changeAge.age} ans</Text>

        <Button
          onPress={() => setChangeAge((prevState) => ({ ...prevState, age: Math.floor(Math.random() * 1000) }))}
          title="Change l'age"
          color="#841584"
        />

        <View>
          <View>
            <Text>Nom : </Text>
            <TextInput
              placeholder="Indiquez votre nom"
            />
          </View>

          <View>
            <Text>Age : </Text>
            <TextInput
              placeholder="Indiquez votre âge"
              keyboardType='numeric'
            />
          </View>

        </View>

        <View style={styles.footer}>
          <Text>I'm The foot</Text>

        </View>

      </ScrollView>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Button title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
      />

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: 'green',
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  value: {
    textAlign: 'right',
  },
  footer: {
    padding: 20,
    backgroundColor: 'red',
    fontSize: 20
  }
});
