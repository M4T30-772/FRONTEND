<template>
  <div>
    <div class="cardBox">
      <div class="card">
        <div>
          <div class="numbers">12134</div>
          <div class="cardName">Daily views</div>
        </div>
        <div class="iconBox">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="numbers">12</div>
          <div class="cardName">Sales</div>
        </div>
        <div class="iconBox">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="numbers">12323</div>
          <div class="cardName">Comments</div>
        </div>
        <div class="iconBox">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="numbers">4</div>
          <div class="cardName">Nesto</div>
        </div>
        <div class="iconBox">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="recentOrders">
        <div card="headers">
          <h2>Recent Orders</h2>
          <a href="#" class="btn">View All </a>
        </div>
        <table>
          <thread
            ><tr>
              <td>Name</td>
              <td>Name</td>
              <td>Name</td>
              <td>Name</td>
            </tr></thread
          >

          <tbody>
            <tr>
              <td>Star</td>
              <td>1231</td>
              <td><span class="status del">Delivered</span></td>
            </tr>
            <tr>
              <td>Star</td>
              <td>1231</td>
              <td><span class="status del">Delivered</span></td>
            </tr>
            <tr>
              <td>Star</td>
              <td>1231</td>
              <td><span class="status del">Delivered</span></td>
            </tr>
            <tr>
              <td>Star</td>
              <td>1231</td>
              <td><span class="status del">Delivered</span></td>
            </tr>
            <tr>
              <td>Star</td>
              <td>1231</td>
              <td><span class="status del">Delivered</span></td>
            </tr>
            <tr>
              <td>Star</td>
              <td>1231</td>
              <td><span class="status del">Delivered</span></td>
            </tr>
            <tr>
              <td>Star</td>
              <td>1231</td>
              <td><span class="status del">Delivered</span></td>
            </tr>
            <tr>
              <td>Star</td>
              <td>1231</td>
              <td><span class="status del">Delivered</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="recentCustomers">
        <div class="cardHeaders">
          <h2>Recent Customers</h2>
        </div>
      </div>
    </div>
  </div>
</template>

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
