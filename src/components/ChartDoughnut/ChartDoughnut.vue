<template>
  <div class="chart">
    <canvas
      ref="canvas"
      height="0"
    />
    <Doughnut
      :options="chartOptions"
      :data="chartData"
      :plugins="plugins"
    />
    <p class="chart__text">
      Completed appointments
    </p>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'BarChart',
  components: { Doughnut },
  data() {
    return {
      plans: [],
      gradient: null,
    }
  },
  computed: {
    getStatistic() {
      let completed = this.$store.state.plans.filter(
        (item) => item.status === 'completed'
      )
      let notCompleted = this.$store.state.plans.filter(
        (item) => item.status !== 'completed'
      )
      return [completed.length, notCompleted.length]
    },
    chartData() {
      return {
        datasets: [
          {
            backgroundColor: [this.gradient, '#f1f2f3'],
            borderWidth: 0,
            data: this.getStatistic,
          },
          {
            cutoutPercentage: 70,
          },
        ],
      }
    },
    chartOptions() {
      return {
        responsive: true,
      }
    },
    plugins() {
      return [
        {
          id: 'text',
          beforeDraw: function (chart) {
            let width = chart.width,
              height = chart.height,
              ctx = chart.ctx

            let fontSize = 3
            ctx.font = fontSize + 'em sans-serif'
            ctx.textBaseline = 'middle'
            let finishedCount = chart.data.datasets[0].data[0]
            let ongoingCount = chart.data.datasets[0].data[1]
            let text =
              Math.round(
                (finishedCount / (finishedCount + ongoingCount)) * 100
              ) + '%'
            if (!finishedCount && !ongoingCount) {
              text = '0%'
            }
            let textX = Math.round((width - ctx.measureText(text).width) / 2)
            let textY = height / 2

            ctx.fillText(text, textX, textY)
          },
        },
      ]
    },
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(100, 100, 0, 200)
    this.gradient.addColorStop(0, '#b0d4e2')
    this.gradient.addColorStop(0.5, '#61b058')
    this.gradient.addColorStop(1, '#61b058')
  },
}
</script>
<style lang="scss">
.chart {
  width: 100%;
  max-width: 320px;

  &__text {
    margin: 15px auto;
    width: 100%;
    max-width: 130px;
    text-align: center;
  }
}
</style>
