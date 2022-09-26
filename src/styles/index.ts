import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {Colors} from '../themes';

interface Styles {
  container: ViewStyle;
  activity: ViewStyle;
  textError: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  activity: {
    marginTop: 30,
  },
  textError: {
    fontSize: 20,
    color: Colors.error,
  },
});
