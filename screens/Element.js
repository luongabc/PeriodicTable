import React,{Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Dimensions} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Modal from 'react-native-modal';

export default function Element(props){

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [data, setData] = React.useState([]);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return(
    <TouchableOpacity
      style={styles.Element}
      activeOpacity={0.5}
      onPress={() => {
        toggleModal();
        fetch('https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=' + props.number)
        .then((response) => response.json())
        .then((json) => {
          setData(json)
        })
        .catch((error) => {
          console.error(error);
        })
      }}
    >
      <View style={styles.ElementAtomic}>
        <Text style={{fontSize: 9, color: "#444"}}>{props.number}</Text>
      </View>
      <View style={styles.ElementSymbol}>
        <Text style={{fontSize: 17, fontWeight: "bold", color: "#444"}}>{props.text}</Text>
      </View>
      <Modal
        isVisible={isModalVisible}
        deviceHeight={Dimensions.get('window').height}
      >
        <View style={styles.popup}>
          <View style={{flex:1, flexDirection: "row", alignItems: "center"}}>
            <View style={[styles.card, {backgroundColor: "white"}]}>
              <View style={{flex: 1, justifyContent: "space-around", alignItems: "center"}}>
                <Text style={{fontSize: 20, color: "#555"}}>{props.number}</Text>
                <Text style={{fontSize: 90, fontWeight: "bold", color: "#555"}}>{data.symbol}</Text>
                <Text style={{fontSize: 15, color: "#555"}}>{data.electronicConfiguration}</Text>
              </View>
            </View>
            <View style={[styles.info, {borderColor: "#"+data.cpkHexColor}]}>
              <Text style={{fontSize: 25, fontWeight: "bold", color: "#444"}}>{data.name}</Text>
              <Text>{"Bonding type: " + data.bondingType}</Text>
              <Text>{"Year discovered: " + data.yearDiscovered}</Text>
              <Text>{"Melting point(°C): " + data.meltingPoint}</Text>
              <Text>{"Boiling point(°C): " + data.boilingPoint}</Text>
              <Text>{"Standard state: " + data.standardState}</Text>
            </View>
          </View>
          <Button title="Close" color="#444" onPress={toggleModal} />
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Element: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    width: "100%",
    height: "10%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#444"
  },
  ElementAtomic: {
    height: "20%",
    alignItems: "flex-end",
    paddingRight: 2,
  },
  ElementSymbol: {
    alignItems: "center",
    paddingBottom: 2
  },
  card: {
    flexDirection: "column",
    width: Dimensions.get('window').height*0.5,
    height: Dimensions.get('window').height*0.5,
    borderRadius: 20,
    borderWidth: 2
  },
  popup: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: "10%",
  },
  info: {
    flex: 1,
    marginHorizontal: Dimensions.get('window').width*0.05,
    borderBottomWidth: 15
  }
})

