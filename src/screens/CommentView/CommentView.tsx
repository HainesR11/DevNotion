import React, { FC, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

import { Text } from '@DevEx/components';
import DynamicModal from '@DevEx/components/DynamicModal/DynamicModal';
import { CommentViewHeader } from '@DevEx/components/Headers/CommentsHeader';
import { HomeScreenData } from '@DevEx/testing/stubs';
import colors from '@DevEx/utils/styles/palette/colors';
import theme from '@DevEx/utils/styles/theme';

type THeaderParams = 'Comments' | 'Likes';

interface ICommentView {
  route?: {
    key: string;
    name: string;
    path?: string;
    params: { id: string; interaction: THeaderParams };
  };
}

const CommentView: FC<ICommentView> = ({ route }) => {
  const routeParams = route?.params;

  // const {data, isLoading, isError} = useGetComments(routeParams?.id);

  const [activeHeader, setActiveHeader] = useState<THeaderParams>(
    routeParams?.interaction || 'Comments',
  );

  const item = HomeScreenData[1];

  const RenderView = () => {
    switch (true) {
      case activeHeader === 'Likes':
        return item.likes.map((like, key) => {
          return (
            <View
              key={key}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: theme.spacing.m,
                paddingVertical: theme.spacing.s,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    width: 55,
                    height: 55,
                    marginRight: 10,
                    borderRadius: 30,
                  }}
                  source={require('@DevEx/assets/me.jpg')}
                />
                <View>
                  <Text text={like.name} />
                  <Text
                    textStyle={{ color: theme.colors.grey50 }}
                    text={like.username}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: colors.lightBlue,
                  paddingHorizontal: theme.spacing.ml,
                  height: theme.spacing.xl,
                  justifyContent: 'center',
                  borderRadius: 6,
                }}
              >
                <Text
                  textStyle={{
                    color: 'white',
                  }}
                  text={'Follow'}
                />
              </TouchableOpacity>
            </View>
          );
        });
      case activeHeader === 'Comments':
        return item.comments.map(() => {
          return (
            <View>
              <View>{/* User header - name, username, image*/}</View>
              <View>{/*Comment data*/}</View>
              <View>
                {/*Footer - includes collapsable replys, likes, date/time */}
              </View>
            </View>
          );
        });
    }
  };

  // TODO: create call to back end to get information about Comment
  return (
    <DynamicModal
      testID="dynamic-modal-comments"
      header={() => CommentViewHeader(activeHeader, setActiveHeader)}
    >
      <ScrollView>
        <Text text={'Scroll view here'} />
        <>{RenderView()}</>
      </ScrollView>
    </DynamicModal>
  );
};

export default CommentView;
