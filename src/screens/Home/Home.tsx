import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {useGetPostsQuery} from '@DevEx/api/monolith/__generated__/getPosts.generated';
import {Text} from '@DevEx/components';
import PostItem from '@DevEx/components/PostItem/PostItem';
// import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {RootState} from '@DevEx/utils/store/store';

import RenderLoading from './utils/LoadingCard';

// import createStyles from './Home.styles';

const Home = () => {
  // const styles = useThemedStyles(createStyles);
  const user = useSelector((state: RootState) => state.user);

  const {
    data: HomeData,
    isError,
    refetch,
    error,
  } = useGetPostsQuery({limit: 10, offset: 0});

  console.log('HomeData', error);

  const [loading, setLoading] = useState<boolean>(false);

  const onRefetch = () => {
    // TODO: create logging for how many times it has been refetched
    setLoading(true);
    setTimeout(async () => {
      await refetch().then(() => {
        setLoading(false);
      });
    }, 5000);
  };

  if (isError) {
    return (
      <SafeAreaView edges={['left', 'right']}>
        <Text text={'An Error occured, please try again'} />
      </SafeAreaView>
    );
  }

  if (HomeData?.posts === undefined || user === undefined) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView style={{alignItems: 'center'}} edges={[]}>
        <RenderLoading count={5} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right']}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => onRefetch()} />
        }
        scrollEventThrottle={16}>
        {HomeData.posts?.map((item: any, index: number) => {
          return (
            <PostItem
              index={index}
              length={HomeData?.posts?.length}
              key={index}
              item={item}
              user={user.user}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
