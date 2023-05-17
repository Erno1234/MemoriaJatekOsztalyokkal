import Kartya from "./Kartya.js";
import { kartyaLista } from "./Kepek.js";
class JatekTer {
  constructor() {
    const szuloElem = $("#jatekter");
    for (let index = 0; index < kartyaLista.length; index++) {
        const kartya = new Kartya("kepek/hatter.jpg", szuloElem);
    }
    $(window).on("fordit", (event)=>{
        let aktElem = event.detail;
        console.log(aktElem)
        
    })
  }
}
export default JatekTer;
