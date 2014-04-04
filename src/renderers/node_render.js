var fs = require('fs');
var xml = require('xm-el');

var svg = xml.element('svg')
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('width', 200)
    .attr('height', 200);

var c = svg.append('circle')
    .attr('cx', 60)
    .attr('cy', 80)
    .attr('r', 24)
    .attr('stroke', 'black')
    .attr('fill', 'red');

var declaration = xml.declaration();
var doctype = xml.doctype('svg');

var data = declaration + doctype + svg.stringify();

fs.writeFileSync('./test.svg', data);
