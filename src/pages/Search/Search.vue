<template>
  <div class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input">
      <input type="submit" class="search_submit">
    </form>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {
      HeaderTop
    }
  }
</script>


<style>
  .search {
    width: 100%;
    overflow: hidden;
  }

  .search_form {
    background-color: #fff;
    padding: 12px 8px;
    margin-top: 45px
  }

  .search_form::after {
    content: '';
    display: block;
    clear: both;
  }

  input {
    height: 35px;
    padding: 0 4px;
    border-radius: 2px;
    font-weight: bold;
    outline: none
  }

  .search_input {
    float: left;
    width: 79%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2;
  }

  .search_submit {
    float: right;
    width: 18%;
    border: 4px solid #02a774;
    font-size: 16px;
    color: #fff;
    background-color: #02a774
  }


</style>
