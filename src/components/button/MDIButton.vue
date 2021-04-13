<template>
  <GridLayout @tap="onButtonTapped" columns="*,auto,auto,*" rows="*,auto,auto,*" class="button">
    <Label v-if="variant == null || variant == 'vertical'" row="1" :fontSize="iconSize" :color="(iconColor != null) ? iconColor : '#000000'" col="1" colSpan="2" :text="unicode" class="mdi icon center" width="100%"/>
    <Label v-else-if="variant == 'horizontal'" row="1" col="1" :fontSize="iconSize" :color="(iconColor != null) ? iconColor : '#000000'" :text="unicode" class="mdi icon"/>
    <Label v-if="variant == null || variant == 'vertical'" :fontSize="fontSize" :color="(textColor != null) ? textColor : '#000000'" row="2" col="1" colSpan="2" :text="text" class="label center" textWrap="true" width="100%"/>
    <Label v-else-if="variant == 'horizontal'" :fontSize="fontSize" :color="(textColor != null) ? textColor : '#000000'" row="1" col="2" :text="text" class="label"/>
  </GridLayout>
</template>

<script>
export default {
  props: {
    text: String,
    unicode: String,
    fontSize: String | Number,
    iconSize: String | Number,
    variant: String,
    textColor: String,
    iconColor: String,
    tap: Function
  },
  mounted() {},
  data() {
    return {
    };
  },
  methods: {
    onButtonTapped() {
      if(this.tap != null) {
        this.tap(this);
      }
    }
  },
  components: {
  }
};
</script>

<style lang="scss"  scoped>

.button {
  background-color: #fff;
  border-radius: 10;
}

.center {
  text-align: center;
}
</style>
