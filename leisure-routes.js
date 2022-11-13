import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {
  template: `
  <div>
    <span>distance is: {{ distance }}</span>
    <input type='number' placeholder="put down preferred distance" minlength='50' ref='input'/>
    <button @click='submitLeisureOptions'>SUBMIT</button>
  </div>
  `,
  methods: {
    submitLeisureOptions() {
      this.$emit('getLeisureOptions', this.$refs.input.value)
    }
  }

}