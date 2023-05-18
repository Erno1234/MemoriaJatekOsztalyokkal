import Kartya from "./Kartya.js";

class JatekTer {
  #kartyaLista = [];
  #kivalasztottKepek = [];
  constructor(kartyaLista) {
    this.#kartyaLista = kartyaLista;
    const szuloElem = $("#jatekter");
    this.#kever();
    for (let index = 0; index < this.#kartyaLista.length; index++) {
      const kartya = new Kartya(index, this.#kartyaLista[index], szuloElem);
    }
    $(window).on("fordit", (event) => {
      let aktElem = event.detail;
      aktElem.setAllapot();

      this.#kivalasztottKepek.push(aktElem);
      if (this.#kivalasztottKepek.length == 2) {
        this.#visszaFordit(this.#kivalasztottKepek[0]);
        this.#visszaFordit(this.#kivalasztottKepek[1]);
        this.#kivalasztottKepek.pop();
        this.#kivalasztottKepek.pop();
      }
    });
  }
  #visszaFordit(kephely) {
    setTimeout(function () {
      kephely.setAllapot();
    }, 1000);
  }
  #kever(){
      for (let i = this.#kartyaLista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp =  this.#kartyaLista[i];
        this.#kartyaLista[i] =  this.#kartyaLista[j];
        this.#kartyaLista[j] = temp;
      }
    }
}
export default JatekTer;
