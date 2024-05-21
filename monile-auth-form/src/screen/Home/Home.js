import { Button, Image, Text, View, Pressable } from 'react-native'
import styles from './style'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title='Get started' onPress={() => navigation.navigate('Sign in')} />
        </View>
    )
}