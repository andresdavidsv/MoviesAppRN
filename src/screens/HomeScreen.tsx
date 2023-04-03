import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';

export const HomeScreen = () => {
  const {moviesOnCinema, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View style={{marginTop: top + 20}}>
      <Carousel
        data={moviesOnCinema}
        renderItem={() => <MoviePoster movie={moviesOnCinema[6]} />}
        sliderWidth={600}
        itemWidth={300}
      />
    </View>
  );
};
