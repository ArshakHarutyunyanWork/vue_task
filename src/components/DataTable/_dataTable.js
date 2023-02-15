export default {
  data() {
    return {
      plans: [],
      activeBtnId: null,
      textArea: '',
      showModal: false,
    }
  },
  methods: {
    openTools(_id) {
      if (this.activeBtnId === _id) {
        return (this.activeBtnId = -1)
      }
      this.activeBtnId = _id
    },

    openEdit(_id, title) {
      this.textArea = title
      this.showModal = true
    },
    saveEdit() {
      this.showModal = false
      this.plans.forEach((item)=>{
        if(item._id ===this.activeBtnId) {
          item.title = this.textArea
        }
      })
      this.activeBtnId = -1
    },

    async deletePlan(_id) {
      this.activeBtnId = -1
      this.$store.dispatch('removePlan', _id)
      this.plans = await this.$store.state.plans
    },
  },
  mounted() {
    this.plans = this.$store.state.plans
  },
}
