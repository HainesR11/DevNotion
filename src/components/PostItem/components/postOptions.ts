import { Share } from 'react-native';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import {
  faBookmark as faBookmarkSolid,
  faCircleXmark,
  faEyeSlash,
  faFlag,
  faShareFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import colors from '@DevEx/utils/styles/palette/colors';
import { THomeScreenDataItem } from '@DevEx/utils/types/types';

export const postOptions = ({
  item,
  saved,
  setSaved,
}: {
  item: THomeScreenDataItem;
  saved: boolean;
  setSaved: (value: boolean) => void;
}) => [
  saved
    ? {
        name: 'Unsave',
        icon: faBookmarkSolid,
        onPress: () => setSaved(!saved),
        color: colors.grey60,
        iconSize: 20,
      }
    : {
        name: 'Save',
        icon: faBookmarkRegular,
        onPress: () => setSaved(!saved),
        color: colors.grey60,
        iconSize: 20,
      },
  {
    name: 'Share Via',
    icon: faShareFromSquare,
    onPress: async () =>
      await Share.share({
        title: item.content,
        url: `www.DevNotion.com/test/post/${item.id}`,
      }),
    color: colors.grey60,
    iconSize: 20,
  },
  {
    name: 'Not Interested',
    icon: faEyeSlash,
    onPress: () => {},
    color: colors.grey60,
  },
  {
    name: `Unfollow ${item.author?.username}`,
    icon: faCircleXmark,
    onPress: () => {},
    color: colors.grey60,
  },
  {
    name: 'Report',
    icon: faFlag,
    onPress: () => {},
    color: colors.red,
  },
];
