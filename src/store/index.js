import { createStore } from 'vuex'
export default createStore({
  state: {
    plans: [
      {
        _id: 1,
        month: 'lorem100',
        title: 'Hormone replacement therapy',
        status: 'completed',
      },
      { _id: 2, month: 'Jun', title: 'Ozone therapy', status: 'booked' },
      { _id: 3, month: 'Jun', title: 'NAD', status: 'completed' },
      {
        _id: 4,
        month: 'Jun',
        title: 'Hormone replacement therapy',
        status: 'completed',
      },
      { _id: 5, month: 'Feb', title: 'Ozone therapy', status: 'booked' },
      { _id: 6, month: 'Jan', title: 'NAD', status: 'booked' },
      {
        _id: 7,
        month: 'Sep',
        title: 'Hormone replacement therapy',
        status: 'bookNow',
      },
      {
        _id: 8,
        month: 'May',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        status: 'completed',
      },
      { _id: 9, month: 'Jul', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', status: 'completed' },
      { _id: 10, month: 'Aug', title: 'NAD', status: 'completed' },
      {
        _id: 11,
        month: 'Aug',
        title: 'Hormone replacement therapy',
        status: 'completed',
      },
      { _id: 12, month: 'Dec', title: 'Ozone therapy', status: 'booked' },
      { _id: 13, month: 'Dec', title: 'NAD', status: 'booked' },
    ],
  },
  mutations: {
    changePLans(state, payload) {
      state.plans = payload
    },
  },
  actions: {
    async removePlan(context, _id) {
      let plans = context.state.plans.filter((item) => item._id !== _id)
      context.commit('changePLans', plans)
    },
  },
  modules: {},
  getters: {},
})
