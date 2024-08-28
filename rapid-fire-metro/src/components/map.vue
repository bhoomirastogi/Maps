<template>
    

    <div class="hello">
        <!-- <h2>map</h2> -->
       
        
<div class="image-map">
    <img :src='mapimage' alt="hello">
</div>
        <div class="faqu">
            <faq/>
        </div>

        </div>

</template>






                            


<script setup>
import mapimage from '@/assets/map-image.png';
import faq from './faq.vue';


</script>


<style scoped>
.hello{
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
   justify-content: space-around;
    overflow-x: hidden;
    padding-top: 2rem;

}
.faqu{
    width: 40%;
    margin-bottom: 50px;
   overflow-x: hidden;
}
.image-map{
    width: 55%;
}

.image-map img{
    width: 100%;
    position: relative;
    top: 50px;
    align-content: center;
}
</style>