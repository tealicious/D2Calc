<template>
  <div id="app">
    <h3>{{totalDPS}}</h3>
    <form @submit.prevent="saveSetup">
      <div>
      <label>Setup</label>
      <input type="text" v-model="skillTree.setupName">
      </div>
      <div>
      <label>Golem Min-Damage</label>
      <input type="number" v-model.number="skillTree.golemDmgMin">
      </div>
      <div>
      <label>Golem Max-Damage</label>
      <input type="number" v-model.number="skillTree.golemDmgMax">
      </div>
      <div>
      <label>Skelly Damage</label>
      <input type="number" v-model.number="skillTree.physSkellyDmg">
      </div>
      <div>
      <label>Magi Skelly Damage</label>
      <input type="number" v-model.number="skillTree.magiSkellyDmg">
      </div>
      <div>
      <label>Num Mages</label>
      <input type="number" v-model.number="skillTree.numMages">
      </div>
      <div>
      <label>Amp damage %</label>
      <input type="number" v-model.number="skillTree.ampDamage">
      </div>
       <div>
      <button type="submit">save</button>
      </div>
    </form>
    <hr>
    <hr>
    <hr>
    <hr>
      <table v-if="orderedSetups.length">
          <tbody>
            <template v-for="(savedSetup,i) in orderedSetups">
            <tr :key="`row_dps_${i}`">
              <th>Total DPS</th>
              <th>{{getTotalDPS(savedSetup)}}</th>
            </tr>
            <tr v-for="(key, value) in savedSetup" :key="`row_cell_${i}_${value}`">
              <th :key="`row_cell_${i}_${value}`">{{value}}</th>
              <th :key="`row_cell_${i}_${key}`">{{key}}</th>
            </tr>
            <tr :key="`row_cell_${i}_button`">
              <th>
                <button @click="removesetup(savedSetup.originalIndex)"
                :key="i">delete</button>
              </th>
            </tr>
            <tr :key="`foo${i}`" class="blank_row"/>
            </template>
          </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const storedSetups = localStorage.getItem('setups');
let mirroredSetups = null as any[]|null;
if (storedSetups) {
  mirroredSetups = JSON.parse(storedSetups);
}
const initSkillTree = () => ({
  setupName: '',
  golemDmgMin: 0,
  golemDmgMax: 0,
  physSkellyDmg: 0,
  magiSkellyDmg: 0,
  numMages: 0,
  ampDamage: 0,
});

export default Vue.extend({
  name: 'App',
  data() {
    return {
      skillTree: initSkillTree(),
      setups: mirroredSetups || [] as any,
      mirrorSetups: mirroredSetups,
    };
  },
  computed: {
    totalDPS(): number {
      return this.getTotalDPS(this.skillTree);
    },
    orderedSetups(): any[] {
      if (!this.mirrorSetups) return [];
      return this.mirrorSetups
        .map((setup, i) => {
          setup.originalIndex = i;
          return setup;
        })
        .slice()
        .sort((setupA, setupB) => this.getTotalDPS(setupB) - this.getTotalDPS(setupA));
    },
  },
  watch: {
    setups() {
      localStorage.setItem('setups', JSON.stringify(this.setups));
      const fuq = localStorage.getItem('setups');
      if (fuq !== null) {
        this.mirrorSetups = JSON.parse(fuq);
      }
    },
  },
  methods: {
    saveSetup() {
      this.setups.push(this.skillTree);
      this.skillTree = initSkillTree();
    },
    removesetup(idx: number): void {
      this.setups.splice(idx, 1);
    },
    getTotalDPS(skillTree: any): number {
      const golemDmgTotal = ((skillTree.golemDmgMin + skillTree.golemDmgMax) * 5) / 2;
      const physSkellyDmgTotal = skillTree.physSkellyDmg * 8;
      const magiSkellyDmgTotal = skillTree.magiSkellyDmg * skillTree.numMages;
      const totalPhys = golemDmgTotal + physSkellyDmgTotal;
      return skillTree.ampDamage
        ? totalPhys + (totalPhys * ((skillTree.ampDamage / 100) * 1)) + magiSkellyDmgTotal
        : totalPhys + magiSkellyDmgTotal;
    },
  },
});
</script>
<style lang="scss">
hr {
  opacity:0;
}
input {
  width: 100%;
}
form {
  display:flex;
  flex-flow:row wrap;
  align-items:stretch;
  margin-left:-1rem;
  margin-right:-1rem;
  >div {
    &:first-child {
      flex: 0 1 100%;
      position: relative;
    }
    padding:0 1rem;
    flex: 1 1 45%;
  }
}
.blank_row {
  height:5rem;
}
th:last-child:not(:only-child) {
  text-align:right;
}
</style>
