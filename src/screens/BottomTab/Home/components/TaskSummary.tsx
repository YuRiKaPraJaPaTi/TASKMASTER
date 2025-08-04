import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskSummary = () => {
      const tasks = useSelector((state: RootState) => state.tasks.tasks);

      const total = tasks.length;
      const completed = tasks.filter(task => task.isChecked).length;
      const active = total - completed;

      return (
            <View style={styles.container}>

                  <View style={styles.summaryItem}>
                        <Icon name="circle" size={28} color="orange" />
                        <Text style={styles.summaryTitle}>Active</Text>
                        <Text style={styles.summaryCount}>{active}</Text>
                  </View>

                  <View style={styles.summaryItem}>
                        <Icon name="check-circle" size={28} color="lightgreen" />
                        <Text style={styles.summaryTitle}>Completed</Text>
                        <Text style={styles.summaryCount}>{completed}</Text>
                  </View>

                  <View style={styles.summaryItem}>
                        <Icon name="list" size={28} color="lightblue" />
                        <Text style={styles.summaryTitle}>Total</Text>
                        <Text style={styles.summaryCount}>{total}</Text>
                  </View>
            </View>
      );
};

export default TaskSummary;

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
            gap: 12,
      },
      summaryItem: {
            // backgroundColor: '#ffffff20',
            borderRadius: 12,
            paddingVertical: 16,
            paddingHorizontal: 24,
            marginVertical: 8,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#ffffff50',
      },
      summaryTitle: {
            fontSize: 16,
            color: 'white',
            marginTop: 5,
            fontWeight: '600',
      },
      summaryCount: {
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 4,
      },
});
