import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../themes';

interface Header {
  container: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<Header>({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Dimensions.get('window').width * 0.03,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
  text: {
    flex: 1,
    marginRight: Dimensions.get('window').width * 0.03 * 2,
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '700',
  },
});
