import React, {Children, cloneElement, createContext, useMemo} from 'react';
import {View} from 'react-native';
import type {AccordionProps} from './Accordion.types';
import styles from './style';

export const AccordionContext = createContext<Partial<AccordionProps>>({});

const AccordionList: React.FC<AccordionProps> = (props: AccordionProps) => {
  const {
    containerStyle,
    compact = false,
    animationDuration = 300,
    children,
    androidRipple = {
      color: 'rgba(0,0,0,0.3)',
      foreground: true,
    },
    leftIcon,
    titleStyle,
    subTitleStyle,
    headerStyle,
    titleContainerStyle,
    itemContainerStyle,
    contentContainerStyle,
    contentWrapperStyle,
  } = props;

  const accordionContextValue = useMemo(
    () => ({
      compact,
      animationDuration,
      androidRipple,
      leftIcon,
      titleStyle,
      subTitleStyle,
      headerStyle,
      titleContainerStyle,
      itemContainerStyle,
      contentContainerStyle,
      contentWrapperStyle,
    }),
    [
      compact,
      animationDuration,
      androidRipple,
      leftIcon,
      titleStyle,
      subTitleStyle,
      headerStyle,
      titleContainerStyle,
      itemContainerStyle,
      contentContainerStyle,
      contentWrapperStyle,
    ],
  );

  const renderChildren = () => {
    return Children.map(children, (child: any, index) => {
      return cloneElement(child, {
        index,
      });
    });
  };

  return (
    <AccordionContext.Provider value={accordionContextValue}>
      <View
        style={[
          styles.accordion,
          compact && styles.compactAccordion,
          containerStyle,
        ]}>
        {renderChildren()}
      </View>
    </AccordionContext.Provider>
  );
};

export default AccordionList;
