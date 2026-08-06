import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function AppScrollView() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
      style={styles.safeArea}
      // contentContainerStyle={styles.content}
      >
      <ScrollView style={styles.container}>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <StatusBar style="auto" />    
        </ScrollView>  
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    
  },
  // conteúdo da ScroWview
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  content : {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
  }
});
