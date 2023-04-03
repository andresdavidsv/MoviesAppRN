import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import movieDB from '../api/movieDB';

type Props = {};

export const HomeScreen = (props: Props) => {
  useEffect(() => {
    movieDB.get('/now_playing').then(res => console.log(res.data));
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
