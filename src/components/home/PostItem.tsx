import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

import {createUrlWebView} from '../../utils';
import PostStyles from '../../styles/PostStyles';
import {Colors} from '../../themes';

import {ChildrenProps} from '../../ts/interfaces';

interface Props {
  item: ChildrenProps;
}

const PostItem = ({item}: Props) => {
  const navigation = useNavigation();

  const onNavigateToWebView = () => {
    navigation.navigate('WebView', {
      url: createUrlWebView(item.data.permalink),
      title: item.data.title,
    });
  };

  return (
    <TouchableOpacity
      style={PostStyles.container}
      onPress={onNavigateToWebView}>
      <Image
        source={{uri: item.data.thumbnail}}
        style={PostStyles.thumbnail}
        resizeMode="cover"
      />

      <View style={PostStyles.body}>
        <Text style={PostStyles.title} numberOfLines={4}>
          {item.data.title}
        </Text>

        <Text style={PostStyles.author}>
          <Ionicons name={'person'} color={Colors.primary} /> {item.data.author}
        </Text>
      </View>

      <View style={PostStyles.footer}>
        <View style={PostStyles.row}>
          <MaterialIcons name={'score'} size={24} color={Colors.primary} />
          <Text style={PostStyles.textFooter}>{item.data.score}</Text>
        </View>

        <View style={PostStyles.row}>
          <MaterialIcons name={'comment'} size={24} color={Colors.primary} />
          <Text style={PostStyles.textFooter}>{item.data.num_comments}</Text>
        </View>

        <View style={PostStyles.row}>
          <Ionicons name={'calendar'} size={22} color={Colors.primary} />
          <Text style={PostStyles.textFooter}>
            {moment(item.data.created).fromNow()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;
