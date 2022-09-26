import React, {useState} from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {Colors} from '../../themes';

interface Props {
  index: number;
  onChange: (value: number) => void;
}

const PostsTabBar = ({index, onChange}: Props) => {
  const [routes] = useState([
    {key: 'top', title: 'Top'},
    {key: 'new', title: 'New'},
    {key: 'hot', title: 'Hot'},
    {key: 'controversial', title: 'Controversial'},
  ]);

  const renderScene = SceneMap({
    top: () => null,
    new: () => null,
    hot: () => null,
    controversial: () => null,
  });

  const onChangeIndex = (value: number) => {
    onChange(value);
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={onChangeIndex}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          style={styles.tabStyle}
          renderLabel={({route, focused}) => (
            <Text
              // @ts-ignore
              style={styles.textLabel(focused)}>
              {route.title}
            </Text>
          )}
        />
      )}
      initialLayout={{width: Dimensions.get('screen').width}}
    />
  );
};

export default PostsTabBar;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: Colors.backgroundTabBar,
  },
  indicator: {backgroundColor: Colors.primary},
  // @ts-ignore
  textLabel: (isActive: boolean) => ({
    fontSize: 14,
    color: isActive ? Colors.primary : Colors.greyOpacity,
  }),
  activity: {
    marginTop: 14,
  },
});
