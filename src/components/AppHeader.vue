<template>
    <header class="app-header">
       <div class="app-header-item">
              <img class="app-logo" src="../assets/good-things-foundation-logo.png" alt="App logo">
       </div>
       <div class="app-header-item">
              <ul>
                        <li v-for="item in menuItems" :key="item.name">
                                <router-link :to="item.route">{{ item.name }}</router-link>
                        </li>
              </ul>
         </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['menuItems'])
    },
}
</script>


<style scoped >
.app-header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px !important;

}

.app-header-item {
    display: block;
    flex: 1 0 140px;
}

.app-header-item .app-logo  {
    width: 20%;
    height: auto;
    float: left;
}


.app-header-item a {
    display: block;
    width: 100%;
    height: 100%;
}

.app-header-title {
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
}

.app-header-item ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.app-header-item ul li {
    margin: 0 0.5rem;
}

.app-header-item ul li a {
    color: #000;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
}

.app-header-item ul li a:hover {
    color: #42b983;
}



</style>