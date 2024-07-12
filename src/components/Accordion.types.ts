import {PropsWithChildren, ReactNode} from "react";
import {PressableAndroidRippleConfig, TextStyle, ViewStyle} from "react-native";

export type CommonProps = PropsWithChildren<{
  androidRipple?: PressableAndroidRippleConfig;
  rightIcon?: string | ReactNode;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  headerStyle?: ViewStyle;
  titleContainerStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  contentWrapperStyle?: ViewStyle;
}>;

export type AccordionItemProps = CommonProps & {
  title: string | ReactNode;
  subTitle?: string | ReactNode;
  header?: ReactNode;
  index?: number;
  leftIcon?: string | ReactNode;
};

export type AccordionProps = CommonProps & {
  containerStyle?: ViewStyle;
  animationDuration?: number;
  compact?: boolean;
};
