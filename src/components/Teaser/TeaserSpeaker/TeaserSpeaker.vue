<template>
  <div class="teaser-speaker">
    <div v-for="speaker in speaker" :key="speaker.personName" class="teaser-speaker__item">
      <img
        class="teaser-speaker__image"
        :src="`img/person/${speaker.imgTitle}.jpg`"
        :alt="speaker.imgTitle"
      />
      <div class="teaser-speaker__name">{{speaker.personName}}</div>
      <div class="teaser-speaker__company">{{speaker.company}}</div>
      <div class="teaser-speaker__citate">{{speaker.citate}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeaserSpeaker",
  props: {
    speaker: Array
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/partials/_variables.scss";
@import "../../../assets/scss/partials/_mixins.scss";
@import "../../../assets/scss/partials/_colors.scss";

.teaser-speaker {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: $desktopBp) {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.teaser-speaker__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 70px;

  @media screen and (min-width: $desktopBp) {
    max-width: 220px;
  }
}

.teaser-speaker__image {
  border-radius: 50%;
  width: 220px;
  height: 220px;
  margin-bottom: 18px;
}

.teaser-speaker__name {
  @include fontSizeREM(30);
  font-weight: $ff-semi-bold;
  line-height: 1.3;
  margin-bottom: 8px;
}

.teaser-speaker__company {
  margin-bottom: 16px;
}

.teaser-speaker__citate {
  line-height: 1.63;
}
</style>
