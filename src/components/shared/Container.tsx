import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from '../../styles';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
