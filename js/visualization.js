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
							    //inizio
							$.ajax({
							    dataType: "json",
							    url: "geojson_folder/testsegna.json",
							    success: function(datisegn) {
								datisegn.forEach(function(arrayItem) {
								    if (arrayItem["Zona"] == feature.properties.Nome_zona) { 
									    $('#chartContainerSegn').append('<canvas id="CategorieChart"><canvas>');

									  
									    var plug = {
										    afterDatasetsDraw: function(chartInstance, easing) {
											if (chartInstance.config.type == "doughnut") {
											    var ctx = chartInstance.chart.ctx;
											    var sum = 0;
											    chartInstance.data.datasets.forEach(function (dataset, i) {
												var meta = chartInstance.getDatasetMeta(i);
												if (!meta.hidden) {
												    meta.data.forEach(function(element, index) {
													ctx.fillStyle = 'white';

													var fontSize = 16;
													var fontStyle = 'normal';
													var fontFamily = 'Helvetica Neue';
													ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);


													var dataString = chartInstance.data.labels[index];
													var dataString2 = dataset.data[index];

													ctx.textAlign = 'center';
													ctx.textBaseline = 'middle';

													var padding = 5;
													var position = element.tooltipPosition();

													ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
													ctx.fillText(dataString2, position.x, position.y - (fontSize / 2) - padding + fontSize);

													// 円の中心に表示する合計を集計する
													sum += dataset.data[index];
												    });
												}
											    });

											    ctx.fillStyle = 'black';
											    var fontSize = 60;
											    var fontStyle = 'normal';
											    var fontFamily = "Helvetica Neue";
											    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

											    ctx.textAlign = 'center';
											    ctx.textBaseline = 'middle';
											    ctx.fillText(sum.toString(), 300, 290);
											}}}; //plugfine
											new Chart(document.getElementById('CategorieChart'),
										     { "plugin" : plug,
										   	"type":"pie",
										      "data":{"labels":["Microcriminalità","Degrado ambientale","Degrado sociale"],
											      "datasets":[{"label":"Categorie Segnalazioni",
													   "data":[300,50,100],
													   "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}]}});
										    
		
									    }
									})
								    }
								})
							    //fine
						    });
						};
						})
