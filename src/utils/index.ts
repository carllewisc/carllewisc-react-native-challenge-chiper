import moment from 'moment';
import config from '../config';
import { ChildrenProps } from '../ts/interfaces';

export const truncateText = (text: string) => {
  if (!text) {
    return '';
  }

  if (text.length > 50) {
    const subText = text.substring(0, 50);
    return `${subText}...`;
  }

  return text;
};

export const createUrlWebView = (path: string) =>
  `${config.WEB_VIEW_URL}${path}`;

export const filterByCategory = (value: number, data: ChildrenProps[]) => {
  switch (value) {
    case 0:
      return data.sort(function (a, b) {
        if (moment(a.data.score) < moment(b.data.score)) {
          return 1;
        }
        if (moment(a.data.score) > moment(b.data.score)) {
          return -1;
        }

        return 0;
      });
    case 1:
      return data.sort(function (a, b) {
        if (
          moment(a.data.created_utc).format() >
          moment(b.data.created_utc).format()
        ) {
          return 1;
        }
        if (
          moment(a.data.created_utc).format() <
          moment(b.data.created_utc).format()
        ) {
          return -1;
        }

        return 0;
      });
    case 2:
      return data.sort(function (a, b) {
        if (moment(a.data.likes) < moment(b.data.likes)) {
          return 1;
        }
        if (moment(a.data.likes) > moment(b.data.likes)) {
          return -1;
        }

        return 0;
      });
    case 3:
      return data.sort(function (a, b) {
        if (moment(a.data.score) < moment(b.data.score)) {
          if (moment(a.data.num_comments) < moment(b.data.num_comments)) {
            return 1;
          }
        }
        if (moment(a.data.score) > moment(b.data.score)) {
          if (moment(a.data.num_comments) > moment(b.data.num_comments)) {
            return -1;
          }
        }

        return 0;
      });
    default:
      break;
  }
};
