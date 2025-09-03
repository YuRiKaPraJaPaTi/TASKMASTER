import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
 

       return (
            <View style={styles.tabContainer}>
                  {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                              options.title !== undefined
                              ? options.title
                              : route.name;

                        const iconName = route.name === 'Todo'
                              ? 'home'
                              : route.name === 'History'
                              ? 'history'
                              : route.name === 'Profile'
                              ? 'user'
                              : 'what';

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
                                    {/* <Icon name='home' size={20}/> */}
                                    <Icon name={iconName} size={20} color={isFocused ? 'white' : 'black'} />
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
            backgroundColor: '#F0F8FF',
            borderTopWidth: 1,
            borderTopColor: 'blue',
      },
      tabBox: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F0F8FF',
      },
      activeTabBox: {
            backgroundColor: '#4267B2', 
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