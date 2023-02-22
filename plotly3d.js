d3.csv('data/3d-scatter.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var Region_1 = {
	x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
	mode: 'markers',
	marker: {
		size: 8,
		line: {
		color: 'rgba(217, 217, 217, 0.14)',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d'
};

var Region_2 = {
	x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
	mode: 'markers',
	marker: {
		color: 'rgb(127, 127, 127)',
		size: 8,
		symbol: 'circle',
		line: {
		color: 'rgb(204, 204, 204)',
		width: 1},
		opacity: 0.8},
	type: 'scatter3d'};

var Batch = {
	x:unpack(rows, 'x3'), y: unpack(rows, 'y3'), z: unpack(rows, 'z3'),
	mode: 'markers',
	marker: {
		color: 'rgb(153, 0, 51)',
		size: 12,
		symbol: 'circle',
		line: {
		color: 'rgb(153, 0, 51)',
		width: 1},
		opacity: 0.8},
	type: 'scatter3d'};


var data = [Region_1, Region_2, Batch];
var layout = {margin: {
	l: 0,
	r: 0,
	b: 0,
	t: 0
  }};
Plotly.newPlot('myDiv', data, layout);
});
