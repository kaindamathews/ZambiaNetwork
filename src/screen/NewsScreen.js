import * as React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { Input, Button, Text, Divider,SearchBar } from "react-native-elements";
import Header from "../share/Header";

const NewsScreen = ({ navigation }) => {


   
	return (
		<>
			<View style={{ padding: 15, backgroundColor: "#696969" }}>
				<Text style={{ color: "white" }}>Zambia Network</Text>
			</View>
			<Header navigation={navigation}></Header>
      <View style={{ padding: 10, backgroundColor: "#000000" }}>
				<Text h3 style={{ textAlign: "center", color: "white" }}>
					News
				</Text>
			</View>
     

      <View style={{backgroundColor:'white'}}>

      <SearchBar
      style={{padding:0}}
      placeholder="Type Here..."
     
     />
    

      </View>
     




		</>
	);
};

const styles = StyleSheet.create({});

export default NewsScreen;
