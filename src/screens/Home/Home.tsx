import React, { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { useGetPostsQuery } from '@DevEx/api/monolith/__generated__/getPosts.generated';
import { Text } from '@DevEx/components';
import PostItem from '@DevEx/components/PostItem/PostItem';
import { RootState } from '@DevEx/utils/store/store';

import RenderLoading from './utils/LoadingCard';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);

  const {
    data: posts,
    isError,
    refetch,
    error,
  } = useGetPostsQuery({ limit: 10, offset: 0 });

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
    console.log(error);

    return (
      <SafeAreaView edges={['left', 'right']}>
        <Text text={'An Error occured, please try again'} />
      </SafeAreaView>
    );
  }

  if (posts?.posts === undefined || user === undefined) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView style={{ alignItems: 'center' }} edges={[]}>
        <RenderLoading count={5} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right']}>
      <ScrollView
        style={{ height: '100%' }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => onRefetch()} />
        }
        scrollEventThrottle={16}
      >
        {posts.posts?.map((item: any) => {
          return (
            <PostItem key={`post${item.id}`} item={item} user={user.user} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
