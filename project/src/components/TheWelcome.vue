<template>
    <div class="container">
      <div class="text">
          <h1>Welcome to Well Hearted </h1>
          <p>We invite you to collaborate and help us raise awareness, Promote better understannding, and improve the lives of those living with Cardiomyopathy   </p>
          <div class="image">
        <img src="/homescreen/heart3.png" alt="Image">
    </div>
        
      </div>
      <div class="image">
          <img src="/homescreen/heart2.png" alt="Image">
          <div class="image">
    </div>
      </div>
      </div>
  </template>
  <style scoped>
    .container {
      display: flex;
      flex-wrap: wrap;
      background-color: #f0f0f0;
      
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