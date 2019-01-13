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
									$('#pulsante').append('<div id="redditiButton"><button class="btn btn-primary" id="generale">Generale</button><button class="btn btn-primary" id="dettaglio">Dettaglio</button></div>');
									var datizona = {
										"labels": ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
										"datasets": [
						 				{	"label": ["Rivalutazione monetaria", "del reddito medio 2009", "in base all'indice FOI"],
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
										"callbacks": {
												label: function(tooltipItems, data) {
												    return "$" + tooltipItems.yLabel.toString();
												},
										"scales": {
										    "yAxes": [{
											"ticks": {
											    "beginAtZero": false,
											    "stepSize": 10000,
											    "min": 18000,
											    "max": 58000
											}
										    }]
										}
									    };
									function grafogenerale(dati, opzioni) {
										var grafobase =  document.getElementById('redditiChart').getContext('2d');
										new Chart(grafobase, {type: 'line',data: dati, options: opzioni});
									}
									function grafodettaglio(dati) {
										var grafobase =  document.getElementById('redditiChart').getContext('2d');
										new Chart(grafobase, {type: 'line',data: dati});
									}
									grafogenerale(datizona, opzionigenerali);
									    
									$("#generale").on('click', function() {
									$('#redditiChart').remove();
									$('#chartContainer').append('<canvas id="redditiChart"><canvas>');
									grafogenerale(datizona, opzionigenerali)
									});
									$("#dettaglio").on('click', function() {
									$('#redditiChart').remove();
									$('#chartContainer').append('<canvas id="redditiChart"><canvas>');
									grafodettaglio(datizona)
									})
								    }
								})
							    }
							}).error(function() {});
						    });
						};
						})
