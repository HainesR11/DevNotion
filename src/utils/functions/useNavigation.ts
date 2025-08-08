import { useNavigation as useNav } from '@react-navigation/native';
import { TNavigationProps } from '../types/types';

export const useNavigation = () => useNav<TNavigationProps>();
