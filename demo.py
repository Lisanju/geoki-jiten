import openpyxl

ptbrData = openpyxl.load_workbook("data/ptbr_okinawago_data.xlsx")
ptbrDataWS = ptbrData.active

print(f"Número total de linhas: {str(ptbrDataWS.max_row)}")
