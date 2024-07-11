declare module "@mustapha-ghlissi/react-native-accordion" {
    import {PropsWithChildren, ReactNode} from "react";
    import {PressableAndroidRippleConfig, TextStyle, ViewStyle} from "react-native";

    export type CommonProps = PropsWithChildren<{
        androidRipple?: PressableAndroidRippleConfig;
        leftIcon?: string | ReactNode;
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
        rightIcon?: string | ReactNode;
    };

    export type AccordionProps = CommonProps & {
        containerStyle?: ViewStyle;
        animationDuration?: number;
        compact?: boolean;
    };

    const Accordion: React.FC<AccordionProps>;
    
    export default Accordion;   
}