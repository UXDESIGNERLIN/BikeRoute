export default {
  template: `
  <div>
    <h1>Setter</h1>
    <input type="radio" id="isStartPoint" value="isStartPoint" v-model="routeCheckbox" @input='updateCheckBox'/>
    <label for="isStartPoint">isStartPoint</label>
    <input type="radio" id="isEndPoint" value="isEndPoint" v-model="routeCheckbox" @input='updateCheckBox'/>
    <label for="isEndPoint">isEndPoint</label>
  </div>`,
  data() {
    let routeCheckbox = 'isStartPoint'
    return { routeCheckbox }
  },
  methods: {
    updateCheckBox() {
      this.$emit('routePlanning', this.routeCheckbox)
    }
  }
  /* watch: {
    routeCheckbox: function() {
      this.$emit('input', this.routeCheckbox);
    }
  } */
}