import {Animated, StyleSheet, useWindowDimensions, View} from 'react-native';
import React from 'react';
import { IOnboardingItem } from '../interfaces/IOnboardingItem';

type PaginatorProps = {
    data: Array<IOnboardingItem>,
    scrollX:  Animated.Value
   }

export const Paginator = ({data,scrollX}:PaginatorProps) => {
    const {width} = useWindowDimensions()
  return (
    <View style={styles.container}>
      {
          data.map((_, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
              const dotWidth = scrollX.interpolate(
                  {
                      inputRange,
                      outputRange: [10, 30, 10],
                      extrapolate:'clamp'
                  }
              )

              const opacity = scrollX.interpolate(
                  {
                      inputRange,
                      outputRange: [0.3,1, 0.3],
                      extrapolate:'clamp'
                  }
              )
              return (
                  <Animated.View style={[styles.dot, {width: dotWidth, opacity}]} key={i.toString()}/>
              )
          })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection:'row'
  },
  dot:{
    height: 10,
    borderRadius: 5,
    backgroundColor: '#493d8a',
    marginHorizontal: 8
  }
});
