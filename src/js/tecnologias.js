descricoes = {
    "Python": "É uma linguagem de programação de alto nível, orientada a objetos; onde eu à utilizo na criação de funcionalidades, desenvolvimento de API's e script's para Cyber.",
    "C": "C é uma linguagem de programação de baixo nível, conhecida por sua eficiência e poder de controle sobre o hardware.",
    "Sqlite": "SQLite é um sistema de gerenciamento de banco de dados leve e de código aberto, que também utiliza a linguagem SQL como interface. É amplamente reconhecido por sua facilidade de uso, eficiência e portabilidade..",
    "Microsoft-Sql-Server": "O Microsoft SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft." ,
    "Linux": "Linux é um sistema operacional de código aberto,  essencial quando o assunto são servidores, o que o torna indispensável para um desenvolvedor backend.",
    "MySQL": "MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É um dos sistemas de gerenciamento de banco de dados mais populares.",
}


function mostrarDescricao(tec) {
    document.getElementById("prof-name").innerHTML = tec;
    document.getElementById("descricao").innerHTML = descricoes[tec];
}

