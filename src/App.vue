<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import tronWeb from "tronweb";
import utils from "./utils.js";
export default {
  data() {
    return {
      address: "TL9FEDctrx5zvMdJWHGpeZCFCyghXMeE59"
    };
  },
  async created() {
    let TronWeb = new tronWeb(
      "https://api.shasta.trongrid.io",
      "https://api.shasta.trongrid.io",
      "https://api.shasta.trongrid.io",
      "Your private key"
    );
    TronWeb.defaultAddress = {
      hex: TronWeb.address.toHex(this.address),
      base58: this.address
    };
    await utils.setTronWeb(TronWeb);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
