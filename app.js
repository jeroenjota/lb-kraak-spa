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
      speler1: "",
      speler2: '',
      teams: [],
      pairings: [],
      teller: 0,

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
    createpairings(){
      if (this.rondeaantal>this.teamaantal-1){
        this.rondeaantal=this.teamaantal-1
      }
      this.pairings = []
      var counter = 0
      var tafel = 0
      var mod = 0
      for(var i=1; i<this.teamaantal; i++){
        for(var j=i+1; j<=this.teamaantal; j++){
          mod = counter%this.rondeaantal
          if( mod === 0){
            tafel++
          }
          this.pairings.push({teamA: i, teamB: j})
          counter++
          // console.log(this.rondeaantal, "tafel:" + tafel, "counter: " + counter, mod)
        }
      }
    },
    beforeMount(){
      this.createpairings()
    },

    selectNaam(naam){
      // remove naam from array
      for( var i = 0; i< this.namen.length; i++){
        if(this.namen[i] === naam ){
          this.namen.splice(i,1)
        }
      }
    },
    teamAdd(left){
      if(left){
        this.teams.push({
          nummer: this.teams.length+1,
          speler1: this.speler1,
          })
      } else {
        this.teams[this.teams.length-1].speler2=this.speler2
        this.teller = this.teams.length
      }
      this.createpairings()
    },
    teamRemove(team){
      this.namen.push(team.speler1)
      this.namen.push(team.speler2)
      this.speler1=null
      this.speler2=null
      for( var i = 0; i< this.teams.length; i++){
        console.log(this.teams[i].nummer)
        if(this.teams[i].nummer === team.nummer ){
          this.teams.splice(i,1)
        }
        this.teams[i].nummer = i+1
      }
    },
  }
}

new Vue({
  el: "#app",
  components: {
    "initialize-toernooi": InitializeToernooiComponent
  },
  data: {
  }, 
})
