import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Task = {
  id: number;
  title: string;
  description: string;
  date: string;
};


export type RootStackParamList = {
  Tabs:NavigatorScreenParams<BottomTabParamList> ;
  Add: {taskToEdit?: Task} | undefined
  DetailsTask: {
    task: Task;
  };
};

export type BottomTabParamList = {
  Todo: undefined;
  Profile: undefined;
  History: undefined;
}

export type TopHistoryTabParamList = {
  All: undefined;
  Active: undefined;
  Completed: undefined;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;


export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}