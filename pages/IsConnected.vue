<template>
    <div>
      <h1>{{user.value }}</h1>
      <button type="submit" onclick="logout"> Se déconnecter</button>
    </div>
  </template>
  
  <script setup>
  
  
  </script>
  
  <style>
  h1 {
    color: #28b463;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 2rem 0;
  }

  button{
    background-color: #28b463;
    color: antiquewhite;
    padding: 10px;
    border-radius: 5px;
  }
  </style>