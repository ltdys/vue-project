<template>
  <div>
    <div class="g-ter grid pointer">
      <div :class="isInternetThing ? 's-icon-check' : 's-icon-default'" @click="change(true)"></div>
      <span :class="isInternetThing ? 's-span-check' : 's-span-default'" @click="change(true)">mang</span>
    </div>
    <div class="g-cau grid pointer">
      <div :class="isInternetThing ? 's-icon-default' : 's-icon-check'" @click="change(false)"></div>
      <span :class="isInternetThing ? 's-span-default' : 's-span-check'" @click="change(false)">nang</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isInternetThing: true
    }
  },
  mounted(){
    let self = this;
  },
  methods: {
    change(status) {
      let self = this
      self.isInternetThing = status
      if(status)
        self.$router.push('/mang')
      else
        self.$router.push('/nang')
    }
  }
}
</script>
<style lang="scss" scoped>
  .g-ter {
    margin-top: 62px;
  }
  .g-cau {
    margin-top: 20px;
  }
  .g-ter, .g-cau {
    .s-icon-check, .s-icon-default {
      margin-top: 4px;
    }
    span {
      padding-left: 20px;
      font-size: 14px;
    }
  }
  
  $checkColor: #8d0000;
  $defaultColor: #6d6d6d;
  .s-icon-check {
    width: 13px;
    height: 13px;
    background: $checkColor;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .s-icon-default {
    width: 8px;
    height: 8px;
    border: 3px $defaultColor solid; 
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .s-span-check {
    color: $checkColor;
  }

  .s-span-default {
    color: $defaultColor;
  }
</style>