import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native'
import { IOnboardingItem } from '../interfaces/IOnboardingItem'

type OnboardingItemProps = {
 data: IOnboardingItem
}

export const OnboardingItem = ({data}:OnboardingItemProps) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <Image
            style={[styles.image,{width, resizeMode:'contain'}]}
             source={data.image}
            />
            <View style={{flex: 0.3}}>
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <Text style={styles.description}>
                    {data.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',

    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center'
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64
    },
})
