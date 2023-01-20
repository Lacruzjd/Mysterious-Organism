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
      return mDna;
    },
    compareDNA: function (obj) {
      let compare = 0;

      for (let index = 0; index < this.dna.length; index++) {
        if (this.dna[index] === obj.dna[index]) compare++;
      }

      let porcentageLife = (compare * 100) / this.dna.length;

      return (
        "specimen #" +
        this.specimenNum +
        " and specimen #" +
        obj.specimenNum +
        " have " +
        porcentageLife.toFixed(1) +
        "% DNA in common"
      );
    },
    willLikelySurvive: function () {
      let bases = 0;
      let porcentageSurvive = 0;

      for (let index = 0; index < this.dna.length; index++) {
        if (this.dna[index] === "C" || this.dna[index] === "G") {
          bases++;
        }
      }

      porcentageSurvive = (bases * 100) / this.dna.length;

      if (porcentageSurvive >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const instances = () => {
  let instancesStudy = [];
  let numSpecimen = 1;

  do {
    let instancia = pAequorFactory(numSpecimen, mockUpStrand());
    
    if (instancia.willLikelySurvive() === true){
      instancesStudy.push(instancia);
      numSpecimen++
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
