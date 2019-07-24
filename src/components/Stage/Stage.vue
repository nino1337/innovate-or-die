<template>
  <div class="stage">
    <div class="container">
      <h1 class="stage__headline">innovate or die</h1>
      <h3 class="stage__subline">Versicherungsbranche im digitalen Wandel</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stage"
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
@import "../../assets/scss/partials/_colors.scss";

.stage {
  height: 100vh;
  min-height: 550px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-image: url($assetPath+"img/bühnen_bild.png");
  padding: 80px 24px 0;
  color: color("white");
  position: relative;
  box-sizing: border-box;

  &::before {
    content: url($assetPath+"img/icons/Welle_mobil.png");
    position: absolute;
    top: 200px;
    left: 0;
  }

  @media screen and (min-width: $desktopBp) {
    padding-top: 150px;
    height: 70vh;
    min-height: 900px;

    &::before {
      content: url($assetPath+"img/icons/Welle.png");
      position: absolute;
      top: 300px;
      left: -200px;
    }
  }

  @media screen and (min-width: 1260px) {
    &::before {
      left: 0;
    }
  }
}

.stage__headline {
  @include fontSizeREM(48);
  line-height: 1;
  margin-left: auto;
  text-transform: uppercase;
  word-break: break-word;
  hyphens: auto;
  text-align: right;
  max-width: 350px;

  @media screen and (min-width: 480px) {
    @include fontSizeREM(64);
  }

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(82);
    max-width: 700px;
    margin-bottom: 0;
    line-height: 1.3;
  }
}

.stage__subline {
  @include fontSizeREM(28);
  text-align: right;
  font-weight: 600;
  position: relative;
  max-width: 300px;
  margin-left: auto;
  word-break: break-word;
  hyphens: auto;
  line-height: 1.12;

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(48);
    max-width: 525px;
    margin-top: 0;
    line-height: 1.2;
  }

  &::after {
    content: "";
    height: 11px;
    background-color: color("white");
    width: calc(100% + 24px);
    position: absolute;
    bottom: -24px;
    right: -40px;

    @media screen and (min-width: 480px) {
      right: 0;
    }

    @media screen and (min-width: $desktopBp) {
      bottom: -60px;
      height: 18px;
    }
  }
}
</style>
