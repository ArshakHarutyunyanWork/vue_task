<template>
  <h1 class="title">
    2023 Wellness Plan
  </h1>
  <div class="mainContainer">
    <MainHeader @show-container="toggleContainer" />
    <Transition name="hide">
      <div
        v-if="showContainer"
        class="container"
      >
        <ChartDoughnut />
        <div class="container__dataTable">
          <CalendarMonths />
          <DataTable />
        </div>
      </div>
    </Transition>
  </div>
</template>
<script src="./_homePage.js" lang="js"></script>
<style src="./_homePage.scss" lang="scss"></style>
