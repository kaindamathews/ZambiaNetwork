import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input,Button,Text,Divider } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';


const SignupScreen = ({navigation })=>{

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
return (
 
  <View style={styles.container}>

    <Text h2 style={styles.textColor}>Zambia Network</Text>
    <Text h4 style={{color:'#FEFEFE',textAlign:'left', }}>Login</Text>
		<Input label="Email" placeholder="Enter Your Email"  />
		<Input label="Password" placeholder="Password" />
		
    <Button
			title="SignUp"
			buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
			containerStyle={{
				width:400,
				marginHorizontal: 50,
				marginVertical: 10,
			}}
			titleStyle={{ color: "white", marginHorizontal: 20 }}
		/>

 <Text h4>Or</Text>
   <Divider style={{ height:4, width:400}}/>
  

   <Button
			title="Login"
			buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
			containerStyle={{
				width:400,
				marginHorizontal: 50,
				marginVertical: 10,
			}}
			titleStyle={{ color: "white", marginHorizontal: 20 }}
      onPress={()=>{navigation.navigate('Login')}}
    
		/>


	</View>
  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlign:{
   textAlign:'left',
  },
  textColor:{
    color:'#FEFEFE',
    fontStyle:"italic",
  },
  input:{
    color:"#FEFEFE",

  }

  
  
});

export default SignupScreen;

