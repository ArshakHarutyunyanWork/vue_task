import MainHeader from '@/components/MainHeader/MainHeader'
import CalendarMonths from '@/components/CalendarMonths/CalendarMonths'
import ChartDoughnut from '@/components/ChartDoughnut/ChartDoughnut'
import DataTable from '@/components/DataTable/DataTable'
export default {
  components:{
    MainHeader,
    CalendarMonths,
    ChartDoughnut,
    DataTable
  },
  data() {
    return {
      showContainer: true
    }
  },
  methods: {
    toggleContainer() {
      return this.showContainer = !this.showContainer
    }
  }
}