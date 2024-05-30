import { View, ImageBackground } from 'react-native'
import styles from './style'
import { useEffect, useState } from 'react'
import img from '../../../assets/clock.png'

export default function Clock() {
	const [date, setDate] = useState()

	useEffect(() => {
		setInterval(() => {
			setDate(new Date())
		}, 1000)
	}, [date])

	return (
		<View style={styles.container}>
			<View style={styles.clock}>
				<ImageBackground source={img} resizeMode="cover" style={styles.image}>
					<View style={styles.hour}>
						<View style={[styles.hr, {
							transform: [{ rotateZ: `${new Date().getHours() * 30}deg` }],
						}]}></View>
					</View>
					<View style={styles.min}>
						<View style={[styles.mn, {
							transform: [{ rotateZ: `${new Date().getMinutes() * 6}deg` }],
						}]}></View>
					</View>
					<View style={styles.sec}>
						<View style={[styles.sc, {
							transform: [{ rotateZ: `${new Date().getSeconds() * 6}deg` }],
						}]}></View>
					</View>
				</ImageBackground>
			</View >
		</View >
	)
}

