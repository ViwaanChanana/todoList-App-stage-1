  import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/task';

export default function App() {
  return (
    <View style={styles.container}>
     {/* Part 1 */}
     
     <View style ={styles.tasksWrapper}> 

     <Text style={styles.sectionTitle}> Today's Task</Text>

    <View style={styles.items}>

{/* task view area */}

<Task text={'Task1'}/>
<Task text ={'Task2'}/>


    </View>
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
 
  },

  tasksWrapper: {
    paddingTop : 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight: "bold"
  },
  items:        {
    marginTop: 30,
  },
});
