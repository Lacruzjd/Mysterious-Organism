// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//your code

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate: function () {
      let mDna = this.dna.slice();
      let newBase = "";

      do {
        newBase = returnRandBase();
      } while (mDna[0] === newBase);

      mDna[0] = newBase;
      console.log("cambiar " + this.dna[0] + "por" + newBase);
      return mDna;
    },
    compareDNA: function (obj) {
      let iguales = 0;

      console.log(this.dna);
      console.log(obj.dna);
      for (let index = 0; index < this.dna.length; index++) {
        if (this.dna[index] === obj.dna[index]) iguales++;
      }

      let porcentaje = (iguales * 100) / this.dna.length;

      console.log(iguales);
      return (
        "specimen #" +
        this.specimenNum +
        " and specimen #" +
        obj.specimenNum +
        " have " +
        porcentaje.toFixed(1) +
        "% DNA in common"
      );
    },
    willLikelySurvive: function () {
      let bases = 0;
      let porcentajeSurvive = 0;

      for (let index = 0; index < this.dna.length; index++) {
        if (this.dna[index] === "C" || this.dna[index] === "G") {
          bases++;
        }
      }

      porcentajeSurvive = (bases * 100) / this.dna.length;

      if (porcentajeSurvive >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const instances = () => {
  let instancesStudy = [];
  let index = 1;

  do {
    let instancia = pAequorFactory(index, mockUpStrand());
    
    if (instancia.willLikelySurvive() === true){
      instancesStudy.push(instancia);
      index++
    }

  } while (instancesStudy.length < 30);

    return instancesStudy

  }

const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());
const pAequor3 = pAequorFactory(3, mockUpStrand());

//console.log(pAequor2.compareDNA(pAequor3));
//console.log(pAequor1.willLikelySurvive());
console.log(instances());

//console.log(pAequor.mutate());
