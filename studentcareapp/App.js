
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,ScrollView } from 'react-native';
import { PaperProvider} from 'react-native-paper';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Footer';


export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
             <Home/>
             <Statusbar style="auto"/>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
