
/**
 * File Name       : App.js
 * Author          : Sharda Prasad
 * Description     : Application route
 **/
import React, {Component} from 'react';
import {
	Router, 
	Scene 
} from 'react-native-router-flux';

import Login from '../components/Login';	
import Items from '../components/Items';
import ItemDetails from '../components/ItemDetails';
 export default class App extends React.Component {
	constructor (props) {
	    super(props);
	}

	render () {
		return(
			<Router>
			    <Scene key="root"  hideTabBar={false} renderBackButton={'Closure'}>
			    	<Scene key="login" component={Login} title="Login" initial={true}  />
			    	<Scene key="items" component={Items} title="Items" hideNavBar = {true} />
			    	<Scene key="itemDetails" component={ItemDetails} title="Item Details"/>
			    </Scene>
			</Router>
		)
	}
}
