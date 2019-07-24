<template>
  <div class="tabs">
    <div class="tabs__item" :class="{'is-active': activeTab === 2}" @click="$emit('tabClicked', 2)">
     Berlin
   </div>
   <div class="tabs__item" :class="{'is-active': activeTab === 1}" @click="$emit('tabClicked', 1)">
     Köln
   </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    activeTab: Number,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
@import "../../assets/scss/partials/_colors.scss";

.tabs {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  max-width: 400px;
  margin: 0 auto;

  @media screen and (min-width: $desktopBp) {
    justify-content: flex-start;
    max-width: none;
    margin-top: 32px;
  }
}

.tabs__item {
  @include fontSizeREM(30);
  cursor: pointer;
  font-weight: $ff-bold;
  padding-bottom: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    background-color: color('purple');
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 5px;
    transform: translateX(-101%);
    transition: transform 0.3s;
  }

  &.is-active {
    &::after {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(40);
    margin-right: 42px;

    &.is-active {
      &::after {
        height: 8px;
      }
    }
  }
}
</style>
