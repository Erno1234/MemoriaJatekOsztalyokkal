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
    this.divElem = $(".Kartya:last-child");
    this.imgElem = $(".Kartya:last-child img");
    this.imgElem.on("click", () => {
      this.#kattintasEsemeny();
    });
  }
  setAllapot() {}
  getFajlnev() {}
  #setLap() {}
  #kattintasEsemeny() {
    const esemeny = new CustomEvent("fordit", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default Kartya;
