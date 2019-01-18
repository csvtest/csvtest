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

	
						var limiti = map.getBounds();
						map.setMaxBounds(limiti);
					// Settaggio colore feature geojson
						function getColor(d) {
						return 	d > 33600 ?  '#194d33' :
							d > 27200  ? '#2d8659' :
							d > 20800  ? '#40bf80' :
							d > 14400  ? '#79d2a6' :
								     '#b3e6cc' ;
						};
						function stylegeo(feature) {
						    return {
							color: '#f5f5f0',
							fillColor: getColor(feature.properties.Censimento2017_zona),
							fillOpacity: 0.6,
						    };
						};
					
					
						var legend = L.control({
						  position: 'bottomleft'
						});

						legend.onAdd = function(map) {
						  var div = L.DomUtil.create('div', 'info legend'),
						    grades = [8000,14400,20800,27200,33600],
						    labels = ['<strong> Abitanti per Zone di Bologna </strong>'],
						    from, to;

						  for (var i = 0; i < grades.length; i++) {
						    from = grades[i];
						    to = grades[i + 1];

						    labels.push(
						      '<i style="background:' + getColor(from + 1) + '"><span style="opacity:0;">FM</span> </i> ' +
						      from + (to ? '&ndash;' + to : '+'));
						  }

						  div.innerHTML = labels.join('<br>');
						  return div;
						};
						
						legend.addTo(map);
	
						var geojson = L.geoJson(zone_bologna, {style: stylegeo, onEachFeature: onEachFeature}).addTo(map);

						var firsttime = true;
	
						function highlight (layer) {
						layer.setStyle({
							color: 'black',
							weight: 6,
							//dashArray: ''
						});
						if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
							layer.bringToFront();
						    }	
						}

						function dehighlight (layer) {
						  if (selected === null || selected._leaflet_id !== layer._leaflet_id) {
							  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
							  	layer.bringToBack();
							  }
							  geojson.resetStyle(layer);
						  }
						}

						function select (layer) {
						  if (selected !== null) {
						    var previous = selected;
						  }
							//map.fitBounds(layer.getBounds());
							selected = layer;
							if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
							layer.bringToFront();
						    	}
							if (previous) {
							  dehighlight(previous);
							}
						}

						var selected = null;
	
						//var geojson = L.geoJson(zone_bologna, {style: stylegeo, onEachFeature: onEachFeature}).addTo(map);
						//$.ajax({
						 //   dataType: "json",
						 //   url: "geojson_folder/ZoneBologna.geojson",
						 //   success: function(data) {
						//	var geojson = L.geoJson(data, {
						//	    style: stylegeo,
						//	    onEachFeature: onEachFeature
						//	}).addTo(map);
						//    }
						//}).error(function() {});
						function onEachFeature(feature, layer) {
						    layer.bindPopup(feature.properties.Nome_zona);
						    //layer.on( 'click', function(e) {
							layer.on({
							    'mouseover': function (e) {
							      highlight(e.target);
							    },
							    'mouseout': function (e) {
							      dehighlight(e.target);
							    },
							    'click': function (e) {
								    select(e.target);
							
							$.ajax({
							    dataType: "json",
							    url: "geojson_folder/redditizone.json",
							    success: function(dati) {
								dati.forEach(function(arrayItem) {
								    if (arrayItem["Zona"] == feature.properties.Nome_zona) {
									$('.information').html('');
									$('.information').html('<h2><span class="badge badge-primary">'+arrayItem["Zona"])+'</span></h2>';
									
									if (firsttime == true){
										$('.playground').html('');
										$('.playground').html('<div class="card"> <div class="card-header" id="headingOne"> <h5 class="mb-0"> <button id= "elezioniPUL" class="btn btn-link" data-toggle="collapse" data-target="#collELEZIONI" aria-expanded="true" aria-controls="collapseOne"> ELEZIONI 4 MARZO 2018 </button> </h5> </div> <div id="collELEZIONI" class="collapse" aria-labelledby="headingOne" data-parent="#accordion"> <div class="card-body"> <div id="pulsanteELE"></div> <div id="chartContainerEle"></div> </div> </div> </div> <div class="card"> <div class="card-header" id="headingTwo"> <h5 class="mb-0"> <button id= "redditiPUL" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collREDDITI" aria-expanded="false" aria-controls="collapseTwo"> REDDITI 2009-2016 </button> </h5> </div> <div id="collREDDITI" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion"> <div class="card-body"> <div id="chartContainer"> <div id="redditiButton">seleziona una zona di Bologna per visualizzarne i dati </div> <canvas id="redditiChart" width="400" height="400"></canvas> </div> <div id="pulsante"> </div> </div> </div> </div> <div class="card"> <div class="card-header" id="headingThree"> <h5 class="mb-0"> <button "segnalazioniPUL" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collSEGNA" aria-expanded="false" aria-controls="collapseThree"> SEGNALAZIONI 2017 </button> </h5> </div> <div id="collSEGNA" class="collapse" aria-labelledby="headingThree" data-parent="#accordion"> <div class="card-body"> <div id="chartContainerSegn"></div> <div id="pulsanteSEGN"></div> </div> </div> </div>');
										firsttime = false;
									}
									var listRedditi = [];
									listRedditi.push(arrayItem["Reddito medio pro-capite 2009"]);
									listRedditi.push(arrayItem["Reddito medio pro-capite 2010"]);
									listRedditi.push(arrayItem["Reddito medio pro-capite 2011"]);
									listRedditi.push(arrayItem["Reddito medio pro-capite 2012"]);
									listRedditi.push(arrayItem["Reddito medio pro-capite 2013"]);
									listRedditi.push(arrayItem["Reddito medio pro-capite 2014"]);
									listRedditi.push(arrayItem["Reddito medio pro-capite 2015"]);
									listRedditi.push(arrayItem["Reddito medio pro-capite 2016"]);
									var listIndex = [];
									listIndex.push(arrayItem["Reddito medio pro-capite 2009"]);
									listIndex.push(Math.round(arrayItem["Reddito medio pro-capite 2009"] * 1.016));
									listIndex.push(Math.round(arrayItem["Reddito medio pro-capite 2009"] * 1.043));
									listIndex.push(Math.round(arrayItem["Reddito medio pro-capite 2009"] * 1.074));
									listIndex.push(Math.round(arrayItem["Reddito medio pro-capite 2009"] * 1.087));
									listIndex.push(Math.round(arrayItem["Reddito medio pro-capite 2009"] * 1.089));
									listIndex.push(Math.round(arrayItem["Reddito medio pro-capite 2009"] * 1.088));
									listIndex.push(Math.round(arrayItem["Reddito medio pro-capite 2009"] * 1.087));
									$('#redditiChart').remove();
									$('#redditiButton').remove();
									$('#chartContainer').append('<canvas id="redditiChart"><canvas>');
									$('#pulsante').append('<div class="row" id="redditiButton"><div class="col-lg-6"><form><label class="class="radio-inline active"><input type="radio" id="generale" value="generale" name="radiored" autocomplete="off" checked> Generale</label><label class="radio-inline"><input type="radio" id="dettaglio" value="dettaglio" name="radiored" autocomplete="off"> Dettaglio</label></form></div><div class="text-right col-lg-6"><a href="https://rivaluta.istat.it/">Fonte Dati FOI: Istat</a></div>');
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
											"data": [24718, 24819, 24833, 24709, 25112, 25178, 25510, 25815],
											"type": "line",
											"fill": true,
											"borderColor": "rgb(169,169,169)",
										    }
										]
									    };
									var opzionigenerali = {
										responsiveAnimationDuration : 1000,
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
										responsiveAnimationDuration : 1000,
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
									
									$('input[type=radio][name=radiored]').change(function() {
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
							    url: "geojson_folder/jsonsegnalazioni.json",
							    success: function(datisegn) {
								datisegn.forEach(function(arrayItem) {
								    if (arrayItem["Zona"] == feature.properties.Nome_zona) {
									    $('#CategorieChart').remove();
									    $('#SegnalazioniButton').remove();
									    $('#pulsanteSEGN').append('<div class="row" id="SegnalazioniButton"><form><label class="class="radio-inline active"><input type="radio" id="segnalazioni" value="segnalazioni" name="radioseg" autocomplete="off" checked>Tutte le Segnalazioni </label><input type="radio" id="sociale" value="sociale" name="radioseg" autocomplete="off"> Sociale </label><label class="radio-inline"><input type="radio" id="ambientale" value="ambientale" name="radioseg" autocomplete="off"> Ambientale </label><label class="class="radio-inline active"><input type="radio" id="microcriminalita" value="microcriminalita" name="radioseg" autocomplete="off"> Microcriminalità </label></form></div>');
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
									    
									    		var Labelcrim = [];
									    		var Labelamb = [];
											var Labelsoc = [];
											
									    		var Valcrim = [];
									    		var Valamb = [];
											var Valsoc = [];
	
									    		for (var i in arrayItem.Segnalazioni)
											{
										    	if( arrayItem.Segnalazioni[i]["Categoria Segnalazione"] === "Microcriminalita"){ Labelcrim.push(arrayItem.Segnalazioni[i]["Sottocategoria Segnalazione"]); Valcrim.push(arrayItem.Segnalazioni[i]["Numero Segnalazioni"])};
											if( arrayItem.Segnalazioni[i]["Categoria Segnalazione"] === "Ambientale"){ Labelamb.push(arrayItem.Segnalazioni[i]["Sottocategoria Segnalazione"]); Valamb.push(arrayItem.Segnalazioni[i]["Numero Segnalazioni"])};
											if( arrayItem.Segnalazioni[i]["Categoria Segnalazione"] === "Sociale"){ Labelsoc.push(arrayItem.Segnalazioni[i]["Sottocategoria Segnalazione"]); Valsoc.push(arrayItem.Segnalazioni[i]["Numero Segnalazioni"])};	
											}
											var TOTsegn = arrayItem["Totale Sociale"]+ arrayItem["Totale Ambientale"]+ arrayItem["Totale Microcriminalita"];
											if (arrayItem["Zona"] != "Colli"){var TOTcrim = Valcrim.reduce((x, y) => x + y);};
											var TOTamb = Valamb.reduce((x, y) => x + y);
											var TOTsoc = Valsoc.reduce((x, y) => x + y);
											//totale segnalazioni
												var datitotsegn = {
														labels: [
														  "Sociale",
														  "Ambientale",
														  "Microcriminalità"
														],
														datasets: [{
															data: [arrayItem["Totale Sociale"], arrayItem["Totale Ambientale"], arrayItem["Totale Microcriminalita"]],
															backgroundColor: [
															  "#8a65b3",
															  "#3da997",
															  "#ffa345"
															],
															hoverBackgroundColor: [
															  "#8a65b3",
															  "#3da997",
															  "#ffa345"
															]
														}]
													};
									    //ambiente
									    			var datiamb = {
														labels: Labelamb,
														datasets: [{
															data: Valamb,
															backgroundColor: [
															  "#ecf8f6", "#daf1ed", "#c7ebe5", "#b4e4dc", "#a1ddd3", "#8fd6ca", "#7cd0c2", "#69c9b9", "#56c2b0", "#44bba7", "#3da997", "#369686"
															],
														}]
													};
									    //sociale
									                       var datisoc = {
														labels: Labelsoc,
														datasets: [{
															data: Valsoc,
															backgroundColor: [
																"#f2eef7", "#e5ddee", "#d8cce6", "#cbbbdd", "#beaad5", "#b198cd", "#a487c4", "#9776bc", "#8a65b3", "#7d54ab", "#704c9a", "#644389"
															],
															
														}]
													};
									    //microcrimine
									                       var daticrim = {
														labels: Labelcrim,
														datasets: [{
															data: Valcrim,
															backgroundColor: [
															  "#fff2e6", "#ffe6cc", "#ffd9b3",  "#ffcc99", "#ffbf80", "#ffb366", "#ffa64d", "#ffa345", "#ff9933", "#ff8c1a", "#ff8000", "#e67300"
															],
															
														}]
													};
											var optiongensegn = {
													responsiveAnimationDuration : 1000,
													elements: {
														center: {
															text: TOTsegn,
											  				color: '#000000', // Default is #000000
											  				fontStyle: 'Arial', // Default is Arial
											 				 sidePadding: 20 // Defualt is 20 (as a percentage)
														}
													},
													 plugins:{
														 outlabels: {
														 display : false,
														 },
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
												};
									    		var optionspec = {
													responsiveAnimationDuration : 1000,
													layout: {
														padding: {
															top:30
														}
													},
												        zoomOutPercentage: 60,
													
													 plugins:{
													outlabels: {
														    text: '%l %v',
														    color: 'black',
														    stretch: 45,
														    font: {
															//resizable: true,
															minSize: 13,
															maxSize: 13
														    }
														},
													 },
													legend: {
													    display: false
													 }
												};
									    		

									    		function grafisegn(datsegn, opt) {
									    			var ctx = document.getElementById("CategorieChart").getContext("2d");
												new Chart(ctx, {type: 'outlabeledPie',data: datsegn, options: opt});
											}
									    		function grafitot(datsegn, opt) {
									    			var ctx = document.getElementById("CategorieChart").getContext("2d");
												new Chart(ctx, {type: 'doughnut',data: datsegn, options: opt});
											}
									   		
											 grafitot(datitotsegn, optiongensegn);
									    if (arrayItem["Zona"] != "Colli"){
									    		$('input[type=radio][name=radioseg]').change(function() {
										switch($(this).val()){
											case 'segnalazioni' :
											    $('#CategorieChart').remove();
											    $('#chartContainerSegn').append('<canvas <canvas id="CategorieChart"><canvas>');
											    grafitot(datitotsegn, optiongensegn);
											    break
											case 'sociale' :
											    $('#CategorieChart').remove();
											    $('#chartContainerSegn').append('<canvas <canvas id="CategorieChart"><canvas>');
											    grafisegn(datisoc, optionspec)
											    break
											case 'ambientale' :
											    $('#CategorieChart').remove();
   											    $('#chartContainerSegn').append('<canvas <canvas id="CategorieChart"><canvas>');
											    grafisegn(datiamb, optionspec)
											    break
											case 'microcriminalita' :
											    $('#CategorieChart').remove();
											    $('#chartContainerSegn').append('<canvas <canvas id="CategorieChart"><canvas>');
											    grafisegn(daticrim, optionspec)
											    break
												}
												}
											    )}
										    if (arrayItem["Zona"] == "Colli"){
											    $('input[type=radio][name=radioseg]').change(function() {
										switch($(this).val()){
											case 'segnalazioni' :
											    $('#CategorieChart').remove();
											    $('#chartContainerSegn').append('<canvas <canvas id="CategorieChart"><canvas>');
											    grafitot(datitotsegn, optiongensegn);
											    break
											case 'sociale' :
											    $('#CategorieChart').remove();
											    $('#chartContainerSegn').append('<canvas <canvas id="CategorieChart"><canvas>');
											    grafisegn(datisoc, optionspec)
											    break
											case 'ambientale' :
											    $('#CategorieChart').remove();
   											    $('#chartContainerSegn').append('<canvas  <canvas id="CategorieChart"><canvas>');
											    grafisegn(datiamb, optionspec)
											    break
											case 'microcriminalita' :
											    $('#CategorieChart').remove();
											    $('#chartContainerSegn').append('<div id="CategorieChart"><div>Nessuna segnalazione di microcriminalità in questa Zona</div><canvas"><canvas></div>');
											    break
												}
												}
											    )
										    }
									    //fine if
											}
                                               					 })
                                                				}
                                           				 })
							    //fine segnalazioni
					//inizio Politiche
							$.ajax({
							    dataType: "json",
							    url: "geojson_folder/elezioni.json",
							    success: function(datisegn) {
								datisegn.forEach(function(arrayItem) {
								    if (arrayItem["Zona"] == feature.properties.Nome_zona) {
									    $('#ELEButton').remove();
									    $('#EleChartrad').remove();
									    $('#EleChartbar').remove();
									    $('#pulsanteELE').append('<div class="row" id="ELEButton"><form><label class="class="radio-inline active"><input type="radio" id="camera" value="camera" name="radioele" autocomplete="off" checked>Camera dei Deputati</label><label class="radio-inline"><input type="radio" id="senato" value="senato" name="radioele" autocomplete="off">Senato</label></form>');
									    $('#chartContainerEle').append('<canvas id="EleChartrad"><canvas>');
									    $('#chartContainerEle').append('<canvas id="EleChartbar"><canvas>');
									    var datisenatozona = [];
									    datisenatozona.push(arrayItem["Percentuale voti Movimento 5 Stelle Senato"]);
									    datisenatozona.push(arrayItem["Percentuale voti Partito Democratico Senato"]);
									    datisenatozona.push(arrayItem["Percentuale voti Lega Nord Senato"]);
									    datisenatozona.push(arrayItem["Percentuale voti Forza Italia Senato"]);
									    datisenatozona.push(arrayItem["Percentuale voti Fratelli d Italia Senato"]);
									    datisenatozona.push(arrayItem["Percentuale voti Liberi e Uguali Senato"]);
									    datisenatozona.push(arrayItem["Percentuale voti Piu Europa Senato"]);
									    datisenatozona.push((100 - datisenatozona.reduce((x, y) => x + y)).toFixed(2));
									    var daticamerazona = [];
									    daticamerazona.push(arrayItem["Percentuale voti Movimento 5 Stelle Camera"]);
									    daticamerazona.push(arrayItem["Percentuale voti Partito Democratico Camera"]);
									    daticamerazona.push(arrayItem["Percentuale voti Lega Nord Camera"]);
									    daticamerazona.push(arrayItem["Percentuale voti Forza Italia Camera"]);
									    daticamerazona.push(arrayItem["Percentuale voti Fratelli d Italia Camera"]);
									    daticamerazona.push(arrayItem["Percentuale voti Liberi e Uguali Camera"]);
									    daticamerazona.push(arrayItem["Percentuale voti Piu Europa Camera"]);
									    daticamerazona.push((100 - daticamerazona.reduce((x, y) => x + y)).toFixed(2));
									    
									    
									    //CAMERA
									    //
									    var dataelecam =
										{labels: ["Movimento 5 Stelle", "Partito Democratico", "Lega Nord", "Forza Italia", "Fratelli D'Italia", "Liberi E Uguali", "Più Europa", "Altri Partiti"],
										 datasets: [{
											"label": "Risultati Camera Zona",
											data: daticamerazona }
											   ]
										};
									    var dataelecamtot =
										{labels: ["Movimento 5 Stelle", "Partito Democratico", "Lega Nord", "Forza Italia", "Fratelli D'Italia", "Liberi E Uguali", "Più Europa", "Altri Partiti"],
										 datasets: [{
											 "label": "Risultati Camera Zona",
												data: daticamerazona ,
											    backgroundColor: "red"},
											    {
											"label": "Risultati Camera Italia",
											data: [32.68, 18.76, 17.35, 14.00, 4.35, 3.39, 2.56, 6.91],
											 },
											   {
											"label": "Risultati Camera Bologna",
											data: [21.90, 29.28, 13.59, 9.62, 3.58, 8.04, 6.23, 7.76],
											      backgroundColor: "#545556"}
											   ]
										};
									    
									    
									    
									    //SENATO
									    //
									    var dataelesen =
										{labels: ["Movimento 5 Stelle", "Partito Democratico", "Lega Nord", "Forza Italia", "Fratelli D'Italia", "Liberi E Uguali", "Più Europa", "Altri Partiti"],
										 datasets: [{
											"label": "Risultati Senato Zona",
											data: datisenatozona }
											   ]
										};
										
										    
										    
									    var dataelesentot =
										{labels: ["Movimento 5 Stelle", "Partito Democratico", "Lega Nord", "Forza Italia", "Fratelli D'Italia", "Liberi E Uguali", "Più Europa", "Altri Partiti"],
										 datasets: [{
											 "label": "Risultati Senato Zona",
												data: datisenatozona ,
											    backgroundColor: "red"},
											    {
											"label": "Risultati Senato Italia",
											data: [32.22, 19.14, 17.61, 14.43, 4.26, 3.28, 2.37, 6.69],
											 },
											   {
											"label": "Risultati Senato Bologna",
											data: [21.97, 28.15, 13.99, 9.75, 3.48, 9.56, 5.43, 7.67],
											      backgroundColor: "#545556"}
											   ]
										};
									    
									    var opzionibarsenato = {
										    	responsiveAnimationDuration : 1000,
											"tooltips": {"enabled": true,
													"mode": 'single',
													"callbacks": {
													    "label": function(tooltipItems, data) {
														return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + '%';
													    }
													}
												    },
											"scales": {
											    "xAxes": [{
												"ticks": {
												    "beginAtZero": true,
												    "max": 35,
												    "callback": function(value, index, values) {
														return value + '%';
													}
												}
											    }]
											}
									    	};
									    
									     var opzioniradarsenato = {
										     responsiveAnimationDuration : 1000,
										     "tooltips": {
														"enabled": true,
														"mode": 'single',
														"callbacks": {
														    "label": function(tooltipItems, data) {
															return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + '%';
														    }
														}
													},
													"scale": {
														"ticks": {
														    "beginAtZero": true,
														    "max": 35
														}
													},
													legend: {
														    display: false
														 },
											   		};
									    
									    
			
									    
									    function grafiele(datirad, datibar) {
										var radarpolitico = document.getElementById("EleChartrad").getContext("2d");
									   	new Chart(radarpolitico,{"type":'radar',"data": datirad ,"options":opzioniradarsenato});
									    
									   	var barrapolitica = document.getElementById("EleChartbar").getContext("2d");
									    	new Chart(barrapolitica,{"type":"horizontalBar","data": datibar ,"options":opzionibarsenato});
										};
									    
									    grafiele(dataelecam, dataelecamtot);
									    
									    $('input[type=radio][name=radioele]').change(function() {
										switch($(this).val()){
											case 'camera' :
											    $('#EleChartrad').remove();
									    		    $('#EleChartbar').remove();
											    $('#chartContainerEle').append('<canvas id="EleChartrad"><canvas>');
									    		    $('#chartContainerEle').append('<canvas id="EleChartbar"><canvas>');	
											    grafiele(dataelecam, dataelecamtot);
											    break
											case 'senato' :
											    $('#EleChartrad').remove();
									    		    $('#EleChartbar').remove();
											    $('#chartContainerEle').append('<canvas id="EleChartrad"><canvas>');
									    		    $('#chartContainerEle').append('<canvas id="EleChartbar"><canvas>');
											    grafiele(dataelesen, dataelesentot)
											    break
										    }            
										}); 
									    }
									})
								    }
								})
							    //fine
						    }});
						};
						})
