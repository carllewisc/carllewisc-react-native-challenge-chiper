import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Colors} from '../themes';

interface Header {
  container: ViewStyle;
  thumbnail: ImageStyle;
  body: ViewStyle;
  title: TextStyle;
  author: TextStyle;
  footer: ViewStyle;
  textFooter: TextStyle;
  row: ViewStyle;
}

export default StyleSheet.create<Header>({
  container: {
    width: Dimensions.get('window').width * 0.9,
    padding: 10,
    backgroundColor: Colors.secondary,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  thumbnail: {
    width: '30%',
    height: 80,
    borderRadius: 2.5,
  },
  body: {
    width: '65%',
  },
  title: {
    color: Colors.white,
    marginLeft: 16,
  },
  author: {
    color: Colors.white,
    marginLeft: 16,
    marginTop: 5,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textFooter: {
    color: Colors.white,
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
});
