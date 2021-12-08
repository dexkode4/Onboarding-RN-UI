import { StyleSheet, Text, View } from 'react-native'

export const NextButton = () => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = (size / 2) - (strokeWidth / 2)
    return (
        <View>
            <Text>Next button</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
