import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row" },
});

export default function ImageSlider({ images }) {
  return (
    <View style={styles.wrapper}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ url: image.image }}
          style={{ width: 100, height: 100, borderRadius: 8 }}
        />
      ))}
    </View>
  );
}
