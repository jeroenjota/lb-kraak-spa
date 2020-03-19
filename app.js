let ToernooiSchemaComponent = {
  template: "#toernooischema-template",
  data() {
    return {
      ronde: [
        {
          rondenummer: Number,
          teamA: Number,
          teamB: Number,
        }
    ]
    };
  },
  methods: {
    select() {
      this.$emit("select", this.name);
    }
  }
};

let InitializeToernooiComponent = {
  template: "#initialize-toernooi",
  data() {
    return {
      spelersaantal: 8,
      rondeaantal: 2,
      namen: [
        "Jeroen",
        "Jan",
        "Ramon",
        "Gerard",
        "Willem",
        "Joost",
        "Wim",
        "Peter",
        "Carla",
        "Rob",
        "TheoW",
        "Pieter"
      ],
      namenSelected: [],
      speler1: "",
      speler2: '',
      teams: [
      ]
    };
  },
  computed: {
    tafelaantal() {
      let spelers = this.spelersaantal;
      while (!Number.isInteger(spelers / 4)) {
        spelers++;
      }
      return spelers / 4;
    },
    teamaantal() {
      return Math.ceil(this.spelersaantal / 2);
    },
    namenlijst() {
      return this.namen.sort();
    }
  },
  methods: {
    selectNaam(naam){
      this.namenSelected.push(naam)
      // remove naam from array
      for( var i = 0; i< this.namen.length; i++){
        if(this.namen[i] === naam ){
          this.namen.splice(i,1)
        }
      }
    },
    teamAdd(){
      this.teams.push(
        {
        nummer: this.teams.length+1,
        speler1: this.speler1,
        speler2: this.speler2
      })

    }
  }
};

new Vue({
  el: "#app",
  components: {
    "initialize-toernooi": InitializeToernooiComponent
  },
  data: {
    namen: [
      "Jeroen",
      "Jan",
      "Ramon",
      "Gerard",
      "Willem",
      "Joost",
      "Wim",
      "Peter",
      "Carla",
      "Rob",
      "TheoW",
      "Pieter"
    ]
  }
});
