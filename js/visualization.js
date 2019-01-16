$(document).ready(function(){
						var map = L.map('map', {
						    maxZoom: 18,
						    minZoom: 12,
						    maxBoundsViscosity: 10000.0
						});
						map.setView([44.4915, 11.3355], 12);
						var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
						    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						}).addTo(map);
						// var zone = new L.GeoJSON.AJAX("geojson_folder/ZoneBologna.geojson");
						var limiti = map.getBounds();
						map.setMaxBounds(limiti);
						$.ajax({
						    dataType: "json",
						    url: "geojson_folder/ZoneBologna.geojson",
						    success: function(data) {
							L.geoJson(data, {
							    onEachFeature: onEachFeature
							}).addTo(map);
						    }
						}).error(function() {});
						function onEachFeature(feature, layer) {
						    layer.bindPopup(feature.properties.Nome_zona);
						    layer.on('click', function(e) {
							$.ajax({
							    dataType: "json",
							    url: "geojson_folder/Reddito_2009-2016_per_zone.json",
							    success: function(dati) {
								dati.forEach(function(arrayItem) {
								    if (arrayItem["Zona"] == feature.properties.Nome_zona) {
									$('.information').html('');
									$('.information').html('<h2><span class="badge badge-primary">'+arrayItem["Zona"])+'</span></h2>';
									var listRedditi = [];
									listRedditi.push(arrayItem["Reddito pro-capite 2009"]);
									listRedditi.push(arrayItem["Reddito pro-capite 2010"]);
									listRedditi.push(arrayItem["Reddito pro-capite 2011"]);
									listRedditi.push(arrayItem["Reddito pro-capite 2012"]);
									listRedditi.push(arrayItem["Reddito pro-capite 2013"]);
									listRedditi.push(arrayItem["Reddito pro-capite 2014"]);
									listRedditi.push(arrayItem["Reddito pro-capite 2015"]);
									listRedditi.push(arrayItem["Reddito pro-capite 2016"]);
									var listIndex = [];
									listIndex.push(arrayItem["Reddito pro-capite 2009"]);
									listIndex.push(Math.round(arrayItem["Reddito pro-capite 2009"] * 1.011));
									listIndex.push(Math.round(arrayItem["Reddito pro-capite 2009"] * 1.038));
									listIndex.push(Math.round(arrayItem["Reddito pro-capite 2009"] * 1.070));
									listIndex.push(Math.round(arrayItem["Reddito pro-capite 2009"] * 1.082));
									listIndex.push(Math.round(arrayItem["Reddito pro-capite 2009"] * 1.084));
									listIndex.push(Math.round(arrayItem["Reddito pro-capite 2009"] * 1.083));
									listIndex.push(Math.round(arrayItem["Reddito pro-capite 2009"] * 1.087));
									$('#redditiChart').remove();
									$('#redditiButton').remove();
									$('#chartContainer').append('<canvas id="redditiChart"><canvas>');
									$('#pulsante').append('<div class="row" id="redditiButton"><div class="col-lg-6"><form><label class="class="radio-inline active"><input type="radio" id="generale" value="generale" name="chart" autocomplete="off" checked> Generale</label><label class="radio-inline"><input type="radio" id="dettaglio" value="dettaglio" name="chart" autocomplete="off"> Dettaglio</label></form></div><div class="text-right col-lg-6"><a href="https://rivaluta.istat.it/">Fonte Dati FOI: Istat</a></div>');
									var datizona = {
										"labels": ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
										"datasets": [
						 				{	"label": ["Rivalutazione monetaria del reddito medio 2009 in base all'indice FOI"],
											"data": listIndex,
											"type": "line",
											"fill": false,
											"borderColor": "rgb(255, 0, 0)",
										    	"spanGaps": true,
										    },
										    {
											"label": "Reddito Medio Zona",
											"data": listRedditi,
											"type": "line",
											"fill": false,
											"borderColor": "rgb(54, 162, 235)",
										    },
										    {
											"label": "Reddito Medio Bologna",
											"data": [28641, 28594, 28500, 28431, 28708, 28968, 29386, 30173],
											"type": "line",
											"fill": true,
											"borderColor": "rgb(169,169,169)",
										    }
										]
									    };
									var opzionigenerali = {
										"tooltips": {
												"enabled": true,
												"mode": 'single',
												"callbacks": {
												    "label": function(tooltipItems, data) {
													return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + ' €';
												    }
												}
											    },
										"scales": {
										    "yAxes": [{
											"ticks": {
											    "beginAtZero": false,
											    "stepSize": 10000,
											    "min": 18000,
											    "max": 58000,
											    "callback": function(value, index, values) {
													return value + ' €';
												}
											}
										    }]
										}
									    };
									var opzionidettaglio = {
										"tooltips": {
												"enabled": true,
												"mode": 'single',
												"callbacks": {
												    "label": function(tooltipItems, data) {
													return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + ' €';
												    }
												}
											    },
										"scales": {
										    "yAxes": [{
											"ticks": {
											    "beginAtZero": false,
											    "callback": function(value, index, values) {
													return value + ' €';
												}
											}
										    }]
										}
									    };
										
									function grafo(dati, opzioni) {
										var grafobase =  document.getElementById('redditiChart').getContext('2d');
										new Chart(grafobase, {type: 'line',data: dati, options: opzioni});
									};
									
									grafo(datizona, opzionigenerali);
									
									$('input[type=radio][name=chart]').change(function() {
									switch($(this).val()){
										case 'generale' :
										    $('#redditiChart').remove();
										    $('#chartContainer').append('<canvas id="redditiChart"><canvas>');
										    grafo(datizona, opzionigenerali);
										    break
										case 'dettaglio' :
										    $('#redditiChart').remove();
										    $('#chartContainer').append('<canvas id="redditiChart"><canvas>');
										    grafo(datizona, opzionidettaglio)
										    break
									    }            
									});  						    
		
								    }
								})
							    }
							});
					//inizio Segnalazioni
							$.ajax({
							    dataType: "json",
							    url: "geojson_folder/testsegna.json",
							    success: function(datisegn) {
								datisegn.forEach(function(arrayItem) {
								    if (arrayItem["Zona"] == feature.properties.Nome_zona) {
									    $('#CategorieChart').remove();
									    $('#SegnalazioniButton').remove();
									    $('#pulsanteSEGN').append('<div class="row" id="SegnalazioniButton"><form><label class="class="radio-inline active"><input type="radio" id="sociale" value="sociale" name="chart" autocomplete="off" checked> Degrado Sociale </label><label class="radio-inline"><input type="radio" id="ambientale" value="ambientale" name="chart" autocomplete="off">Degrado Ambientale</label><label class="class="radio-inline active"><input type="radio" id="microcriminalita" value="microcriminalita" name="chart" autocomplete="off"> Microcriminalità </label></form></div>');
									    $('#chartContainerSegn').append('<canvas id="CategorieChart"><canvas>');
												Chart.pluginService.register({
												beforeDraw: function (chart) {
													if (chart.config.options.elements.center) {
											//Get ctx from string
											var ctx = chart.chart.ctx;

														//Get options from the center object in options
											var centerConfig = chart.config.options.elements.center;
											var fontStyle = centerConfig.fontStyle || 'Arial';
														var txt = centerConfig.text;
											var color = centerConfig.color || '#000';
											var sidePadding = centerConfig.sidePadding || 20;
											var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
											//Start with a base font of 30px
											ctx.font = "30px " + fontStyle;

														//Get the width of the string and also the width of the element minus 10 to give it 5px side padding
											var stringWidth = ctx.measureText(txt).width;
											var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

											// Find out how much the font can grow in width.
											var widthRatio = elementWidth / stringWidth;
											var newFontSize = Math.floor(30 * widthRatio);
											var elementHeight = (chart.innerRadius * 2);

											// Pick a new font size so it will not be larger than the height of label.
											var fontSizeToUse = Math.min(newFontSize, elementHeight);

														//Set font settings to draw it correctly.
											ctx.textAlign = 'center';
											ctx.textBaseline = 'middle';
											var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
											var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
											ctx.font = fontSizeToUse+"px " + fontStyle;
											ctx.fillStyle = color;

											//Draw text in center
											ctx.fillText(txt, centerX, centerY);
													}
												}
											});


												var config = {
													type: 'doughnut',
													data: {
														labels: [
														  "Red",
														  "Green",
														  "Yellow"
														],
														datasets: [{
															data: [300, 50, 100],
															backgroundColor: [
															  "#FF6384",
															  "#36A2EB",
															  "#FFCE56"
															],
															hoverBackgroundColor: [
															  "#FF6384",
															  "#36A2EB",
															  "#FFCE56"
															]
														}]
													},
												options: {
													elements: {
														center: {
															text: '999',
											  				color: '#000000', // Default is #000000
											  				fontStyle: 'Arial', // Default is Arial
											 				 sidePadding: 20 // Defualt is 20 (as a percentage)
														}
													},
													 plugins:{
													  labels: [
														  {
														    render: 'label',
														    position: 'outside',
														    fontSize: 18,
														    fontStyle: 'bold',
														    fontColor: '#000'
														  },
														  {
														    render: 'value',
														    fontSize: 18,
														    fontStyle: 'bold',
														    fontColor: '#fff'
														  }
													]},
													legend: {
													    display: false
													 }
												}
											};


												var ctx = document.getElementById("CategorieChart").getContext("2d");
												var myChart = new Chart(ctx, config);
									    }
									})
								    }
								})
							    //fine segnalazioni
					//inizio Politiche
							$.ajax({
							    dataType: "json",
							    url: "geojson_folder/testsegna.json",
							    success: function(datisegn) {
								datisegn.forEach(function(arrayItem) {
								    if (arrayItem["Zona"] == feature.properties.Nome_zona) {
									    $('#EleChart').remove();
									    $('#chartContainerEle').append('<canvas id="EleChart"><canvas>');
									    var dataele =
										{labels: ["pd", "Leu", "m5s", "fi", "lega", "pap", "casapound", "8", "9", "10", "11", "12", "13", "14", "15", "16", "18"],
										 datasets: [{
											data: [300, 50, 100, 152, 432, 323, 234,123, 21, 321, 32, 12, 42, 15, 63, 28, 84, 102]}]
										};
									    var radarpolitico = document.getElementById("EleChart").getContext("2d");
									    var myRadarChart = new Chart(radarpolitico, {
										    type: 'radar',
										    data: dataele
										});
									    }
									})
								    }
								})
							    //fine
						    });
						};
						})
