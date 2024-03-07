import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import CustomNavBar from './NavBar'; // Import the CustomNavBar component

export default function Form({ navigation }) {
  const [smoke, setSmoke] = React.useState('');
  const [drink, setDrink] = React.useState('');
  const [biologicalSex, setBiologicalSex] = React.useState('');
  const [familyCancerHistory, setFamilyCancerHistory] = React.useState('');
  const [age, setAge] = React.useState('');

  const validateAndNavigate = () => {
    const isYesOrNo = (text) => text.toLowerCase().trim() === 'yes' || text.toLowerCase().trim() === 'no';
    const isMaleOrFemale = (text) => text.toLowerCase().trim() === 'male' || text.toLowerCase().trim() === 'female';
    const isNumeric = (text) => /^\d+$/.test(text);

    if (
      isYesOrNo(smoke) &&
      isYesOrNo(drink) &&
      isMaleOrFemale(biologicalSex) &&
      isYesOrNo(familyCancerHistory) &&
      isNumeric(age)
    ) {
      navigation.navigate('LoadingPage');
    } else {
      // Handle the error case. For example:
      alert('Please ensure all answers are correct.');
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.topTile}>
        <Text style={styles.title}>Mole<Text style={styles.boldText}>Detect</Text></Text>
      </View>
      <View style={styles.overlayTile}>
        <View style={styles.content}>
          <Text style={styles.questionnaireText}>Please complete this short questionnaire:</Text>
          <View style={styles.inputField}>
            <Text style={styles.questionText}>Do you smoke? (Yes or No)</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Yes or No"
              onChangeText={(text) => setSmoke(text)}
              value={smoke}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.questionText}>Do you drink? (Yes or No)</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Yes or No"
              onChangeText={(text) => setDrink(text)}
              value={drink}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.questionText}>Biological Sex? (Male or Female)</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Male or Female"
              onChangeText={(text) => setBiologicalSex(text)}
              value={biologicalSex}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.questionText}>Family Cancer History (Yes or No)</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Yes or No"
              onChangeText={(text) => setFamilyCancerHistory(text)}
              value={familyCancerHistory}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.questionText}>Age?</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Age"
              onChangeText={(text) => setAge(text)}
              value={age}
              keyboardType="numeric"
            />
          </View>
          <TouchableHighlight
          style={[styles.button, styles.submitButton]}
          underlayColor="#F0D0CC"
          onPress={validateAndNavigate} // Use the validation function here
          >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
        </View>
      </View>
      <CustomNavBar navigation={navigation} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topTile: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    height: '16.67%', // 1/6th of the screen
    justifyContent: 'center',
    paddingLeft: 20,
  },
  overlayTile: {
    flex: 1, // Stretch to the bottom
    width: '100%',
    backgroundColor: '#E9DBD7', // White background
    borderTopLeftRadius: 30, // Round the top-left corner
    borderTopRightRadius: 30, // Round the top-right corner
    padding: 20,
  },
  title: {
    fontSize: 50,
    color: '#17364B', // Dark blue color
    textAlign: 'center',
    marginTop: 25,
  },
  boldText: {
    fontWeight: 'bold',
  },
  content: {
    color: '#667799',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  questionnaireText: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 35, // Increase spacing before questions
    color: '#17364B', // Dark blue color
  },
  inputField: {
    width: '80%',
    marginBottom: 25, // Increase spacing between questions
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#17364B', // Dark blue color
  },
  textInput: {
    width: '100%',
    height: 25,
    borderBottomWidth: 1,
    borderColor: '#667799',
  },
  button: {
    borderRadius: 30,
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: '#667799',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
});
