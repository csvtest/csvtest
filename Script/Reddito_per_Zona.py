import pandas

data = [{'Borgo Panigale': ['Via del Vivaio', 'Lavino di Mezzo', 'Rigosa', 'Casteldebole', 'Triumvirato-Pietra', 'Borgo Centro', 'Ducati-Villaggio Ina', 'Bargellino', 'Aeroporto', 'La Birra', 'Lungo Reno']},
{'Lame': ['Laghetti del Rosario', 'La Noce', 'Tiro A Segno', 'Pescarola', 'Lazzaretto', 'Beverara']},
{'Corticella': ['San Savino', 'Savena Abbandonato', 'Mulino del Gomito', 'Croce Coperta', 'La Dozza']},
{'San Donato': ['Cadriano-Calamosco', 'CAAB', 'Scalo Merci San Donato', 'Pilastro', 'San Donnino', 'Fiera', 'Michelino', 'Via Mondo', 'Via del Lavoro']},
{'Bolognina': ['Caserme Rosse-Manifattura', 'CNR', 'Arcoveggio', 'Via Ferrarese', 'Ex Mercato Ortofrutticolo', 'Piazza dell Unita']},
{'Santa Viola': ['Agucchi', 'Emilia Ponente']},
{'Barca': ['Villaggio della Barca', 'Battindarno', 'Canale di Reno']},
{'Saffi': ['Scalo Ravone', 'Prati di Caprara-Ospedale Maggiore', 'Zanardi', 'Via Vittorio Veneto', 'Velodromo']},
{'Costa Saragozza': ['XXI Aprile', 'Stadio-Meloncello', 'San Giuseppe', 'Ravone', 'Via del Genio', 'San Luca']},
{'Colli': ['Paderno', 'Osservanza', 'San Michele in Bosco']},
{'San Ruffillo': ['Monte Donato', 'Ponte Savena-La Bastia', 'Via Toscana', 'Corelli']},
{'Mazzini': ['Ospedale Bellaria', 'Via Arno', 'Lungo Savena', 'Due Madonne', 'Fossolo', 'Pontevecchio', 'Bitone', 'Cavedone']},
{'Murri': ['Mezzofanti', 'Dagnini', 'Chiesanuova', 'Siepelunga', 'Giardini Margherita']},
{'San Vitale': ['Cirenaica', 'Ospedale Sant Orsola', 'Mengoli', 'Guelfa', 'Scandellara', 'Via Larga', 'Roveri', 'Croce del Biacco', 'Stradelli Guelfi']},
{'Marconi': ['Marconi-1', 'Marconi-2']},
{'Irnerio': ['Irnerio-1', 'Irnerio-2']},
{'Galvani': ['Galvani-1', 'Galvani-2']},
{'Malpighi': ['Malpighi-1', 'Malpighi-2']}]

data2 = "Reddito_CSV_per_anno_FINITO.csv"

def process_data(source_csv_file_path):
    import csv
    with open(source_csv_file_path, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=',')
        data = [dict(x) for x in reader]
    return data

def zone_creator(data, data2):
    new_dicts_list = []
    new_dict = dict()
    lista_somme2009, lista_somme2010, lista_somme2011, lista_somme2012, lista_somme2013, lista_somme2014, lista_somme2015, lista_somme2016 = [], [], [], [], [], [], [], []
    for elem in data:
        for x, y in elem.items():
            for z in y:
                for dictionary in data2:
                    if z in dictionary['Area Statistica']:
                        if z not in new_dict:
                            new_dict.update({'Zona': x})
                        lista_somme2009.append(dictionary['Reddito pro-capite 2009'])
                        lista_somme2010.append(dictionary['Reddito pro-capite 2010'])
                        lista_somme2011.append(dictionary['Reddito pro-capite 2011'])
                        lista_somme2012.append(dictionary['Reddito pro-capite 2012'])
                        lista_somme2013.append(dictionary['Reddito pro-capite 2013'])
                        lista_somme2014.append(dictionary['Reddito pro-capite 2014'])
                        lista_somme2015.append(dictionary['Reddito pro-capite 2015'])
                        lista_somme2016.append(dictionary['Reddito pro-capite 2016'])
            if len(lista_somme2009) != 0:
                media2009 = round(sum([int(x) for x in lista_somme2009]) / len(lista_somme2009))
                new_dict.update({'Reddito pro-capite 2009': media2009})
                media2010 = round(sum([int(x) for x in lista_somme2010]) / len(lista_somme2010))
                new_dict.update({'Reddito pro-capite 2010': media2010})
                media2011 = round(sum([int(x) for x in lista_somme2011]) / len(lista_somme2011))
                new_dict.update({'Reddito pro-capite 2011': media2011})
                media2012 = round(sum([int(x) for x in lista_somme2012]) / len(lista_somme2012))
                new_dict.update({'Reddito pro-capite 2012': media2012})
                media2013 = round(sum([int(x) for x in lista_somme2013]) / len(lista_somme2013))
                new_dict.update({'Reddito pro-capite 2013': media2013})
                media2014 = round(sum([int(x) for x in lista_somme2014]) / len(lista_somme2014))
                new_dict.update({'Reddito pro-capite 2014': media2014})
                media2015 = round(sum([int(x) for x in lista_somme2015]) / len(lista_somme2015))
                new_dict.update({'Reddito pro-capite 2015': media2015})
                media2016 = round(sum([int(x) for x in lista_somme2016]) / len(lista_somme2016))
                new_dict.update({'Reddito pro-capite 2016': media2016})
        new_dicts_list.append(new_dict)
        lista_somme2009, lista_somme2010, lista_somme2011, lista_somme2012, lista_somme2013, lista_somme2014, lista_somme2015, lista_somme2016 = [], [], [], [], [], [], [], []
        new_dict = dict()

    df = pandas.DataFrame(new_dicts_list)
    df.to_csv('Reddito_2009-2016_per_zone.csv', columns=['Zona', 'Reddito pro-capite 2009', 'Reddito pro-capite 2010', 'Reddito pro-capite 2011', 'Reddito pro-capite 2012', 'Reddito pro-capite 2013', 'Reddito pro-capite 2014', 'Reddito pro-capite 2015', 'Reddito pro-capite 2016'], sep=',', encoding='utf-8')

    return new_dicts_list




print(zone_creator(data, process_data(data2)))
