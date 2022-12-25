class Colors {
  constructor() {
    this.primary = '#1F262D';
    this.secondary = '#ffffff';
    this.lightBlue = '#30CEE7';
    this.purple = '#8265FC';
    this.lightGrey = '#6F737A';
    this.whiteGrey = '#ECEDEF';
    this.gradients = {
      primary: `linear-gradient(135deg, ${this.lightBlue}, ${this.purple})`,
    };
  }
}

const colors = new Colors();

export default colors;
