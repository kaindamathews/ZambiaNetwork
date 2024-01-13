import * as React from "react";
import { StyleSheet, View, TouchableOpacity} from "react-native";
import { Input, Button, Divider, Text}  from "react-native-elements";

const Menu = ({ navigation }) => {
	return (
		<View style={styles.container}>
			
      <TouchableOpacity>
			
      <Text h1 style={{color:'white'}}>Group Chat</Text>
    </TouchableOpacity>

    <TouchableOpacity>
			
				<Text h1 style={{color:'white'}}>Message</Text>
			</TouchableOpacity>

      <TouchableOpacity>
				<Text h1 style={{color:'white'}}>News</Text>
			</TouchableOpacity>

      <TouchableOpacity>
				<Text h1 style={{color:'white'}}>News</Text>
			</TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
				<Text h1 style={{color:'white'}}>Logout</Text>
			</TouchableOpacity>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#030303",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Menu;
