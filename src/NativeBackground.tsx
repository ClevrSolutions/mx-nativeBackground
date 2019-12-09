import { Component, ReactNode, createElement } from "react";
import { ViewStyle, ImageBackground } from "react-native";
import { NativeBackgroundProps } from "../typings/NativeBackgroundProps";
import { Style, flattenStyles } from "./utils/common";

export interface NativeBackgroundStyle extends Style {
    background: ViewStyle;
}

const defaultStyle: NativeBackgroundStyle = {
    background: {
        width: '100%',
        height: '100%',
    }
};

export class NativeBackground extends Component<NativeBackgroundProps<NativeBackgroundStyle>> {

    private readonly styles = flattenStyles(defaultStyle, this.props.style);

    render(): ReactNode {
        const { background, content } = this.props;

        if (background.status == "available" && background.value) {
            return (
                <ImageBackground source={background.value} style={this.styles.background}>
                    {content}
                </ImageBackground>
            );
        } else {
            return content;
        }
    }

}
