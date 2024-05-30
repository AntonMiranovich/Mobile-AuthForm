import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    clock: {
        width: 350,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
    },
    image: {
        width: 350,
        height: 350,
    },
    hour: {
        flex: 1,
        position: 'absolute'
    },
    min: {
        flex: 1,
        position: 'absolute'
    },
    sec: {
        flex: 1,
        position: 'absolute'
    },
    hr: {
        width: 6,
        height: 100,
        backgroundColor: 'red',
        left: 172,
        top: 80,
        borderRadius: 10,
        zIndex: 5,
    },
    mn: {
        width: 4,
        height: 120,
        backgroundColor: 'black',
        left: 173,
        top: 60,
        borderRadius: 10,
        zIndex: 6
    },
    sc: {
        width: 2,
        height: 140,
        backgroundColor: 'green',
        left: 173,
        top: 40,
        borderRadius: 10,
        zIndex: 6
    }
})

export default styles