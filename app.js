let PlanPickerItemComponent = {
  template: "#plan-picker-item-template",
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan;
    }
  },
  data() {
    return {
      selected: false
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
      teams: [
        {
          nummer: Number,
          speler1: String,
          speler2: String
        }
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
