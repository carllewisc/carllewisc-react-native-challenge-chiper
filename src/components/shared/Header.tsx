import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import {normalize} from '../../hooks/useResponsive';

import HeaderStyles from '../../styles/HeaderStyles';
import {Colors} from '../../themes';

interface HeaderProps {
  title: string;
  canGoBack?: boolean;
}

const Header = ({title, canGoBack = false}: HeaderProps) => {
  const navigation = useNavigation();

  const onGoBack = () => navigation.goBack();

  return (
    <View style={HeaderStyles.container}>
      {canGoBack && (
        <Ionicons
          name={'arrow-back'}
          size={30}
          color={Colors.primary}
          onPress={onGoBack}
        />
      )}
      <Text style={HeaderStyles.text}>{title}</Text>
    </View>
  );
};

export default Header;
