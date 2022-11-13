import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {
  template: `
  <div>
    <span>distance is:</span>
    <input type='number' placeholder="put down preferred distance" minlength='50' ref='distance'/>
    <span>durance is:</span>
    <input type='number' placeholder="put down preferred durance" minlength='50' ref='durance'/>
    <button @click='submitLeisureOptions'>SUBMIT</button>
  </div>
  `,
  methods: {
    submitLeisureOptions() {
      const { distance, durance } = this.$refs
      this.$emit('getLeisureOptions', {distance: distance.value, durance: durance.value})
    }
  }

}