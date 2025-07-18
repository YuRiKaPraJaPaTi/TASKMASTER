import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';


function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
 

       return (
            <View style={styles.tabContainer}>
                  {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                        // options.tabBarLabel !== undefined
                        //       ? options.tabBarLabel
                        //       : 
                              options.title !== undefined
                              ? options.title
                              : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                              const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                              });

                              if (!isFocused && !event.defaultPrevented) {
                                    navigation.navigate(route.name, route.params);
                              }
                        };

            
                        return (
                              <TouchableOpacity
                                    key={route.key}
                                    onPress={onPress}
                                    style={[styles.tabBox, isFocused && styles.activeTabBox]}
                                    >
                                    <Text style={[styles.tabLabel, isFocused && styles.activeLabel]}>
                                          {label}
                                    </Text>
                              </TouchableOpacity>
                        );
                  }
                  )
                  }
            </View>
      );
}

export default MyTabBar

const styles = StyleSheet.create({
      tabContainer: {
            flexDirection: 'row',
            height: 60,
            backgroundColor: '#eee',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
      },
      tabBox: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ddd',
      },
      activeTabBox: {
            backgroundColor: '#4A90E2', 
      },
      tabLabel: {
            color: '#555',
            fontSize: 14,
      },
      activeLabel: {
            color: '#fff',
            fontWeight: 'bold',
      },
})