import React, { useState } from 'react';
import { Image, Share, TouchableOpacity, View } from 'react-native';
import {
  faShare,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import colors from '@DevEx/utils/styles/palette/colors';
import { THomeScreenDataItem, TUserInfo } from '@DevEx/utils/types/types';

import { Text } from '../Text/text';

import createStyles from './CommentItem.styles';

const CommentItem = ({
  item,
  user,
}: {
  item: THomeScreenDataItem;
  user?: TUserInfo;
}) => {
  const styles = useThemedStyles(createStyles);

  const [likedLength, setLikedLength] = useState(item.likes.length);

  const [liked, setLiked] = useState<Boolean>(
    item.likes.includes(user?.username as string),
  );

  return (
    <View style={styles.PostItemContainer}>
      <View style={[styles.PostItemUserContainer, styles.PostItemCenter]}>
        <Image
          source={require('@DevEx/assets/me.jpg')}
          style={styles.PostItemImage}
        />
        <View>
          <Text bold text={item.user.name} />
          <Text textStyle={styles.PostItemUsername} text={item.user.username} />
        </View>
      </View>
      <View style={styles.PostItemDataConatiner}>
        <Text text={item.data.content} />
      </View>
      <View style={[styles.PostItemCommentInfo, styles.PostItemCenter]}>
        <Text
          textStyle={styles.PostItemUsername}
          text={`${item.comments.length} comments`}
        />
        <View style={[styles.PostItemShareInfo, styles.PostItemCenter]}>
          <TouchableOpacity
            onPress={() => {
              setLikedLength(liked ? likedLength - 1 : likedLength + 1);
              setLiked(!liked);
            }}
            style={[styles.PostItemShareItem, styles.PostItemCenter]}
          >
            <Text text={likedLength} />
            <FontAwesomeIcon
              color={liked ? colors.green : colors.grey50}
              icon={faThumbsUp}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDislikedLength(
                disliked ? dislikedLength - 1 : dislikedLength + 1,
              );
              setDisliked(!disliked);
            }}
            style={[styles.PostItemShareItem, styles.PostItemCenter]}
          >
            <Text text={dislikedLength} />
            <FontAwesomeIcon
              color={disliked ? colors.red : colors.grey50}
              icon={faThumbsDown}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // TODO: create share page (to followers)
            onPress={() => Share.share({ message: item.data })}
            style={[styles.PostItemShareItem, styles.PostItemCenter]}
          >
            <FontAwesomeIcon color={colors.grey50} icon={faShare} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentItem;
