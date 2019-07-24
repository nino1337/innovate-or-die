<template>
  <div class="teaser-icon">
    <img class="teaser-icon__image" :src="imgSource" :alt="imgTitle" />
    <div class="teaser-icon__meta">
    <div class="teaser-icon__timetable">
      {{timeTable}}
    </div>
      <div class="teaser-icon__title">
        {{title}}
      </div>
      <div v-if="subTitle" class="teaser-icon__subtitle">{{subTitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teasericon',
  props: {
    imgSource: String,
    imgTitle: String,
    timeTable: String,
    title: String,
    subTitle: String,
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/partials/_variables.scss";
@import "../../../assets/scss/partials/_mixins.scss";
@import "../../../assets/scss/partials/_colors.scss";

.teaser-icon {
  @include fontSizeREM(14);
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(16);
    align-items: center;
    flex-direction: row;
    max-width: 400px;
    text-align: right;
    margin: 0 auto;
  }
}

.teaser-icon__image {
  margin: 0 auto 12px;
  display: block;

  @media screen and (min-width: $desktopBp) {
    order: 2;
  }
}

.teaser-icon__title {
  @include fontSizeREM(28);
  font-weight: $ff-bold;
  text-transform: uppercase;

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(38);
  }
}

.teaser-icon__timetable {
  @media screen and (min-width: $desktopBp) {
    margin-bottom: 8px;
  }
}
</style>
