import pandas

lista_aree_statistiche = ['Aeroporto','Agucchi','Arcoveggio','Bargellino','Battindarno','Beverara','Bitone','Borgo Centro','CAAB','Cadriano-Calamosco','Canale di Reno','Caserme Rosse-Manifattura','Casteldebole','Cavedone','Chiesanuova','Cirenaica','CNR','Corelli','Croce Coperta','Croce del Biacco','Dagnini','Ducati-Villaggio Ina','Due Madonne','Emilia Ponente','Ex Mercato Ortofrutticolo','Fiera','Fossolo','Galvani-1','Galvani-2','Giardini Margherita','Guelfa','Irnerio-1','Irnerio-2','La Birra','La Dozza','La Noce','Laghetti del Rosario','Lavino di Mezzo','Lazzaretto','Lungo Reno','Lungo Savena','Malpighi-1','Malpighi-2','Marconi-1','Marconi-2','Mengoli','Mezzofanti','Michelino','Monte Donato','Mulino del Gomito','Ospedale Bellaria',"Ospedale Sant Orsola",'Osservanza','Paderno','Pescarola',"Piazza dell Unita",'Pilastro','Ponte Savena-La Bastia','Pontevecchio','Prati di Caprara-Ospedale Maggiore','Ravone','Rigosa','Roveri','San Donnino','San Giuseppe','San Luca','San Michele in Bosco','San Savino','Savena Abbandonato','Scalo Merci San Donato','Scalo Ravone','Scandellara','Siepelunga','Stadio-Meloncello','Stradelli Guelfi','Tiro A Segno','Triumvirato-Pietra','Velodromo','Via Arno','Via del Genio','Via del Lavoro','Via del Vivaio','Via Ferrarese','Via Larga','Via Mondo','Via Toscana','Via Vittorio Veneto','Villaggio della Barca','XXI Aprile','Zanardi']

def process_data(source_csv_file_path):
    import csv
    with open(source_csv_file_path, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        data = [dict(x) for x in reader]
    return data

def leva_colonna_inutile(data):
    for dictionary in data:
        if "Reddito imponibile ai fini dell'addizionale irpef" in dictionary:
            del dictionary["Reddito imponibile ai fini dell'addizionale irpef"]
    return data

def eusebio(data1, data2, data3, data4, data5, data6, data7, data8):
    list_new_dicts = []
    for elem in lista_aree_statistiche:
        new_dict = dict()
        for dict1 in data1:
            for (x, y) in dict1.items():
                if elem == y:
                    reddito_pro_capite = int(dict1['Reddito imponibile ai fini irpef'].replace('.', '')) / int(dict1['N contribuenti'].replace('.', ''))
                    new_dict.update({'Area Statistica': elem})
                    new_dict.update({'Reddito pro-capite 2009': str(int(reddito_pro_capite))})
        for dict2 in data2:
            for (x, y) in dict2.items():
                if elem == y:
                    reddito_pro_capite = int(dict2['Reddito imponibile ai fini irpef'].replace('.', '')) / int(dict2['N contribuenti'].replace('.', ''))
                    new_dict.update({'Reddito pro-capite 2010': str(int(reddito_pro_capite))})
        for dict3 in data3:
            for (x, y) in dict3.items():
                if elem == y:
                    reddito_pro_capite = int(dict3['Reddito imponibile ai fini irpef'].replace('.', '')) / int(dict3['N contribuenti'].replace('.', ''))
                    new_dict.update({'Reddito pro-capite 2011': str(int(reddito_pro_capite))})
        for dict4 in data4:
            for (x, y) in dict4.items():
                if elem == y:
                    reddito_pro_capite = int(dict4['Reddito imponibile ai fini irpef'].replace('.', '')) / int(dict4['N contribuenti'].replace('.', ''))
                    new_dict.update({'Reddito pro-capite 2012': str(int(reddito_pro_capite))})
        for dict5 in data5:
            for (x, y) in dict5.items():
                if elem == y:
                    reddito_pro_capite = int(dict5['Reddito imponibile ai fini irpef'].replace('.', '')) / int(dict5['N contribuenti'].replace('.', ''))
                    new_dict.update({'Reddito pro-capite 2013': str(int(reddito_pro_capite))})
        for dict6 in data6:
            for (x, y) in dict6.items():
                if elem == y:
                    reddito_pro_capite = int(dict6['Reddito imponibile ai fini irpef'].replace('.', '')) / int(dict6['N contribuenti'].replace('.', ''))
                    new_dict.update({'Reddito pro-capite 2014': str(int(reddito_pro_capite))})
        for dict7 in data7:
            for (x, y) in dict7.items():
                if elem == y:
                    reddito_pro_capite = int(dict7['Reddito imponibile ai fini irpef'].replace('.', '')) / int(dict7['N contribuenti'].replace('.', ''))
                    new_dict.update({'Reddito pro-capite 2015': str(int(reddito_pro_capite))})
        for dict8 in data8:
            for (x, y) in dict8.items():
                if elem == y:
                    reddito_pro_capite = int(dict8['Reddito imponibile ai fini irpef'].replace('.', '')) / int(dict8['N contribuenti'].replace('.', ''))
                    new_dict.update({'Reddito pro-capite 2016': str(int(reddito_pro_capite))})

        list_new_dicts.append(new_dict)
        # print(pandas.DataFrame.from_dict(list_new_dicts))

        df = pandas.DataFrame(list_new_dicts)
        df.to_csv('gattinodiprova.csv', sep='\t', encoding='utf-8')

    return list_new_dicts

print(eusebio(leva_colonna_inutile(process_data('redditi_2009_per_area_statistica.csv')), leva_colonna_inutile(process_data('redditi_2010_per_area_statistica.csv')), leva_colonna_inutile(process_data('redditi_2011_per_area_statistica.csv')), leva_colonna_inutile(process_data('redditi_2012_per_area_statistica.csv')), leva_colonna_inutile(process_data('redditi_2013_per_area_statistica.csv')), leva_colonna_inutile(process_data('redditi_2014_per_area_statistica.csv')), leva_colonna_inutile(process_data('redditi_2015_per_area_statistica.csv')), process_data(leva_colonna_inutile('redditi_2016_per_area_statistica.csv'))))

