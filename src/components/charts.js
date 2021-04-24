import React from 'react';
import '../styles/styles_charts.css';
var createReactClass = require('create-react-class');

//creates random integer func
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//comparing numbers
function compareNumbers(a, b) {
  return a - b;
}
//creates ChartComponent class and return for render
var ChartsComponent = createReactClass ({
	getInitialState: function () {
		//Chart attributes
		return {
			data: [],
			series: ['Running Scripts'],
			labels: ['lorem', 'ipsum ', 'dolor ', 'sit ', 'amet','veniam','duis'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C', '#87CEFA', '#F08080',]
		}
	},
	//simulation as real-time data injection
	componentDidMount: function () {
		this.populateArray();
		setInterval(this.populateArray, 2000);
	},
	populateArray: function () {
		var data = [],
			series = 1,
			serieLength = 7
	
		for (var i = series; i--; ) {
			var tmp = [];
			
			for (var j = serieLength; j--; ) {
				tmp.push(getRandomInt(0, 200));
			}
			
			data.push(tmp);			
		}
		
		this.setState({ data: data });
	},
	render: function () {
		return (
			<section>
				<Charts
					data={ this.state.data }
					labels={ this.state.series }
					colors={ this.state.colors }
					height={ 250 }
				/>
					<Legend labels={ this.state.labels } colors={ this.state.colors } />
			</section>
		);
	}
});



var Legend = createReactClass ({
	render: function () {
		var labels = this.props.labels,
			colors = this.props.colors;
		
		return (
		<div className="Legend mt-2">
			<div className="grid grid-cols-7">
			{ labels.map(function(label, labelIndex) {
				return (
				<div className="col-span-1">
					<span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
					<span className="Legend--label">{ label }</span>
				</div>
				);
			}) }
			</div>
		</div>
		);
	}
});

var Charts = createReactClass ({
	render: function () {
		var self = this,
			data = this.props.data,
			opaque = this.props.opaque,
			max = 0;
		
		for (var i = data.length; i--; ) {
			for (var j = data[i].length; j--; ) {
				if (data[i][j] > max) {
					max = data[i][j];
				}
			}
		}
		
				
		return (
			<div className={ 'Charts' }>
				{ data.map(function (serie, serieIndex) {
				 	var sortedSerie = serie.slice(0);
				 	sortedSerie.sort(compareNumbers);				 		
									 
					return (
						<div className={ 'Charts--serie'}
				 			key={ serieIndex }
							style={{ height: self.props.height ? self.props.height: 'auto' }}
						>
						<label>{ self.props.labels[serieIndex] }</label>
						{ serie.map(function (item, itemIndex) {
							var color = self.props.colors[itemIndex], style,
								size = item / max * 100;
							
							style = {
								backgroundColor: color,
								opacity: opaque ? 1 : (item/max + .05),
								zIndex: item
							};
														
								style['height'] = size + '%';						
						
						 return (
							 <div
							 	className={ 'Charts--item '}
							 	style={ style }
								key={ itemIndex }
							>
							 	<b style={{ color: color }}>{ item }</b>
							 </div>
						);
						}) }
						</div>
					);
				}) }
			</div>
		);
	}
});


export default ChartsComponent;
