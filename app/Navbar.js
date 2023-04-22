import React, { useState } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "green",
    height: 400,
    width: 200,
    zIndex: 1,
    top: 0,
    left: 0,
    paddingLeft: 20,
    paddingTop: 20,
  },
});

export default function SlidingMenu() {
  const [open, setOpen] = useState(false);
  const animation = new Animated.Value(0);

  const toggleMenu = () => {
    if (open) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setOpen(false));
    } else {
      setOpen(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const animatedStyles = {
    left: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-200, 0],
    }),
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleMenu}>
        <View style={{ backgroundColor: "blue", padding: 20 }}>
          <Text>Toggle Menu</Text>
        </View>
      </TouchableOpacity>
      {open && (
        <Animated.View style={[styles.container, animatedStyles]}>
          <TouchableOpacity onPress={toggleMenu}>
            <View>
              <Text style={{ color: "white" }}>Close Menu</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "white" }}>Menu Item 1</Text>
            <Text style={{ color: "white" }}>Menu Item 2</Text>
            <Text style={{ color: "white" }}>Menu Item 3</Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
}
