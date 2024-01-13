import React from "react";
import { StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import {
	Header as HeaderRNE,
	HeaderProps,
	Icon,
	Button,
	Text,
} from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Header = (props) => {
	const docsNavigate = () => {
		Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
	};

	const playgroundNavigate = () => {
		Linking.openURL(`https://react-native-elements.js.org/#/${props.view}`);
	};
	return (
		<View>
			<HeaderRNE
       backgroundColor="#696969"
				leftComponent={
					<View style={styles.headerRight}>
          	<TouchableOpacity style={{marginLeft:30}}
            onPress={()=>{props.navigation.navigate('Home')}}>
							<Icon name="home" type="feather" color="white" />
              
						</TouchableOpacity>
						<TouchableOpacity style={styles.iconMargin}
              onPress={()=>{props.navigation.navigate('GroupChat')}}>
							<Icon name="message-square" type="feather" color="white" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.iconMargin}
            onPress={()=>{props.navigation.navigate('News')}}>
							<Icon name="alert-circle" type="feather" color="white" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.iconMargin}
            onPress={()=>{props.navigation.navigate('Contact')}}>
							<Icon name="user" type="feather" color="white" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.iconMargin}
            onPress={()=>{props.navigation.navigate('Watch')}}>
							<Icon name="tv" type="feather" color="white" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.iconMargin}>
							<Icon name="bell" type="feather" color="white" />
						</TouchableOpacity>
					</View>
				}
				rightComponent={
					<TouchableOpacity
						onPress={() => {
							props.navigation.navigate('menu')
						}}
					>
						<Icon name="menu" color="white" />
					</TouchableOpacity>
				}
				// centerComponent={{ text: "Header", style: styles.heading }}
			/>










		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000000",
		marginBottom: 20,
    marginRight:20,
		width: "100%",
		paddingVertical: 15,
	},
	heading: {
		color: "white",
		fontSize: 22,
		fontWeight: "bold",
	},
	headerRight: {
		display: "flex",
		flexDirection: "row",
		marginTop: 5,
	},
	subheaderText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
  iconMargin:{
    marginLeft:20,
  }
});

export default Header;
