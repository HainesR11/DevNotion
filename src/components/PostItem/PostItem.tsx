import React, { useRef, useState } from 'react';
import { Animated, Image, Share, TouchableOpacity, View } from 'react-native';
import {
  faBookmark,
  faComment,
  faHeart,
  faLaughSquint,
  faLightbulb,
  faShare,
  faThumbsUp,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

import { COMMENT_SCREEN } from '@DevEx/constants/screenNames';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import colors from '@DevEx/utils/styles/palette/colors';
import {
  THomeScreenDataItem,
  TNavigationProps,
  TUserInfo,
} from '@DevEx/utils/types/types';

import AccountDetails from '../account-details/AccountDetails';
import Icon, { TappableIcon } from '../Icon/Icon';
import LikeOptions from '../LikeOptions/LikeOptions';
import { Text } from '../Text/text';
import UserIconWrapper from '../user-icon-wrapper/UserIconWrapper';

import createStyles from './PostItem.styles';

const likeItemMap: { [key: string]: { icon: IconDefinition; color: string } } =
  {
    LIKE: { icon: faThumbsUp, color: colors.primaryBlue },
    LOVE: { icon: faHeart, color: colors.red },
    IDEA: { icon: faLightbulb, color: colors.red },
    LAUGH: { icon: faLaughSquint, color: colors.yellow },
  };

const PostItem = ({
  item,
  user,
}: {
  item: THomeScreenDataItem;
  user: TUserInfo;
}) => {
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation<TNavigationProps>();

  const { author, content, createdAt, commentCount, title, image, id } = item;
  item.author.profilePicture = require('@DevEx/assets/me.jpg'); // Temporary until backend is done

  const [likes, _] = useState<Array<any>>([
    { username: user.username, type: 'LIKE' },
  ]);
  const [saved, setSaved] = useState<boolean>(false);
  const [likeOptions, setLikeOptions] = useState<boolean>(false);
  const [liked, setLiked] = useState<
    { type: string; username: string } | undefined
  >(likes.find(({ username }) => username === user.username) ?? undefined);
  const [likedLength, setLikedLength] = useState<number>(likes.length || 0);

  const animatedPosition = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const onPressLiked = () => {
    setLikedLength(liked ? likedLength - 1 : likedLength + 1);
    setLiked(liked ? undefined : { type: 'LIKE', username: user.username });
  };

  const closeLikedOptions = (likeType?: string) => {
    Animated.timing(animatedPosition, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start(({ finished }) => {
      likeType &&
        setLiked({
          type: likeType,
          username: user.username,
        });
      finished && setLikeOptions(false);
    });
  };

  return (
    <View style={styles.PostContainer} key={`PostItem-${id}`}>
      <AccountDetails author={author} createdAt={createdAt} />
      <View>
        {title && <Text text={title} />}
        {content && <Text text={content} />}
        {image && (
          <UserIconWrapper
            image={image as unknown}
            imageStyle={styles.postImage}
          />
        )}
      </View>
      {likeOptions ? (
        <LikeOptions
          onClose={() => closeLikedOptions()}
          onLiked={type => closeLikedOptions(type)}
          animatedValues={{
            animatedPosition,
            animatedOpacity,
          }}
        />
      ) : (
        <View style={styles.PostItemContainer}>
          <View style={styles.PostInfoStripContainer}>
            <TouchableOpacity
              onPress={() => onPressLiked()}
              onLongPress={() => setLikeOptions(!likeOptions)}
              style={styles.PostInfoStripContainer}
            >
              <Icon
                icon={liked ? likeItemMap[liked.type].icon : faThumbsUp}
                color={liked ? likeItemMap[liked?.type].color : colors.grey20}
              />
              <Text
                text={`${likedLength} Likes`}
                onPress={() =>
                  navigation.navigate(COMMENT_SCREEN, {
                    id,
                    interaction: 'Likes',
                  })
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(COMMENT_SCREEN, {
                  id,
                  interaction: 'Comments',
                })
              }
              style={styles.PostInfoStripContainer}
            >
              <Icon icon={faComment} state="inactiveTab" />
              <Text text={`${commentCount} Comments`} />
            </TouchableOpacity>
          </View>

          <View style={styles.PostInfoStripContainer}>
            <TappableIcon
              icon={faShare}
              state="inactiveTab"
              onPress={async () =>
                await Share.share({ message: content ?? '' })
              }
            />
            <TappableIcon
              icon={faBookmark}
              onPress={() => setSaved(!saved)}
              color={saved ? colors.primaryBlue : colors.grey20}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default PostItem;
