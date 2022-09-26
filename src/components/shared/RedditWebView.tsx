import React from 'react';
import WebView from 'react-native-webview';

interface Props {
  url: string;
}

const RedditWebView: React.FC<Props> = ({url}) => {
  return <WebView source={{uri: url}} />;
};

export default RedditWebView;
