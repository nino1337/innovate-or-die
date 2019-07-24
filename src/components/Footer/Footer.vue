<template>
  <footer class="footer">
    <nav class="footer__nav">
      <ul class="footer__list">
        <li class="footer__item">
          <a class="footer__link" href="https://www.agentur-brandung.de/kontakt/koeln/">Kontakt</a>
        </li>
        <li class="footer__item footer__item--imprint">
          <a class="footer__link" href="https://www.agentur-brandung.de/impressum/">Impressum</a>
        </li>
        <li class="footer__item">
          <a href="https://spryker.com/?lang=de" target="_blank">
            <img src="img/footer/partner.png" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
@import "../../assets/scss/partials/_colors.scss";

.footer {
  @include fontSizeREM(16);
  background-color: color("blue-dark");
  padding: 16px;

  @media screen and (min-width: $desktopBp) {
    @include fontSizeREM(18);
    height: 111px;
    padding: 16px 64px;
  }
}

.footer__list,
.footer__nav {
  height: 100%;
}

.footer__list {
  display: flex;
  padding: 0;
  margin: 0;
}

.footer__item {
  display: flex;

  &--imprint {
    flex-grow: 1;
  }

  &:last-child {
    align-self: flex-end;
  }

  img {
    height: auto;
    width: 100px;
  }
}

.footer__link {
  color: color("white");
  text-decoration: none;
  margin-right: 20px;
}
</style>
