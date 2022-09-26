import React, {useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';

import PostItem from '../components/home/PostItem';
import PostsTabBar from '../components/home/PostsTabBar';

// components
import Container from '../components/shared/Container';
import Header from '../components/shared/Header';
import WrapperList from '../components/shared/WrapperList';

// hooks
import useAxios from '../hooks/useAxios';

// styles
import styles from '../styles';
import {Colors} from '../themes';

// utils
import {filterByCategory} from '../utils';

const HomeScreen = () => {
  const [index, setIndex] = useState<number>(0);

  const {response, error, isLoading, fetchData} = useAxios({
    endpoint: 'r/pics/hot.json',
  });

  const onRefresh = () => {
    fetchData();
  };

  const onChangeIndex = (value: number) => {
    setIndex(value);
  };

  return (
    <Container>
      <Header title={'Reddit App Home'} />
      {isLoading && (
        <ActivityIndicator
          color={Colors.primary}
          size="large"
          style={styles.activity}
        />
      )}
      {error && <Text style={styles.textError}>Ocurrió un error</Text>}

      {response?.data?.children?.length && (
        <WrapperList
          data={filterByCategory(index, response?.data?.children)}
          renderItem={({item}) => <PostItem item={item} />}
          refreshing={isLoading}
          ListHeaderComponent={() => (
            <PostsTabBar index={index} onChange={onChangeIndex} />
          )}
          onRefresh={onRefresh}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
