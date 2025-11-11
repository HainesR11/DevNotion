import React from 'react';
import dayjs from 'dayjs';
import { View } from 'react-native';

import theme from '@DevEx/utils/styles/theme';

import { Text } from '../Text/text';
import UserIconWrapper from '../user-icon-wrapper/UserIconWrapper';

type TAccountDetailsProps = {
  author: {
    name: string;
    username: string;
    profilePicture?: string;
  };
  createdAt: string | undefined;
};

const AccountDetails = ({ author, createdAt }: TAccountDetailsProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15,
      }}
    >
      <UserIconWrapper
        image={author?.profilePicture}
        imageStyle={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <View style={{ display: 'flex' }}>
        <Text text={author.username} />
        <Text
          textStyle={{ color: theme.colors.grey50 }}
          text={dayjs(createdAt).format('DD MMMM YYYY')}
        />
      </View>
    </View>
  );
};

export default AccountDetails;
