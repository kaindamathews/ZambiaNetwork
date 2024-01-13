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
			{/* this is header */}
			<Header navigation={navigation}></Header>

			<View style={{ padding: 10, backgroundColor: "#000000" }}>
				<Text h3 style={{ textAlign: "center", color: "white" }}>
					Zambia Network Group
				</Text>
			</View>

			<View style={styles.containerMain}>
				<Text style={{ color: "#000000" }}>Group Chat</Text>

				<View style={{ marginTop: 10, padding: 10 }}>
					<View style={styles.box}>
						<Image
							style={styles.imageProfile}
							source={require("../../assets/image/two.jpg")}
						/>
						<Text h4 style={{marginLeft: 25}} >
					
            You can find (just about) anything on Medium — apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new?
						</Text>
					</View>

					<View style={styles.box}>
						<Image
							style={styles.imageProfile}
							source={require("../../assets/image/two.jpg")}
						/>
						<Text h4 style={{marginLeft: 25}}>
            Out of nothing, something.
						</Text>
					</View>
				</View>

				<View style={styles.bottomView}>
					<Input
						placeholder="Typing Here........"
						labelStyle={{ color: "#FEFEFE" }}
						placeholderTextColor="white"
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
	},
	bottomView: {
		width: "100%",
		backgroundColor: "#696969",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute", //Here is the trick
		bottom: 0, //Here is the trick
	},
	Input: {
		padding: 10,
	},

	box: {
		flexDirection: "row",
		justifyContent:'space-evenly',
    padding:10
	},
	imageProfile: {
		borderRadius: 10,
		width: 50,
		height: 50,
	},
});

export default GroupChatScreen;
