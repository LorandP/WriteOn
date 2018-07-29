import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GREEN_LIGHT } from '../config/colors';

const CARD_IMAGE = require('../../assets/blog_card_image.jpg');

export interface Props {
    style: any;
    title: string;
    onCardPressed: Function;
}
export interface State { }

export default class CardItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (

            <TouchableOpacity
                style={this.props.style}
                onPress={() => this.props.onCardPressed()}
            >

                <View
                style={styles.topView}
                />

                <View
                    style={styles.bottomView}
                >
                    <Text
                        style={styles.title}
                    >{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    topView: {
        height: 100,
        flex: 0.5,
        width: null,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: GREEN_LIGHT
    },
    bottomView: {
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    image: {
        height: 100,
        flex: 0.5,
        width: null,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
});