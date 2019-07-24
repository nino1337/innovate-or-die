<template>
  <div class="header__burger" @click="$emit('toggleOpenClass')">
    <span class="layer-1"></span>
    <span class="layer-2"></span>
    <span class="layer-3"></span>
  </div>
</template>

<script>
export default {
  name: 'HeaderBurger',
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/partials/_variables.scss";
@import "../../../assets/scss/partials/_mixins.scss";
@import "../../../assets/scss/partials/_colors.scss";

.header__burger {
  cursor: pointer;
  width: 30px;
  position: relative;
  z-index: 1;

  span {
    background-color: color('white');
    display: block;
    height: 2px;
    margin-bottom: 5px;
    width: 100%;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    .is-open & {
      &:nth-child(1) {
        transform: rotate(50deg) translate(10%, 350%);
      }

      &:nth-child(2) {
        opacity: 0;
      }

       &:nth-child(3) {
        transform: rotate(-50deg) translate(10%, -350%);
      }
    }
  }

  @media screen and (min-width: $desktopBp) {
    display: none;
  }
}
</style>
