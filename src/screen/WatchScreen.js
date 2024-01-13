import * as React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { Input, Button, Text, Divider } from "react-native-elements";
import { Video, AVPlaybackStatus } from 'expo-av';
import Header from "../share/Header";


const WatchScreen = ({ navigation }) => {
	const video = React.useRef(null);
	const [status, setStatus] = React.useState({});

	return (
		<>
			<View style={{ padding: 15, backgroundColor: "#696969" }}>
				<Text style={{ color: "white" }}>Zambia Network</Text>
			</View>
			<Header navigation={navigation}></Header>
			<View style={{ padding: 10, backgroundColor: "#000000" }}>
				<Text h3 style={{ textAlign: "center", color: "white" }}>
					Watch
				</Text>
			</View>

			<View style={styles.container}>
				<Video
					ref={video}
					style={styles.video}
					source={{
						uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
					}}
					useNativeControls
					resizeMode="contain"
					isLooping
					onPlaybackStatusUpdate={(status) => setStatus(() => status)}
				/>

				<View style={styles.buttons}>
					<Button
						title={status.isPlaying ? "Pause" : "Play"}
						onPress={() =>
							status.isPlaying
								? video.current.pauseAsync()
								: video.current.playAsync()
						}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
	},
	video: {
		alignSelf: "center",
		width: 320,
		height: 200,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default WatchScreen;
