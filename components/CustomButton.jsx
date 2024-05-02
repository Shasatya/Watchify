import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePres,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePres}
      activeOpacity={0.6}
      disabled={isLoading}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center 
      ${containerStyles}
      ${isLoading ? "opacity-50 " : " "}`}
    >
      <Text className={`font-semibold text-lg text-primary ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
