class Kartya {
  #fajlnev;
  #id
  #allapot;
  #blokkolt;
  #divElem;
  #imgElem;
  constructor(id, fajlnev, szuloElem) {
    this.#allapot = false;
    this.#id=id;
    this.#fajlnev = fajlnev;
    szuloElem.append(`
        <div class="Kartya">
            <img src="kepek/hatter.jpg" alt='kepek'>
        </div>
    `);
    this.divElem = $(".Kartya:last-child");
    this.#imgElem = $(".Kartya:last-child img");
    this.#imgElem.on("click", () => {
      this.#kattintasEsemeny();
    });
  }
  setAllapot() {
    this.#allapot = !this.#allapot;
    this.#setLap()
  }
  getFajlnev(){
    return this.#fajlnev;
  }
  #setLap() {
    if(this.#allapot){
      this.#imgElem.attr("src", this.#fajlnev);
    }else{
      this.#imgElem.attr("src", "kepek/hatter.jpg");
    }
  }
  getId(){
    return this.#id;  
  }
  #kattintasEsemeny() {
    const esemeny = new CustomEvent("fordit", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default Kartya;
