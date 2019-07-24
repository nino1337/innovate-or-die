<template>
  <header class="header" :class="{ 'is-open': isOpen, 'is-scrolled': isScrolled}">
    <div class="header__logo">
      <a href="https://spryker.com/?lang=de" target="_blank">
        <img src="img/icons/spryker_Logo.png" alt="Logo Spryker" />
      </a>
    </div>
    <div class="header__brand">
      <a href="https://www.agentur-brandung.de/" target="_blank">
        <img src="img/icons/logo-brandung.svg" alt="Logo Brandung" />
      </a>
    </div>
    <HeaderBurger @toggleOpenClass="this.toggleOpenClass" />
    <Nav @navClicked="isOpen = false" />
  </header>
</template>

<script>
import HeaderBurger from "./components/HeaderBurger";
import Nav from "../Nav/Nav";

export default {
  name: "Header",
  components: {
    Nav,
    HeaderBurger
  },
  mounted() {
    window.addEventListener("scroll", this.toggleScrolledCls);
  },
  data() {
    return {
      isOpen: false,
      isScrolled: false
    };
  },
  methods: {
    toggleOpenClass() {
      this.isOpen = !this.isOpen;
    },

    toggleScrolledCls() {
      const scrollTop = window.scrollY;
      const triggerScrollPos = 100;

      if (scrollTop > triggerScrollPos && this.isScrolled === false) {
        this.isScrolled = true;
      } else if (scrollTop <= triggerScrollPos) {
        this.isScrolled = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
@import "../../assets/scss/partials/_colors.scss";

.header {
  align-items: center;
  display: flex;
  height: $headerHeight;
  padding: 16px;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  transition: background-color 0.3s;
  z-index: 50;

  &.is-scrolled {
    background-color: color("blue-dark");
  }

  img {
    display: block;
    max-width: 100px;
    height: auto;
  }

  @media screen and(min-width: $desktopBp) {
    height: $headerHeight;

    img {
      max-width: 150px;
    }
  }
}

.header__brand {
  flex-grow: 1;

  @media screen and(min-width: $desktopBp) {
    order: 2;
    flex-grow: 0;
  }
}

.header__logo {
  margin-right: 8px;
}
</style>
