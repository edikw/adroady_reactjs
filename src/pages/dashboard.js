import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataChart, getDataMaps } from '../actions/getData';
import $ from 'jquery';
import '../App.css'


class Dashboard extends Component {
	constructor () {
		super() 
		this.state = {
			data_chart: [],
			data_maps: []
		}
	}

	componentDidMount () {
		this.props.getDataChart().then( res => {
			this.setState({data_chart: res})
		}).catch(err => {
			$('#exampleModalCenter').modal('show')

		})

		this.props.getDataMaps().then( res => {
			this.setState({data_maps: res.data.results})
		});
	}

	show () {
		if(this.refs.maps.style.height === '100%') {
			this.refs.maps.style.height = '45vh'
		}else {
			this.refs.maps.style.height = '100%'
		}
	}

	showTable () {
		if(this.refs.table.style.height === '100%') {
			this.refs.table.style.height = '45vh'
		}else {
			this.refs.table.style.height = '100%'
		}
	}

	render () {
		return (
			<div>
				<div className="bg-info p-3 text-light">
					<h4 className="m-0">Dashboard</h4>
				</div>
				<div className="col-12 col-lg-7 mx-auto py-5">
					<div className="shadow-lg p-5 mb-4">
						<div className="border-bottom mb-5">
							<h4>Chart</h4>
						</div>
						<div>
							<h6>Total Gender {this.state.data_chart.length}</h6>
						</div>
					</div>
					<div className="shadow-lg p-5 mb-4 maps-wrapper" ref="maps">
						<div className="border-bottom">
							<div className="d-flex">
								<h4 className="mr-3">Maps</h4>
								<h6 className="align-self-center font-italic">{this.state.data_maps.length} data on maps</h6>
							</div>
						</div>
						<div className="py-3 text-right">
							<button className="btn btn-sm btn-light" onClick={() => this.show()}>Show more</button>
						</div>
						<div>
							<table className="table table-striped">
							  <thead>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col" className="text-center">Name</th>
							      <th scope="col" className="text-center">Location</th>
							    </tr>
							  </thead>
							  <tbody>
							  	{this.state.data_maps.map((map, i) => {
							  		return (
									    <tr key={i}>
									      <th scope="row">{i+1}</th>
									      <td>{map.name.title}. {map.name.first} {map.name.last}</td>
									      <td>{map.location.state}, {map.location.city}</td>
									    </tr>
							  		)
							  	})}
							  </tbody>
							</table>
						</div>
					</div>
					<div className="shadow-lg p-5 mb-4 table-wrapper" ref="table">
						<div className="border-bottom">
							<div className="d-flex">
								<h4 className="mr-3">Table</h4>
								<h6 className="align-self-center font-italic">{this.state.data_maps.length} data on tables</h6>
							</div>
						</div>
						<div className="py-3 text-right">
							<button className="btn btn-sm btn-light" onClick={() => this.showTable()}>Show more</button>
						</div>
						<div>
							<table className="table table-striped">
							  <thead>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col" className="text-center">Name</th>
							      <th scope="col" className="text-center">Gender</th>
							      <th scope="col" className="text-center">Location</th>
							      <th scope="col" className="text-center">Email</th>
							    </tr>
							  </thead>
							  <tbody>
							  	{this.state.data_maps.map((map, i) => {
							  		return (
									    <tr key={i}>
									      <th scope="row">{i+1}</th>
									      <td>{map.name.title}. {map.name.first} {map.name.last}</td>
									      {map.name.title === 'mr'?
										      <td>Male</td>
										      : 
										      <td>Female</td>
									  		}
									      <td>{map.location.state}, {map.location.city}</td>
									      <td>{map.email}</td>
									    </tr>
							  		)
							  	})}
							  </tbody>
							</table>
						</div>					
					</div>
				</div>
				<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="p-3">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" className="text-info">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<h6 className="text-center">Chart is empty !</h6>
							</div>
							<div className="p-3 text-right">
								<button type="button" className="btn btn-sm btn-outline-info" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(null, {getDataChart, getDataMaps})(Dashboard);