<template>
  <div>
    <h2>Расписание <span>звонков</span></h2>
    <table>
      <tbody>
      <tr>
        <td class="time">08:00 - 09:30</td>
        <td class="lesson">1 пара</td>
      </tr>
      <tr>
        <td class="time">09:40 - 11:10</td>
        <td class="lesson">2 пара</td>
      </tr>
      <tr>
        <td class="time">11:20 - 12:50</td>
        <td class="lesson">3 пара</td>
      </tr>
      <tr>
        <td class="time">13:15 - 14:45</td>
        <td class="lesson">4 пара</td>
      </tr>
      <tr>
        <td class="time">15:00 - 16:30</td>
        <td class="lesson">5 пара</td>
      </tr>
      <tr>
        <td class="time">16:40 - 18:10</td>
        <td class="lesson">6 пара</td>
      </tr>
      <tr>
        <td class="time">18:20 - 19:50</td>
        <td class="lesson">7 пара</td>
      </tr>
      <tr>
        <td class="time">19:55 - 21:25</td>
        <td class="lesson">8 пара</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
</script>

<style scoped>
h2{
  font-family: Manrope;
  font-weight: 700;
  font-size: 40px;
  line-height: 54.64px;
  letter-spacing: 0%;
}
span{
  font-family: Manrope;
  font-weight: 700;
  font-size: 40px;
  line-height: 54.64px;
  letter-spacing: 0%;
  color: #7D61F2;
}
table {
  width: 100%;
  border-collapse: collapse;
}

tr {
  border-bottom: 1px solid #ffffff; /* Линия между парами */
}

td {
  font-family: Manrope;
  font-weight: bold;
  font-size: 30px;
  padding-top: 40px;
  text-align: center;
}
.time{
  position: relative;
  left: -300px;
}
.lesson{
  position: relative;
  right: -100px;
}
</style>
