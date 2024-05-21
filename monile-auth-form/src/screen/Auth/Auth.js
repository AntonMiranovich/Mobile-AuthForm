
import { Button, Image, Text, View, Pressable, TextInput } from 'react-native'
import styles from './style'
import { useState } from 'react'

export default function Auth({ navigation }) {
	const [valueInp, setValueInp] = useState({
		email: '',
		password: ''
	})

	const addVall = (vall, name) => {
		setValueInp({ ...valueInp, [name]: vall })
	}

	const checkInps = () => {
		try {
			if (!valueInp.email.trim()) throw new Error('Empty Email')
			if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.{1}[a-z]{2,4}$/gm.test(valueInp.email)) throw new Error('Email is invalid')
			if (!valueInp.password.trim()) throw new Error('Empty Passwor')
			if (valueInp.password.length < 8) throw new Error('The password is too short')
			if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/gm.test(valueInp.password)) throw new Error('Password is invalid');

			console.log(`Success ${valueInp}`);
		} catch (error) {
			console.log(error.message);
		}
	}
	return (
		<View style={styles.container}>
			<TextInput style={styles.inp} onChangeText={(vall) => addVall(vall, 'email')} placeholder='Email' />
			<TextInput style={styles.inp} onChangeText={(vall) => addVall(vall, 'password')} placeholder='Password' secureTextEntry={true} />
			<Text>Don’t have an account ?<Text onPress={() => navigation.navigate('Sign up')}>Sign Up</Text> </Text>
			<Button title='Login' onPress={checkInps} />
		</View>
	)
}