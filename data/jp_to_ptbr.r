library(readr)
library(writexl)
library(stringi)

jp_okinawago_data <- readxl::read_xlsx("data/jp_data/jp_okinawago_data.xlsx")

jp_okinawago_data <- as.data.frame(jp_okinawago_data)

ptbr_okinawago_data <- data.frame(
  Palavra = c(jp_okinawago_data$見出し語),
  Entonação = c(jp_okinawago_data$アクセント),
  Classe = c(jp_okinawago_data$品詞)
)

ptbr_okinawago_data$Classe <- stri_replace_all_regex(ptbr_okinawago_data$Classe,
    pattern = c("名","感", "副","接続","接頭","助","接尾","連体","他","助詞","動","助詞的に用いられる","句","
                各","形","自","連詞","不規則","文","一部","否定","のみがある","活用は","詞的に用いられる"), 
    replacement = c("Nome ","Interjeição ","Advérbio ","Afixo ","Prefixo ","Partícula ","Sufixo ",
                    "Adjunto adnominal ","Verbo transitivo ","Partícula gramatical ","Verbo ",
                    "Usado como partícula ","Expressão","Onomatopeia","Adjetivo ","Verbo intransitivo ",
                    "Conjunção ","Irregular ","Formulaico ","Grupo de ","Negação de ","","Função igual a ",""),
    vectorize = FALSE)

write_xlsx(ptbr_okinawago_data, "data/ptbr_data/ptbr_okinawago_data.xlsx")
