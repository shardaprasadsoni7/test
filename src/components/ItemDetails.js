/**
 * File Name       : ItemDetails.js
 * Author          : Sharda Prasad
 * Description     : Item details
 **/
import React, {Component} from 'react';
import styles from '../css/style'
import {
	View,
    Text,
    Image,
    ScrollView
} from 'react-native';
export default class ItemDetails extends Component {
	constructor () {
		super();
    }
    renderItem() {
        let props = this.props.data;
        return(
            <View 
                style = {[styles.center]}
            >
                <Image 
                    source = { props.src } 
                    style = {[styles.fullImage]}
                />
                <View>
                    <Text 
                        style = {[styles.itemWidth, styles.normalFont, styles.plSm]}
                    >
                        {props.name}
                    </Text>
                    <Text 
                        style = {[styles.normalFont, styles.plSm]}
                    >
                        {props.addr}
                    </Text>
                    <Text 
                        style = {[styles.normalFont, styles.plSm]}
                    >
                        Rating: {props.rating}
                    </Text>
                </View>
            </View>
        )
    }
	render () {
		return (
            <View>
                {this.renderItem()}
            </View>
		);
	}
}
