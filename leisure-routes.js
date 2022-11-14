import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {
  template: `
  <div>
    <span>distance is:</span>
    <input type='number' placeholder="put down preferred distance" minlength='50' max='2000' ref='distance'/>
    <span>durance is:</span>
    <input type='number' placeholder="put down preferred durance" minlength='50' ref='durance'/>
    <button @click='submitLeisureOptions' :disabled='disabled'>SUBMIT</button>
    <p v-if='disabled'>Distance should be less than 2000</p>
  </div>
  `,
  data() {
    let disabled = false
    return {  disabled }
  },
  methods: {
    submitLeisureOptions() {
      const { distance, durance } = this.$refs
      if (distance.value > 2000) {
        this.disabled = true
        return
      } 
      this.$emit('getLeisureOptions', {distance: distance.value, durance: durance.value})
    }
  }

}