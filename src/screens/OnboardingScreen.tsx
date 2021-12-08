import {useNavigation} from '@react-navigation/core';
import React, {useState, useRef} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  ViewToken,
} from 'react-native';
import {OnboardingItem} from '../components/OnboardingItem';
import {Paginator} from '../components/Paginator';
import {slidesData} from '../slides';

export const OnboardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const sliderRef = useRef(null);

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setCurrentIndex(viewableItems[0].index || 0);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slidesData}
          renderItem={({item}) => <OnboardingItem data={item} />}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={sliderRef}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Paginator data={slidesData} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
