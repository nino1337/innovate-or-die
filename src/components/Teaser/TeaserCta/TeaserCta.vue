<template>
  <div class="teaser-cta">
    <div class="teaser-cta__meta">{{date}}, {{location}}</div>
    <div class="teaser-cta__text" v-html="text"></div>
    <a class="teaser-cta__button" :href="ctaLink">{{ctaText}}</a>
  </div>
</template>

<script>
export default {
  name: "TeaserCta",
  props: {
    date: String,
    location: String,
    text: String,
    ctaText: String,
    ctaLink: String
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/partials/_variables.scss";
@import "../../../assets/scss/partials/_mixins.scss";
@import "../../../assets/scss/partials/_colors.scss";

.teaser-cta {
  margin: 0 auto 42px;
  width: 100%;
  background-color: color("white");
  color: color("black");
  padding: 38px;
  max-width: 630px;
  margin: 0 auto;

  @media screen and (min-width: $desktopBp) {
    text-align: center;
    padding: 16px;
  }
}

.teaser-cta__meta {
  @include fontSizeREM(30);
  font-weight: $ff-semi-bold;
  text-transform: capitalize;
  align-items: center;
  display: flex;
  margin-bottom: 16px;

  @media screen and (min-width: $desktopBp) {
    justify-content: center;
  }
}

.teaser-cta__location {
  margin-right: 8px;
}

.teaser-cta__text {
  @include fontSizeREM(16);
  margin-bottom: 16px;
}

.teaser-cta__button {
  @include fontSizeREM(20);
  background-color: color("blue-dark");
  border: 1px solid transparent;
  color: color("white");
  display: block;
  font-weight: $ff-semi-bold;
  text-align: center;
  padding: 16px 24px;
  text-decoration: none;
  transition: all 0.3s;
  text-transform: uppercase;
  margin: 0 auto;

  &:hover {
    color: color("blue-dark");
    background-color: color("white");
    border-color: color("blue-dark");
  }

  @media screen and (min-width: $desktopBp) {
    max-width: 240px;
  }
}
</style>
