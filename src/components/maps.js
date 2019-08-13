import React, {Component} from 'react';
import $ from 'jquery';
import { Map, GoogleApiWrapper, Marker,InfoWindow } from 'google-maps-react';

class Maps extends Component {
	constructor(props) {
		super(props)
		this.state = {
			lang: this.props.lang,
			lat: this.props.lat
		}
	}
	displayMarkers = () => {
		return this.props.map.map((data, index) => {
			return <Marker key={index} id={index} position={{
				lat: data.location.coordinates.latitude,
				lng: data.location.coordinates.longitude
			}}/>
		})
	}
	render () {
		return (
			<Map
		          google={this.props.google}
		          zoom={2}
		          style={mapStyles}
		          xs ={12}
		          initialCenter={{ lat: 47.444, lng: -122.176}}
		    >
		    	{this.displayMarkers()}
		    </Map>

		)
	}
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyiLfx4U6_vk0Lq2_ZRtBYn02EjVCgRFk"
})(Maps);

const mapStyles = {
	width: '100%',
	height: '50vh',
	'marginLeft': 'auto',
	'marginRight': '20px'
};