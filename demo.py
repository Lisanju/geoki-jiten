import openpyxl

# Path
wbPB = openpyxl.load_workbook("data/ptbr_okinawago_data.xlsx")
# Worksheet ativo
wsPB = wbPB.active

# Função para encontrar palavra no worksheet
def acharPalavra(string):
    for i in range(1,wsPB.max_row+1):
        for j in range(1,2):
            if string == wsPB.cell(i,j).value:
                print(f"Palavra encontrada: {wsPB.cell(i,j).value}")

acharPalavra("?aci")
