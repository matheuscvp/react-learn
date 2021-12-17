const IndiretaFilho = params => {
    return (
       <div>
           <div> Filho </div>
           <button onClick={
               function (e) {
                   params.quandoClicar('João', 53, true);
               }
           }> Fornecer Informações </button>
       </div>
   )
}

export default IndiretaFilho