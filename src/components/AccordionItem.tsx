import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import type { AccordionItemProps } from './Accordion.types';
import { AccordionContext } from './AccordionList';
import styles from './style';

const AccordionItem = (props: AccordionItemProps) => {
  const { index, header, children, title, subTitle, leftIcon } = props;
  const accordionContext = useContext(AccordionContext);
  const { compact, animationDuration, androidRipple } = accordionContext;

  const itemContainerStyle =
    props.itemContainerStyle || accordionContext.itemContainerStyle;
  const contentWrapperStyle =
    props.contentWrapperStyle || accordionContext.contentWrapperStyle;
  const contentContainerStyle =
    props.contentContainerStyle || accordionContext.contentContainerStyle;
  const headerStyle = props.headerStyle || accordionContext.headerStyle;
  const titleStyle = props.titleStyle || accordionContext.titleStyle;
  const subTitleStyle = props.subTitleStyle || accordionContext.subTitleStyle;
  const rightIcon =
    props.rightIcon || accordionContext.rightIcon || 'chevron-right';
  const titleContainerStyle =
    props.titleContainerStyle || accordionContext.titleContainerStyle;

  const open = useSharedValue(false);
  const height = useSharedValue(0);
  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(open.value), {
      duration: animationDuration,
    })
  );
  const baseWrapperStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));
  const iconRotate = useSharedValue<string>('0deg');
  const animatedIconStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: withSpring(iconRotate.value) }],
  }));

  const onToggleCollapse = () => {
    open.value = !open.value;
    iconRotate.value = iconRotate.value === '90deg' ? '0deg' : '90deg';
  };

  const renderTitle = () =>
    typeof title === 'string' ? (
      <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>
    ) : (
      title
    );

  const renderSubTitle = () =>
    subTitle &&
    (typeof subTitle === 'string' ? (
      <Text style={[styles.headerSubTitle, subTitleStyle]}>{subTitle}</Text>
    ) : (
      subTitle
    ));

  const renderHeader = () => (
    <Pressable
      style={[
        styles.header,
        (!compact || (compact && index === 0)) && styles.noBorderTop,
        headerStyle,
      ]}
      android_ripple={androidRipple}
      onPress={onToggleCollapse}
    >
      {header ?? (
        <>
          {leftIcon &&
            (typeof leftIcon === 'string' ? (
              <Icon name={leftIcon} size={26} color={'#000'} />
            ) : (
              leftIcon
            ))}

          <View style={[styles.headerTitleContainer, titleContainerStyle]}>
            {renderTitle()}
            {renderSubTitle()}
          </View>
          <Animated.View style={[styles.headerIcon, animatedIconStyles]}>
            {typeof rightIcon === 'string' ? (
              <Icon name={rightIcon} size={26} color={'#000'} />
            ) : (
              rightIcon
            )}
          </Animated.View>
        </>
      )}
    </Pressable>
  );

  return (
    <View
      style={[
        styles.accordionItem,
        !compact && styles.noCompactAccordionItem,
        itemContainerStyle,
      ]}
    >
      {renderHeader()}
      <Animated.View style={[baseWrapperStyle, contentWrapperStyle]}>
        <View
          onLayout={e => {
            height.value = e.nativeEvent.layout.height;
          }}
          style={[styles.contentContainer, contentContainerStyle]}
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default AccordionItem;
