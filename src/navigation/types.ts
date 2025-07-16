export type Task = {
  id: number;
  title: string;
  description: string;
  date: string;
};


export type RootStackParamList = {
  Home: undefined;
  Todo: undefined;
  Add: undefined;
  DetailsTask: {
    task: Task;
  };
};