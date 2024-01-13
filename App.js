import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import LoginScreen from "./src/screen/LoginScreen";
import SignupScreen from "./src/screen/SignupScreen";
import Menu from "./src/share/Menu";
import GroupChatScreen from "./src/screen/GroupChatScreen";
import NewsScreen from "./src/screen/NewsScreen";
import ContactScreen from "./src/screen/ContactScreen";
import WatchScreen from "./src/screen/WatchScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{
						title: "Login",
						headerStyle: {
							backgroundColor: "#f4511e",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="SignUp"
					component={SignupScreen}
					options={{
						title: "SignUp",
						headerStyle: {
							backgroundColor: "#f4511e",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="menu"
					component={Menu}
					options={{
						headerStyle: {
							backgroundColor: "#696969",
						},
						headerTitleStyle: {
							fontWeight: "bold",
							alignSelf: "center",
							flex: 1,
						},
						title: "Menu",

						headerShown: true,
					}}
				/>

				<Stack.Screen
					name="GroupChat"
					component={GroupChatScreen}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="News"
					component={NewsScreen}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="Contact"
					component={ContactScreen}
					options={{
						headerShown: false,
					}}
				/>


        
				<Stack.Screen
					name="Watch"
					component={WatchScreen}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
