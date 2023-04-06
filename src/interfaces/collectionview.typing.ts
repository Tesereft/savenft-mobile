import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Collection: { id: string };
  Create: {address: string};
  Home: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;