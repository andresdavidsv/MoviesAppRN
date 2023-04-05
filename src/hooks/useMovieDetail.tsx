import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface movieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {
  const [state, setState] = useState<movieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });
  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {...state};
};
