const db = require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('select * from carros', (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },
    buscar : (codigo) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('select * from carros where codigo=?',[codigo], (error, results)=>{
                if(error){
                    rejeitado(error); return;
                }
                
                if(results.length > 0){
                    aceito(results[0]);
                }
                else{
                    aceito(false);
                }
            });
        });
    }
};