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
    ScrollView,
    StyleSheet
} from 'react-native';
export default class ItemDetails extends Component {
	constructor () {
		super();
    }
    renderItem() {
        let props = this.props.data;
        return(
            <View style={{flex: 1, flexDirection: 'row'}}>
            	<View style={styles2.container}>
            		<Image
            			resizeMode="contain"
            			source = { props.src } 
            			style={[styles.center]} 
            		/>
            		<View style={{marginTop:20}}>
	            		<Text 
		                    style = {[styles.normalFont, styles.plSm]}
	            			numberOfLines = {1}
		                >
		                    Name : {props.name}
		                </Text>
		                <Text 
		                    style = {[styles.normalFont, styles.plSm]}
		                	numberOfLines = {1}
		                >
		                    Address : {props.addr}
		                </Text>
		                <Text 
		                    style = {[styles.normalFont, styles.plSm]}
		                	numberOfLines = {1}
		                >
		                    Rating: {props.rating}
		                </Text>
	                </View>
            	</View>
            	
            </View>    
        );
    }
	render () {
		return (
             this.renderItem()
            
		);
	}
}
var styles2 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    position: 'relative'
  }
});