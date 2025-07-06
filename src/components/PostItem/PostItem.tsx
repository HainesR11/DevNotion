import React, {useRef, useState} from 'react';
import {Animated, Image, TouchableOpacity, View} from 'react-native';
import {Share} from 'react-native';
import {faBookmark as faBookmarkRegular} from '@fortawesome/free-regular-svg-icons';
import {
  faBookmark as faBookmarkSolid,
  faCircleXmark,
  faComment,
  faEllipsis,
  faEyeSlash,
  faFlag,
  faHeart,
  faLaughSquint,
  faLightbulb,
  faShareFromSquare,
  faThumbsUp,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import {COMMENT_SCREEN, OPTIONS_SCREEN} from '@DevEx/constants/screenNames';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import colors from '@DevEx/utils/styles/palette/colors';
import {
  THomeScreenDataItem,
  TNavigationProps,
  TOptions,
  TUserInfo,
} from '@DevEx/utils/types/types';

import LikeOptions from '../LikeOptions/LikeOptions';
import {Text} from '../Text/text';

import createStyles from './PostItem.styles';

const likeItemMap: {[key: string]: {icon: IconDefinition; color: string}} = {
  LIKE: {icon: faThumbsUp, color: colors.primaryBlue},
  LOVE: {icon: faHeart, color: colors.red},
  IDEA: {icon: faLightbulb, color: colors.red},
  LAUGH: {icon: faLaughSquint, color: colors.yellow},
};

const PostItem = ({
  item,
  user,
  index,
}: {
  item: THomeScreenDataItem | unknown;
  user: TUserInfo;
  index: number;
  length?: number;
}) => {
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation<TNavigationProps>();

  const [saved, setSaved] = useState<boolean>(false);
  const [likeOptions, setLikeOptions] = useState<boolean>(false);
  const [liked, setLiked] = useState<any | undefined>(
    item.likes.find(({username}) => username === user.username) ?? undefined,
  );
  const [likedLength, setLikedLength] = useState<number>(
    item.likes.length || 0,
  );

  const postOptions: TOptions[] = [
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
          title: item.data.content,
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
      name: `Unfollow ${item.user.username}`,
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

  const image = require('@DevEx/assets/me.jpg');

  const animatedPosition = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedProfileOpacity = useRef(new Animated.Value(1)).current;

  const onPressLiked = () => {
    setLikedLength(liked ? likedLength - 1 : likedLength + 1);
    setLiked(liked ? undefined : {type: 'LIKE', username: user.username});
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
    }).start(({finished}) => {
      likeType &&
        setLiked({
          type: likeType,
          username: user.username,
          name: user.name,
          image: '',
        });
      finished && setLikeOptions(false);
      Animated.timing(animatedProfileOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  };

  const openLikedOptions = () => {
    Animated.timing(animatedProfileOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(({finished}) => {
      finished && setLikeOptions(true);
    });
  };

  return (
    <View style={styles.PostContainer} key={`PostItem-${index}`}>
      {item.data.image ? (
        <View>
          <Image
            source={require('@DevEx/assets/Collaboration1.jpeg')}
            style={styles.PostItemImage}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(OPTIONS_SCREEN, {
                options: postOptions,
              })
            }
            style={styles.PostItemImageOptionsContainer}>
            <FontAwesomeIcon icon={faEllipsis} color={colors.white} size={25} />
          </TouchableOpacity>
          <View style={styles.PostItemTextContainer}>
            <Text text={item.data.content} />
          </View>
        </View>
      ) : (
        <View style={styles.PostItemContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(OPTIONS_SCREEN, {
                options: postOptions,
              })
            }
            style={styles.PostItemOptionsContainer}>
            <FontAwesomeIcon
              icon={faEllipsis}
              color={colors.grey60}
              size={25}
            />
          </TouchableOpacity>
          <Text text={item.data.content} />
        </View>
      )}
      {likeOptions ? (
        <LikeOptions
          closeLiked={() => closeLikedOptions()}
          setLiked={type => closeLikedOptions(type)}
          animatedValues={{animatedOpacity, animatedPosition}}
        />
      ) : (
        <View style={styles.PostInfoStripContainer}>
          <Animated.View
            style={[
              styles.PostInfoUserContainer,
              {
                opacity: animatedProfileOpacity,
              },
            ]}>
            <Image style={styles.PostInfoStripImage} source={image} />
            <View style={styles.PostInfoUserTextContainer}>
              <Text text={item.user.name} />
              <Text
                text={item.user.username}
                textStyle={{color: colors.grey50}}
              />
            </View>
          </Animated.View>
          <View style={styles.PostInfoLikeContainer}>
            <TouchableOpacity
              onLongPress={openLikedOptions}
              onPress={() => onPressLiked()}
              style={[
                //// eslint-disable-next-line react-native/no-inline-styles
                // {
                //   width: likedLength.toFixed().length >= 2 ? 37 : 30,
                // },
                styles.likeOptions(likedLength.toFixed().length),
                styles.PostInfoLikeButton,
              ]}>
              <FontAwesomeIcon
                icon={liked ? likeItemMap[liked?.type].icon : faThumbsUp}
                color={liked ? likeItemMap[liked?.type].color : colors.grey40}
              />
              <Text text={likedLength} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(COMMENT_SCREEN, {
                  id: item.id,
                  interaction: 'Comments',
                })
              }
              style={[
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: item.comments.length.toFixed().length >= 2 ? 40 : 30,
                },
                styles.PostItemCommentContainer,
              ]}>
              <FontAwesomeIcon icon={faComment} color={colors.grey40} />
              <Text text={item.comments.length} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default PostItem;
