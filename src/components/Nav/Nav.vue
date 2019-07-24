<template>
  <nav class="nav">
    <ul class="nav__list" @click="$emit('navClicked')">
      <li class="nav__item">
        <a class="nav__link" href="#home">Home</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#event">Event</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#trendguide">Trendguide</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#programm">Programm</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#speaker">Speaker</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#location">Location</a>
      </li>
    </ul>
    <ul class="nav__list nav__list--meta">
      <li class="nav__item">
        <a class="nav__link" href="https://www.agentur-brandung.de/kontakt/koeln/">Kontakt</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="https://www.agentur-brandung.de/impressum/">Impressum</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
@import "../../assets/scss/partials/_colors.scss";

.nav {
  background-color: rgba(color("black"), 0.3);
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  width: 100vw;
  max-width: 320px;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;
  background-color: color("blue-dark");

  .is-open & {
    transform: translateX(0);
  }

  @media screen and (min-width: $desktopBp) {
    background-color: transparent;
    height: auto;
    width: auto;
    position: static;
    transform: none;
    max-width: none;
  }

  @media screen and (min-width: 1260px) {
    margin: 0 32px;
  }
}

.nav__list,
.nav__item {
  display: flex;
}

.nav__list {
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: $headerHeight 0 0 48px;
  width: 100%;
  background-color: color("blue");

  &--meta {
    padding-top: 24px;
    background-color: color("blue-dark");
  }

  @media screen and (min-width: $desktopBp) {
    flex-direction: row;
    padding: 0;
    background-color: transparent;

    &--meta {
      display: none;
    }
  }
}

.nav__item {
  margin-bottom: 24px;

  @media screen and (min-width: $desktopBp) {
    margin: 0 12px;
  }
}

.nav__link {
  @include fontSizeREM(24);
  color: color("white");
  text-decoration: none;

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(18);
  }
}
</style>
