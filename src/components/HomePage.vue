<template>
  <div>
    <center>
      <h1 style="margin-bottom:5%">Tron DApp Demo</h1>
      <label>Enter Your name:</label>
      <input v-model="name" type="text">
      <br>
      <center>
        <button @click="setName">Set Name</button>

        <button v-if="show" @click="getName">Get Name</button>
      </center>
      <p v-if="storedName!=''">Your name is {{storedName}}</p>
    </center>
  </div>
</template>

<script>
import tronWeb from "tronweb";
import utils from "./../utils.js";
export default {
  name: "HomePage",
  data() {
    return {
      address: "TL9FEDctrx5zvMdJWHGpeZCFCyghXMeE59",
      name: "",
      show: false,
      storedName: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    async setName() {
      await utils.contract.setName(this.name).send({ from: this.address });
      this.show = true;
      alert("done");
    },
    async getName() {
      this.storedName = await utils.contract.name().call();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 2%;
}
input {
  padding: 5px;
  margin-left: 5px;
  border-radius: 10px;
}
p {
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px;
  margin-top: 3%;
}
body {
  background-color: lightgray;
}
</style>
