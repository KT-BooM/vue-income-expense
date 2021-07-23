<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: {
    chartData: Array,
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Your Remaining in 2021",
            backgroundColor: "#f87979",
            data: this.chartData,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>

<style></style>
