import DiretaFilho from "./DiretaFilho"

const DiretaPai = params => {
   return (
       <div>
           <DiretaFilho nome="Junior" idade={20} nerd={true} ></DiretaFilho>
           <DiretaFilho nome="Gabriel" idade={17} nerd={false} ></DiretaFilho>
       </div>
   )
}

export default DiretaPai