import React, { useRef } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

const DraggableAddButton = ({ onPress }: { onPress: () => void }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const bottomTabHeight = 60;  // Set the height of your bottom tab bar

  // Initial position near bottom-right corner
  const position = useRef(
    new Animated.ValueXY({
      x: screenWidth - 90, // 90 = width + margin
      y: screenHeight - 170, // adjust as needed for visibility
    })
  ).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,  // Always allow touch start
      onPanResponderMove: (_, gesture) => {
        let newX = gesture.moveX - 30;  // 30 is for centering the button on the touch point
        let newY = gesture.moveY - 30;  // Same for vertical movement

        // Restrict X-axis movement to the screen's width
        if (newX < 0) newX = 0;
        if (newX > screenWidth - 60) newX = screenWidth - 60;  // 60 is button's width

        // Restrict Y-axis movement to ensure it stays above the bottom tab bar
        if (newY < 0) newY = 0; // Can't go above the top of the screen
        if (newY > screenHeight - bottomTabHeight - 60) newY = screenHeight - bottomTabHeight - 60; // 60 is the button's height

        position.setValue({
          x: newX,
          y: newY,
        });
      },
      onPanResponderRelease: () => {
        
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.fab,
        {
          transform: [
            { translateX: position.x },  // Apply horizontal movement
            { translateY: position.y },  // Apply vertical movement
          ],
        },
      ]}
      {...panResponder.panHandlers}  // Attach PanResponder handlers
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default DraggableAddButton;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    zIndex: 100,
  },
  plusText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
