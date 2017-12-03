;
(function() {

/**
* Place to store API URL or any other constants
* Usage:
*
* Inject CONSTANTS service as a dependency and then use like this:
* CONSTANTS.API_URL
*/

    var CONSTANTS = {};
    
    CONSTANTS.API_URL = 'http://localhost:3001';
    CONSTANTS.API_PUBLIC = CONSTANTS.API_URL + '/public/img';
    CONSTANTS.FORMS = {
        arg: "Busca",
        state : "Estado",
        city : "Cidade",
        title : "Titulo",
        description : "Descrição",
        startDate : "Início",
        endDate : "Fim",
        CEP : "CEP",
        street : "Rua",
        number : "numero",
        district : "Bairro",
        complement : "Complemento",
        CPF : "CPF",
        CNPJ : "CNPJ",
        telephone: "Telefone",
        cellPhone: "Celular",
        password: "Senha",
        name:"Nome",
        email:"Email",
        occupationArea:"Cargo",
        gender:"Gênero",
        availability:"Disponibilidade",
        profession:"Profissão",
        company:"Organização",    
        site:"Site",    
    };
    
    CONSTANTS.msgs = function() {
        var msgs = [
            "Obrigado por ajudar!",
            "Você fará a diferença!",
            "Pessoas com você mudam o mundo!",
            "Obrigado!"
        ];
        var r = Math.round( Math.random() * msgs.length);
        return msgs[r];
    };
    
    
    
    app.constant('CONSTANTS',CONSTANTS);
})();
