<template>
  <div id="k-Inp" :style="{width:this.width}">
    <input type="text" :placeholder="Plr" :style="{color:this.Color,borderColor:this.Color}" />
    <label class="input-dom"></label>
  </div>
</template>
<script>
export default {
  name: "K-input",
  props: ["Plr", "Color", "width"],
  created() {},
};
</script>

<style scoped>
#k-Inp {
  position: relative;
  max-width: 500px;
  min-width: 150px;
  height: 50px;
}
input {
  outline: none;
  border: none;
  padding: 5px 10px;
  z-index: 99;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 50%;
  text-align: center;
  margin-top: -15px;
  width: 73%;
}
.input-dom::after,
.input-dom::before {
  content: "";
  position: absolute;
  right: 0;
  width: 50%;
  height: 150%;
  z-index: 9;
  height: 40px;
  border: 4px solid #eee;
}
.input-dom::after {
  border-left: none;
}
.input-dom::before {
  left: 0;
  border-right: none;
}
input:focus,
.input-dom::before,
.input-dom::after {
  transition: ease 0.3s;
}
input:focus + .input-dom::before {
  transform: translate3d(-10%, 0, 0);
}
input:focus + .input-dom::after {
  transform: translate3d(10%, 0, 0);
}
</style>