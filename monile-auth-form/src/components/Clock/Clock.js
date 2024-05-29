import { Button, Image, Text, View, Pressable, TextInput, TouchableOpacity,ImageBackground } from 'react-native'
import styles from './style'
import { useState } from 'react'
import img from '../../../assets/clock.png'

export default function Clock() {

	return (
		<View style={styles.container}>
			<View style={styles.clock}>
				<ImageBackground source={img} resizeMode="cover" style={styles.image}>
					<View style={styles.hour}>
						<View style={styles.hr}></View>
					</View>
					<View style={styles.min}>
						<View style={styles.mn}></View>
					</View>
					<View style={styles.sec}>
						<View style={styles.sc}></View>
					</View>
				</ImageBackground>
			</View>
		</View>
	)
}