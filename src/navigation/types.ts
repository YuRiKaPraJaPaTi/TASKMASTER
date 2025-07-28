import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";

export type Task = {
  id: number;
  title: string;
  description: string;
  date: string;
  isChecked: boolean;
  userID: string;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};


export type RootStackParamList = {
  Auth: undefined;
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
  Menu: undefined;
  All: undefined;
  Active: undefined;
  Completed: undefined;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type CombinedScreenProps<T extends keyof RootStackParamList> = 
  CompositeScreenProps<
      NativeStackScreenProps<AuthStackParamList>,
      RootStackScreenProps<keyof RootStackParamList>
    >

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