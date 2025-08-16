import { View } from 'react-native';

type TPostItemProps = {
  index: number;
  length: number | undefined;
  item: any;
  user: any;
};
const PostItem: React.FC<TPostItemProps> = ({ index, length, item, user }) => {
  return <View />;
};

export default PostItem;
