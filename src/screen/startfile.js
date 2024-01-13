import * as React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { Input, Button, Text, Divider } from "react-native-elements";
import Header from "../share/Header";

const GroupChatScreen = ({ navigation }) => {
	return (
		<>
			<View style={{ padding: 15, backgroundColor: "#696969" }}>
				<Text style={{ color: "white" }}>Zambia Network</Text>
			</View>
			<Header navigation={navigation}></Header>
		</>
	);
};

const styles = StyleSheet.create({});

export default GroupChatScreen;
