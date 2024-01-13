import * as React from "react";
import { StyleSheet, View,FlatList,Image} from "react-native";
import { Input, Button, Text, Divider } from "react-native-elements";
import Header from "../share/Header";
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = ({ navigation }) => {
	const images = [
		// "https://source.unsplash.com/1024x768/?nature",
		// "https://source.unsplash.com/1024x768/?water",
		// "https://source.unsplash.com/1024x768/?girl",
		// "https://source.unsplash.com/1024x768/?tree",
		require("../../assets/image/one.jpg"),
		require("../../assets/image/five.jpg"),
		require("../../assets/image/four.jpg"),
		require("../../assets/image/three.jpg"),
		require("../../assets/image/two.jpg"),
	];


  const newsData = [
    {id:1,image:require("../../assets/image/one.jpg"), title:'try our Best in life',link:'facebook.com'},
    {id:2,image:require("../../assets/image/five.jpg"), title:'try our Best in life',link:'facebook.com'},
    {id:3,image:require("../../assets/image/three.jpg"), title:'try our Best in life',link:'facebook.com'},
    {id:4,image:require("../../assets/image/two.jpg"), title:'try our Best in life',link:'facebook.com'},
    {id:5,image:require("../../assets/image/two.jpg"), title:'try our Best in life',link:'facebook.com'},
  ];


  const Item = ({ title,image }) => (
    <View style={styles.box}>
       <Image
          style={styles.image}
          source={image}
        />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} />
  );

	return (
		<>
    <View style={{padding:15, backgroundColor:'#696969'}}>
      <Text style={{color:'white'}}>Zambia Network</Text>
    </View>
    <Header navigation={navigation}></Header>
			<View>
				<SliderBox
					images={images}
					sliderBoxHeight={300}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          autoplay
          circleLoop
          currentImageEmitter={index =>(`current pos is: ${index}`)}
				/>
			</View>

<View style={{padding:4}}>
 <Text h3>News Feeds</Text>
 <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
</View>






		</>
	);
};

const styles = StyleSheet.create({
  box:{
    padding:10,
    shadowColor:'#000000'
  },
  image:{
    width:200,
    height:100,
  }
});

export default HomeScreen;
