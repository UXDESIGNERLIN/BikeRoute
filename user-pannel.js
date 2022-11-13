export default {
  template: `<div><h1>Setter</h1><button @click='activateBegin'>StartPoint</button></div>`,
  data() {
    let isBegin = false;
    return { isBegin }
  },
  props: {
    /* begin: {
      type: Boolean,
      default: false
    } */
  },
  methods: {
    activateBegin() {
      console.log('sss', this.isBegin)
      this.$emit('activateBegin', this.isBegin)
    }
  }


}