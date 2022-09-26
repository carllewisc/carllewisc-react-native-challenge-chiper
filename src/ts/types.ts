import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParams = {
  Home: undefined;
  WebView: {
    title: string;
    url: string;
  };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParams>;
