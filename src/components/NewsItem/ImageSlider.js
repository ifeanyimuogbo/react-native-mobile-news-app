import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SliderBox } from "react-native-image-slider-box";

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row" },
});

export default function ImageSlider({ images }) {
  const [width, setWidth] = useState(320);
  const onLayout = (e) => {
    setWidth(e.nativeEvent.layout.width);
  };
  return (
    <View style={styles.wrapper} onLayout={onLayout}>
      {/* {images.map((image, index) => (
        <Image
          key={index}
          source={{ url: image.image }}
          style={{ width: 100, height: 100, borderRadius: 8 }}
        />
      ))} */}
      <SliderBox
        images={images.map((image) => image.image)}
        parentWidth={width}
      />
    </View>
  );
}
