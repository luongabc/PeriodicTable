import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import {getData} from '../navigation/Database/ModulFirebase'
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA=[
  {
    id:1,
    title:123
  },
  {
    id:1,
    title:123
  },
  {
    id:1,
    title:123
  },
  {
    id:1,
    title:123
  },
  {
    id:1,
    title:123
  },
  {
    id:1,
    title:123
  },
  {
    id:1,
    title:123
  },
  {
    id:1,
    title:123
  },
]
function Item({title}){
  return (
    <View style={styles.item}>
      <Text style={styles.item}>{title}</Text>
    </View>
  )
}
export default function HomeScreen() {
  //var data=getData();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA}
        renderItem={({item})=><Item title={item.title}/>}
        keyExtractor={item=>item.id}
        />
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop: 4,
  },
  item:{
    backgroundColor:'#f9c2ff',
    padding:20,
    marginVertical:8,
    marginHorizontal:16,
  },
  title:{
    fontSize:32
  }
})
HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
};

