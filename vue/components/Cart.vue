<template>
  <div class="Cart">
    <cartheader></cartheader>
    <cartusers></cartusers>
  </div>
</template>

<script>
  import cartHeader from './cartHeader'
  import cartUsers from './cartUsers'

  export default {
  name: 'home',
    components:{
    "cartheader":cartHeader,
    "cartusers":cartUsers
  }
}
</script>