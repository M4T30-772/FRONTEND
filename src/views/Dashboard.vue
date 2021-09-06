<template>
  <div>
    <div class="cardBox">
      <div class="card">
        <div>
          <div class="cardName">Broj knjiga</div>
          <div class="numbers">1</div>
        </div>
        <div class="iconBox">
          <i class="fa fa-book" aria-hidden="true"></i>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="cardName">Korisnici</div>
          <div class="numbers">1</div>
        </div>
        <div class="iconBox">
          <i class="fa fa-users" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="recentOrders">
        <div card="headers">
          <h2>Posuđene knjige</h2>
          <h3>View All</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <generiraj-posudbu />
              <generiraj-posudbu />
              <generiraj-posudbu />
              <generiraj-posudbu />
              <generiraj-posudbu />
              <generiraj-posudbu />
              <generiraj-posudbu />
              <generiraj-posudbu />
              <generiraj-posudbu />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import generirajPosudbu from "./generirajPosudbu.vue";
import { ListaKnjiga } from "./ListaKnjiga";
import store from "./store";
export default {
  components: { generirajPosudbu },
  name: "Dashboard",
  data() {
    return {
      store,
      ListaKnjiga,
    };
  },
};
</script>
<style>
.cardBox {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
.cardBox .card {
  position: relative;
  background: #fff;
  font-size: 2em;
  font-weight: 500;
  justify-content: space-between;
  cursor: pointer;
}
.cardBox .card .number {
  position: relative;
  font-size: 2em;
  font-weight: 500;
}
.cardBox .card .cardName {
  color: #999;
}
.cardBox .card .iconBox {
  font-size: 2.5em;
  color: #03a9f4;
}
.details {
  margin: 0;
}
</style>
