<template>
    <div class="container-fluid">
        <div class="row fixed-bottom" id="foot">
            <p id="#copyrighted">
                Copyright &copy; <span>{{ year }} </span>
                <span> All rights reserved</span>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                year: new Date().getFullYear()
            }
        }
        
    }
</script>

<style scoped>
#foot{
    background-color: pink;
    text-align: center;
}
#copyrighted{
    margin-top: 5px;
    margin-bottom: 2px;
}
</style>