<script setup>
import { ref, onMounted } from 'vue';
import { getDocs, query, where, collection, firebaseStore } from '../firebase/database';

const chartOptions = ref({});
const series = ref([]);
const myh7options = ref({});
const myh7series = ref([]);
function PieChartBuilder(title, data, labels) {
  return {
    chart: {
      type: 'pie',
      width: '100%',
      height: '150%',
      maxWidth: 500
    },
    series: data,
    labels: labels,
    responsive: [
      {
        breakpoint: 800,
        options: {
          chart: {
            width: 350,
            height: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    title: {
      text: title
    }
  };
}

async function searchby() {
  const databasename = collection(firebaseStore, 'hcms');
  const getData = query(databasename);

  const info = await getDocs(getData);

  if (info.docs.length > 0) {
    let diabeticCount = 0;
    let nonDiabeticCount = 0;

    info.docs.forEach(doc => {
      const diabetes = doc.data().Diabetes;
      if (diabetes === 1) {
        diabeticCount++;
      } else if (diabetes === 0) {
        nonDiabeticCount++;
      }
    });

    console.log('Diabetic:', diabeticCount);
    console.log('Not Diabetic:', nonDiabeticCount);

    chartOptions.value = PieChartBuilder('Diabetes', [diabeticCount, nonDiabeticCount], ['Diabetic', 'Not Diabetic']);
    series.value = chartOptions.value.series;
  } else {
    console.log('No matching documents found');
  }
}

async function myh7() {
  const databasename = collection(firebaseStore, 'hcms');
  const getData = query(databasename);

  const info = await getDocs(getData);

  if (info.docs.length > 0) {
    let myh7Count = 0;
    let nonmyh7Count = 0;

    info.docs.forEach(doc => {
      const myh7 = doc.data().MYH7;
      if (myh7 === 1) {
        myh7Count++;
      } else if (myh7 === 0) {
        nonmyh7Count++;
      }
    });

    console.log('myh7:',myh7Count);
    console.log('Not myh7:', nonmyh7Count);

    myh7options.value = PieChartBuilder('myh7', [myh7Count, nonmyh7Count], ['myh7', 'Not myh7']);
    myh7series.value = myh7options.value.series;
  } else {
    console.log('No matching documents found');
  }
}

onMounted(() => {
  searchby();
  myh7();
});
</script>

<template>
<br><br><br><br><br><br><br><br>



  <div>
    <apexchart
      width="500"
      type="pie"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>

  <div>
    <apexchart
      width="500"
      type="pie"
      :options="myh7options"
      :series="myh7series"
    ></apexchart>
  </div>
</template>
