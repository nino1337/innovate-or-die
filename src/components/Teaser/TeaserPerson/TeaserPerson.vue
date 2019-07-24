<template>
  <div class="teaser-person" :class="{'teaser-person--left': isLeft}">
    <img class="teaser-person__image" :src="`img/person/${imgTitle}.jpg`" :alt="imgTitle" />
    <div class="teaser-person__meta">
      <div class="teaser-person__timetable">{{timeTable}}</div>
      <div class="teaser-person__title">{{title}}</div>
      <div class="teaser-person__citate">{{citate}}</div>
      <div class="teaser-person__person-name">{{personName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeaserPerson",
  props: {
    imgTitle: String,
    timeTable: String,
    personName: String,
    citate: String,
    isLeft: Boolean,
    title: String
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/partials/_variables.scss";
@import "../../../assets/scss/partials/_mixins.scss";
@import "../../../assets/scss/partials/_colors.scss";

.teaser-person {
  @include fontSizeREM(16);
  background-color: color("white");
  color: color("black");
  max-width: 90%;
  margin: 80px auto 32px;
  padding: 120px 16px 8px;
  position: relative;
  text-align: center;

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(16);
    margin: 40px 0 80px auto;
    padding: 18px 16px 18px 182px;
    text-align: left;
    left: 82px;
  }

  @media screen and (min-width: 1260px) {
    min-width: 780px;
  }
}

.teaser-person__image {
  border-radius: 50%;
  max-width: 160px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -30%);

  @media screen and (min-width: $desktopBp) {
    max-width: 220px;
    top: 50%;
    left: 0;
    transform: translate(-23%, -50%);
  }
}

.teaser-person__title {
  @include fontSizeREM(30);
  font-weight: $ff-semi-bold;
  line-height: 1.1;
  margin-bottom: 8px;
  width: 100%;
}

.teaser-person__meta {
  @media screen and (min-width: $desktopBp) {
    display: flex;
    flex-wrap: wrap;
  }
}

.teaser-person__timetable {
  margin-bottom: 10px;

  @media screen and (min-width: $desktopBp) {
    margin-bottom: 6px;
  }
}

.teaser-person__person-name {
  margin-bottom: 16px;

  @media screen and (min-width: $desktopBp) {
    width: 55%;
    margin-bottom: 0;
  }
}

.teaser-person__citate {
  width: 100%;
  margin-bottom: 8px;
  line-height: 1.25;
}

.teaser-person--left {
  @media screen and (min-width: $desktopBp) {
    padding: 18px 182px 18px 16px;
    margin-right: auto;
    margin-left: 0;
    right: 82px;
    left: auto;

    .teaser-person__meta {
      justify-content: flex-end;
      text-align: right;
    }

    .teaser-person__image {
      left: auto;
      right: 0;
      transform: translate(23%, -50%);
    }

    .teaser-person__person-name {
      width: auto;
    }
  }
}
</style>
