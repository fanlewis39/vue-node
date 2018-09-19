<template>
    <div class="users">
        <table class="fl-table">
          <thead>
            <tr>
                <th>序号</th>
                <th>书名</th>                           
                <th>作者</th>                            
                <th>价格</th>                             
                <th>操作</th>                             
            </tr>
          </thead>
          <tbody>
              <tr v-for="(book) in books" :key="book.id">
                <td>{{book.num}}</td>
                <td>{{book.name}}</td>
                <td>{{book.author}}</td>
                <td>{{book.price}}</td>
                <td><button class="btn btn-info" @click="show(book)">查看</button>    <button type="button" class="btn btn-success" @click="addToCart(book)">购物车</button></td>
            </tr>
          </tbody>
    </table>
    <div class="show" v-if="isShow">{{ currentBook.name }}
        <div class="cancel" @click="cancel"><span>×</span></div>
    </div>
</div>
</template>

<script>
export default {
  name: "bookname",
  data() {
    return {
      books: [],
      isShow: false,
      currentBook: {}
    };
  }, //ES6语法糖,在组件中返回一个函数
  methods: {
    addToCart: function(book) {
      this.axios
        .post(this.$root.URL + "/cart", {
          name: book.name,
          price: book.price
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    show: function(book) {
      this.isShow = true;
      this.currentBook = book;
    },
    cancel: function() {
      this.isShow = false;
    }
  },
  created() {
    this.axios.get(this.$root.URL + "/books").then(res => {
      this.books = res.data;
    });
  }

  //     function(){
  //       // fetch("static/data.json").then((res)=>{
  //       //     // debugger;
  //       //     return res.json();
  //       // }).then((r) => (this.books = r))
  //     }
};
</script>
<style scoped>
#u-ul {
  color: #abcdef;
}
.users {
  margin: 5% 8% 2% 8%;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
}

.fl-table {
  border-radius: 5px;
  font-size: 15px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  background-color: white;
}

.fl-table td,
.fl-table th {
  text-align: center;
  padding: 12px;
}

.fl-table td {
  border-right: 1px solid #c9e2db;
  font-size: 12px;
}

.fl-table thead th {
  color: #ffffff;
  background: #4fc3a1;
}

.fl-table thead th:nth-child(odd) {
  color: #ffffff;
  background: #324960;
}

.fl-table tr:nth-child(even) {
  background: #f8f8f8;
}

/* Responsive */

@media (max-width: 768px) {
  .fl-table {
    width: 100%;
  }
}

.show {
  position: absolute;
  z-index: 99;
  width: 60%;
  height: 60%;
  top: 25%;
  left: 18%;
  background-color: #e0effde8;
}

.cancel {
  position: relative;
  width: 2.7%;
  height: 5%;
  left: 97.3%;
  top: -4.4%;
  background-color: red;
  text-align: center;
  user-select: none;
}
.cancel > span {
  color: white;
  font-size: 20px;
  line-height: 23px;
}
</style>