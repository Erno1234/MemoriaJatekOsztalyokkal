class Kartya {
  #fajlnev;
  #allapot;
  #blokkolt;
  #divElem;
  #imgElem;
  constructor(fajlnev, szuloElem) {
    this.#fajlnev = fajlnev;
    szuloElem.append(`
        <div class="Kartya">
            <img src='${this.#fajlnev}' alt='kepek'>
        </div>
    `);
  }
  setAllapot(){}
  getFajlnev(){}
  #setLap(){}
  #kattintasEsemeny(){
    const esemeny= new CustomEvent("fordit", {detail:this});
    window.dispatchEvent(esemeny);
   
}
}
export default Kartya;
