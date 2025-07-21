import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Task = {
  id: number;
  title: string;
  description: string;
  date: string;
  isChecked: boolean;
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
  History: NavigatorScreenParams<TopHistoryTabParamList>;
  Profile: undefined;
  
}

export type TopHistoryTabParamList = {
  All: undefined;
  Active: undefined;
  Completed: undefined;
}

export type DrawerHistoryParamList = {
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

export type HistoryTabScreenProps<T extends keyof TopHistoryTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<TopHistoryTabParamList, T>,
    HomeTabScreenProps<'History'>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}