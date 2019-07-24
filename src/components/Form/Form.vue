<template>
  <form class="form" method="POST" :action="formAction">
    <slot></slot>
    <input
      v-for="(input, index) in inputs"
      :key="index"
      :type="input.type"
      :placeholder="input.placeholder"
      :name="input.name"
      required
    />
    <p v-if="text" v-html="text"></p>
    <button type="submit" class="button" :class="cta">{{ctaText}}</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    formAction: String,
    inputs: Array,
    text: String,
    cta: String,
    ctaText: String
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
@import "../../assets/scss/partials/_colors.scss";

.form {
  .form__subline {
    margin-bottom: 14px;
    @include fontSizeREM(20);
    font-weight: $ff-semi-bold;
  }

  input,
  select {
    @include fontSizeREM(16);
    color: color("white");
    padding: 8px 20px;
    line-height: 1.63;
    border: 1px solid color("white");
    background-color: rgba(color("black"), 0.2);
    width: 100%;
    margin-bottom: 14px;
    font-family: $ff-regular;
    line-height: 1.63;

    &::placeholder {
      color: color("white");
    }
  }

  select {
    appearance: none;
    border-radius: 0;
  }

  .button {
    display: block;
    border: none;
    padding: 16px 32px;
    @include fontSizeREM(20);
    color: color("white");
    appearance: none;
    font-weight: $ff-semi-bold;
    text-align: center;
    text-transform: uppercase;
    width: fit-content;
    margin-left: auto;

    &--blue {
      background-color: color("blue-dark");
    }

    &--black {
      background-color: color("black");
    }
  }
}
</style>
