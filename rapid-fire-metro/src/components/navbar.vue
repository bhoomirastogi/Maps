<template>
  <nav>
    <div class="navbar">
      <div class="logo">
        <a href="#"><img :src="logo" alt="Logo"></a>
      </div>
      <button class="menu-toggle" @click="toggleMenu">
        <span class="menu-icon"></span>
      </button>
      <ul class="menu" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/map">Find Map</router-link></li>
        <li><router-link to="/contact-us">Contact us</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import logo from "@/assets/logo.png";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

nav {
  margin: 0;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 75px;
  background: #062539;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 90%;
  background: #062539;
  margin: auto;
}

.navbar .logo img {
  width: 100px;
}

.navbar .menu {
  display: flex;
  list-style: none;
}

.navbar .menu li {
  margin: 0 15px;
}

.navbar .menu li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

.menu-toggle .menu-icon {
  width: 30px;
  height: 3px;
  background: #fff;
  position: relative;
  display: block;
}

.menu-toggle .menu-icon::before,
.menu-toggle .menu-icon::after {
  content: '';
  width: 30px;
  height: 3px;
  background: #fff;
  position: absolute;
  left: 0;
}

.menu-toggle .menu-icon::before {
  top: -8px;
}

.menu-toggle .menu-icon::after {
  top: 8px;
}

.menu.active {
  display: block;
  position: absolute;
  top: 75px;
  right: 0;
  background: #062539;
  width: 100%;
  text-align: center;
}

.menu.active li {
  margin: 15px 0;
}

@media (max-width: 768px) {
  .navbar .menu {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
