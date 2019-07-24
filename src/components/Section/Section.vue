<template>
  <section
    class="section"
    :class="sectionBackground"
    :style="{backgroundImage: backgroundImage ? `url('${backgroundImage}')` : ''}"
  >
    <div class="section__content">
      <h3
        class="section__headline"
        :class="{'section__headline--wave': wave }"
        v-if="title"
      >{{title}}</h3>
      <div class="section__subline" v-if="subline">{{subline}}</div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: {
    background: String,
    title: String,
    subline: String,
    backgroundImage: String,
    wave: Boolean
  },
  data() {
    return {
      sectionBackground: `section--${this.background}`
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
@import "../../assets/scss/partials/_colors.scss";

.section__headline {
  @include fontSizeREM(48);
  margin: 0 0 6px;
  text-transform: uppercase;
  color: color("white");

  @media screen and (min-width: 480px) {
    @include fontSizeREM(64);
  }

  &--wave {
    position: relative;

    &::before {
      content: url($assetPath+"img/icons/Welle_mobil.png");
      position: absolute;
      top: -32px;
      right: -16px;
      transform: scale(-1);
    }

    @media screen and (min-width: $desktopBp) {
      &::before {
        content: url($assetPath+"img/icons/Welle.png");
        top: -50px;
        right: -170px;
      }
    }
  }
}

.section__subline,
.section__sub-subline {
  @include fontSizeREM(30);
  font-weight: $ff-semi-bold;
  margin-bottom: 30px;
}

.section__sub-subline {
  margin-bottom: 20px;
  text-transform: uppercase;
}

.section__content {
  p {
    @include fontSizeREM(16);
    line-height: 1.63;
    margin-bottom: 30px;
  }

  ul {
    padding-left: 16px;

    li {
      line-height: 1.56;
      margin-bottom: 6px;
    }
  }

  @media screen and (min-width: $desktopBp) {
    p,
    ul {
      @include fontSizeREM(16);
    }
  }
}

.section--blue,
.section--blue-dark,
.section--red,
.section--purple,
.section--black {
  color: color("white");
}

.section--blue {
  background-color: color("blue");
}

.section--blue-dark {
  background-color: color("blue-dark");
}

.section--red {
  background-color: color("red");
}

.section--black {
  background-color: color("black");
}

.section--grey {
  background-color: color("grey");
  color: color("text-dark");
}

.section--purple {
  background-color: color("purple");
}

.section--image {
  color: color("white");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 62%;
  height: 850px;
  transform: none;
  transition: background-image 0.5s ease-in-out;
  transition-delay: 0.5s;
  position: relative;
  z-index: -1;

  @media screen and (min-width: $desktopBp) {
    background-position: 100%;
  }

  .teaser-circle {
    top: 200px;

    @media screen and (min-width: $desktopBp) {
      top: 100px;
    }
  }
}
</style>
