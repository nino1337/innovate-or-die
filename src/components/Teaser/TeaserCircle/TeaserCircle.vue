<template>
  <div class="teaser-circle">
   <div class="teaser-circle__content">
     <img src="img/icons/logo-brandung.svg" alt="Logo Brandung" />
     <div class="teaser-circle__address">
       <span v-for="(entry, index) in address" :key="index">
         {{entry}} <br>
        </span>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeaserCircle',
  props: {
    subtitle: String,
    title: String,
    address: Array,
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/partials/_variables.scss";
@import "../../../assets/scss/partials/_mixins.scss";
@import "../../../assets/scss/partials/_colors.scss";

.teaser-circle {
  @include fontSizeREM(18);
  background-color: color('red');
  color: color('white');
  border-radius: 50%;
  width: 260px;
  height: 260px;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(20);
    margin-right: 0;
    width: 340px;
    height: 340px;
  }
}

.teaser-circle__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
}

.teaser-circle__subtitle {
  margin-bottom: 12px;

  @media screen and (min-width: $desktopBp) {
    margin-bottom: 24px;
  }
}

.teaser-circle__title {
  @include fontSizeREM(20);
  font-weight: $ff-bold;
  margin-bottom: 12px;

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(30);
  }
}

.teaser-circle__address {

  @media screen and (min-width: $desktopBp) {
    line-height: 1.4;
  }
}
</style>
