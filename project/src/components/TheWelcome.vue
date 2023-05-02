<template>
    <div class="container">
      <div class="text">
          <h2>Welcome to WH.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit neque sed nulla imperdiet ultrices. Mauris eleifend turpis non urna malesuada, eget commodo augue vulputate.</p>
      </div>
      <div class="image">
          <img src="/homescreen/heart3.png" alt="Image">
      </div>
      </div>
  </template>
  <style scoped>
    .container {
      display: flex;
      flex-wrap: wrap;
      transform: translate(-50%,10%);
      }
  
      .text {
      width: 50%;
      text-align: left;
      padding-top: 80px;
      margin-left: -40px;
      }
  
      .image {
      width: 50%;
      }
  
      @media screen and (max-width: 767px) {
      .text, .image {
          width: 100%;
      }
      }
  </style>