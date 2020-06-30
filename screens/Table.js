import React, {Component} from "react";
import {
	View,
	StyleSheet,
  Text,
  Dimensions,
  Button
} from "react-native";
import Element from "./Element";

export function Table({navigation:{navigate}}){
	return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={{color: "white", fontSize: Dimensions.get('window').height / 20, fontWeight: "bold"}}>Periodic Table</Text>
         {/*Nút chuyển màn hình*/}
        <Button title="Go back" color="#444" 
        onPress={()=> navigate('HomeScreen',{})}/>
      </View>
      <View style={styles.table}>
        <View style={styles.column}>
          <Element number={1} text="H"/>
          <Element number={3} text="Li"/>
          <Element number={11} text="Na"/>
          <Element number={19} text="K"/>
          <Element number={37} text="Rb"/>
          <Element number={55} text="Cs"/>
          <Element number={87} text="Fr"/>
          <Space />
          <Space />
        </View>
        <View style={styles.column}>
          <Element number={4} text={"Be"}/>
          <Element number={12} text={"Mg"}/>
          <Element number={20} text={"Ca"}/>
          <Element number={38} text={"Sr"}/>
          <Element number={56} text={"Ba"}/>
          <Element number={88} text={"Ra"}/>
          <Space />
          <Space />
        </View>
        <View style={styles.column}>
          <Element number={21} text="Sc"/>
          <Element number={39} text="Y"/>
          <Space />
          <Space />
          <Space />
          <Space />
        </View>
        <View style={styles.column}>
          <Element number={22} text="Ti"/>
          <Element number={40} text="Zr"/>
          <Element number={72} text="Hf"/>
          <Element number={104} text="Rf"/>
          <Element number={57} text="La"/>
          <Element number={89} text="Ac"/>
        </View>
        <View style={styles.column}>
          <Element number={23} text="V"/>
          <Element number={41} text="Nb"/>
          <Element number={73} text="Ta"/>
          <Element number={105} text="Dd"/>
          <Element number={58} text="Ce"/>
          <Element number={90} text="Th"/>
        </View>
        <View style={styles.column}>
          <Element number={24} text="Cr"/>
          <Element number={42} text="Mo"/>
          <Element number={74} text="W"/>
          <Element number={106} text="Sg"/>
          <Element number={59} text="Pr"/>
          <Element number={91} text="Pa"/>
        </View>
        <View style={styles.column}>
          <Element number={25} text="Mn"/>
          <Element number={43} text="Tc"/>
          <Element number={75} text="Re"/>
          <Element number={107} text="Bh"/>
          <Element number={56} text="Nd"/>
          <Element number={88} text="U"/>
        </View>
        <View style={styles.column}>
          <Element number={26} text="Fe"/>
          <Element number={44} text="Ru"/>
          <Element number={76} text="Os"/>
          <Element number={107} text="Hs"/>
          <Element number={57} text="Pm"/>
          <Element number={89} text="Np"/>
        </View>
        <View style={styles.column}>
          <Element number={27} text="Co"/>
          <Element number={45} text="Rh"/>
          <Element number={77} text="Ir"/>
          <Element number={109} text="Mt"/>
          <Element number={62} text="Sm"/>
          <Element number={94} text="Pu"/>
        </View>
        <View style={styles.column}>
          <Element number={28} text="Ni"/>
          <Element number={45} text="Pd"/>
          <Element number={78} text="Pt"/>
          <Element number={110} text="Ds"/>
          <Element number={63} text="Eu"/>
          <Element number={95} text="Am"/>
        </View>
        <View style={styles.column}>
          <Element number={29} text="Cu"/>
          <Element number={47} text="Ag"/>
          <Element number={79} text="Au"/>
          <Element number={111} text="Rg"/>
          <Element number={64} text="Gd"/>
          <Element number={96} text="Cm"/>
        </View>
        <View style={styles.column}>
          <Element number={30} text="Zn"/>
          <Element number={48} text="Cd"/>
          <Element number={80} text="Hg"/>
          <Element number={112} text="Cn"/>
          <Element number={65} text="Tb"/>
          <Element number={97} text="Bk"/>
        </View>
        <View style={styles.column}>
          <Element number={5} text="B"/>
          <Element number={13} text="Al"/>
          <Element number={31} text="Ga"/>
          <Element number={49} text="In"/>
          <Element number={81} text="Tl"/>
          <Element number={113} text="Nh"/>
          <Element number={66} text="Dy"/>
          <Element number={97} text="Cf"/>
        </View>
        <View style={styles.column}>
          <Element number={6} text="C"/>
          <Element number={14} text="Si"/>
          <Element number={32} text="Ge"/>
          <Element number={50} text="Sn"/>
          <Element number={82} text="Pb"/>
          <Element number={114} text="Fl"/>
          <Element number={67} text="Ho"/>
          <Element number={99} text="Es"/>
        </View>
        <View style={styles.column}>
          <Element number={7} text="N"/>
          <Element number={15} text="P"/>
          <Element number={33} text="As"/>
          <Element number={51} text="Sb"/>
          <Element number={83} text="Bi"/>
          <Element number={115} text="Mc"/>
          <Element number={68} text="Er"/>
          <Element number={100} text="Fm"/>
        </View>
        <View style={styles.column}>
          <Element number={8} text="O"/>
          <Element number={16} text="S"/>
          <Element number={34} text="Se"/>
          <Element number={52} text="Te"/>
          <Element number={84} text="Po"/>
          <Element number={116} text="Lv"/>
          <Element number={59} text="Tm"/>
          <Element number={101} text="Md"/>
        </View>
        <View style={styles.column}>
          <Element number={9} text="F"/>
          <Element number={17} text="Cl"/>
          <Element number={35} text="Br"/>
          <Element number={53} text="I"/>
          <Element number={85} text="At"/>
          <Element number={117} text="Ts"/>
          <Element number={70} text="Yb"/>
          <Element number={102} text="No"/>
        </View>
        <View style={styles.column}>
          <Element number={2} text="He"/>
          <Element number={10} text="Ne"/>
          <Element number={18} text="Ar"/>
          <Element number={36} text="Kr"/>
          <Element number={54} text="Xe"/>
          <Element number={86} text="Rn"/>
          <Element number={118} text="Og"/>
          <Element number={71} text="Lu"/>
          <Element number={103} text="Lr"/>
        </View>
      </View>
    </View>
	);
}

function Space() {
  return (
    <View style={styles.space} />
  )
}

const styles=StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#213335",
  },
  table: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Dimensions.get('window').width / 20,
    height: Dimensions.get('window').height / 10 * 0.9,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "white"
  },
  column: {
    flexDirection: "column",
    justifyContent: "flex-end",
    width: Dimensions.get('window').width / 18,
    height: Dimensions.get('window').height / 10 * 9,
  },
  space: {
    width: "100%",
    height: "10%",
    backgroundColor: "transparent"
  }
})