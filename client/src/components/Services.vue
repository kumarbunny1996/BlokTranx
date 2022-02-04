<template>
  <div
    class="flex justify-center items-center gradient-bg-services w-full"
  >
    <div
      class="flex md:flex-row flex-col justify-between items-center md:p-20 py-12 px-4"
    >
      <div class="flex flex-1 flex-col justify-start items-start">
        <h1 class="text-white text-gradient py-2 text-3xl sm:text-5xl">
          Services that we
          <br />
          continue to improve
        </h1>
        <p
          class="text-white text-left text-base font-light md:w-9/12 w-11/12 my-2"
        >
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>
      <div class="flex flex-col justify-start items-center flex-1">
        <ServiceCard v-bind="serviceCard1" />
        <ServiceCard v-bind="serviceCard2" />
        <ServiceCard v-bind="serviceCard3" />
      </div>
    </div>
  </div>
</template>
<script>
import ServiceCard from "./ServiceCard.vue";
export default {
  name: "Services",
  components: { ServiceCard },
  setup() {
    let serviceCard1 = {
      title: "Security gurantee",
      subtitle:
        "Security is guranteed. We always maintain privacy and maintain the quality of our products",
      color: "bg-[#2952E3]",
      type: "shield-alt",
    };
    let serviceCard2 = {
      title: "Best exchange rates",
      subtitle:
        "Security is guranteed. We always maintain privacy and maintain the quality of our products",
      color: "bg-[#8945F8]",
      type: "search",
    };
    let serviceCard3 = {
      title: "Fastest transactions",
      subtitle:
        "Security is guranteed. We always maintain privacy and maintain the quality of our products",
      color: "bg-[#F84550]",
      type: "heart",
    };

    return {
      serviceCard1,
      serviceCard2,
      serviceCard3,
    };
  },
};
</script>
