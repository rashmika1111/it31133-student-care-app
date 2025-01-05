import { StyleSheet,View} from "react-native";
import { Text,Divider,Button } from "react-native";
export default function Home(){

    return(
    <>
     <View style={styles.header}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
    <View>

    </View>
    </>
    );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});
