def sottocat_in_altro(data):
    lista = []
    new_dict = {}
    for row in data:
        if row['Sottocategoria'] == ' ' or row['Sottocategoria'] == '':
            new_dict.update({'Zona': row['Zona']})
            new_dict.update({'Categoria': row['Categoria']})
            new_dict.update({'Sottocategoria': 'Altro'})
            new_dict.update({'Numero Segnalazioni': row['Numero Segnalazioni']})
            lista.append(new_dict)
            new_dict = {}
        else:
            new_dict.update({'Zona': row['Zona']})
            new_dict.update({'Categoria': row['Categoria']})
            new_dict.update({'Sottocategoria': row['Sottocategoria']})
            new_dict.update({'Numero Segnalazioni': row['Numero Segnalazioni']})
            lista.append(new_dict)
            new_dict = {}

    return data
