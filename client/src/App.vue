<template>
  <div class="min-h-screen">
    <div class="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
</template>

<script>
import { Navbar, Welcome, Services, Transactions, Footer } from "./components";
export default {
  name: "App",
  components: { Navbar, Welcome, Services, Transactions, Footer },
  setup() {},
};
</script>
