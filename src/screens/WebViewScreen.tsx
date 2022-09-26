import React from 'react';

// components
import Container from '../components/shared/Container';
import RedditWebView from '../components/shared/RedditWebView';
import Header from '../components/shared/Header';

// utils
import {truncateText} from '../utils';

interface Props {
  route: {
    params: {
      url: string;
      title: string;
    };
  };
}

const WebViewScreen = ({route}: Props) => {
  const {url, title} = route.params;

  return (
    <Container>
      <Header title={truncateText(title)} canGoBack />
      <RedditWebView url={url} />
    </Container>
  );
};

export default WebViewScreen;
