<template>
  <GridLayout @loaded="onNavigationBarLoaded" columns="*,auto,*" rows="*,auto,*" class="toolbar">
    <StackLayout row="1" col="0" @tap="onLeftButtonPressed" orientation="horizontal" class="header-button empty left">
      <slot name="left"/>
    </StackLayout>

    <label class="title" v-if="title != null" col="1" row="1" :text="title"/>

    <StackLayout row="1" @tap="onRightButtonPressed" orientation="horizontal" col="2" class="header-button empty right">
      <slot name="right"/>
    </StackLayout>
  </GridLayout>
</template>

<script>
export default {
  props: {
    title: String,
    leftTap: Function,
    rightTap: Function,
    onLoadedEvent: Function
  },
  mounted() {},
  data() {
    return {
    };
  },
  methods: {
    onLeftButtonPressed() {
      if (this.leftTap != null) this.leftTap();
    },
    onRightButtonPressed() {
      if (this.rightTap != null) this.rightTap();
    },
    onNavigationBarLoaded() {
      if (this.onLoadedEvent != null) this.onLoadedEvent();
    }
  },
  components: {
  }
};
</script>

<style lang="scss"  scoped>
.left label {
  width: 100%;
  text-align: left;
}

.right label {
  width: 100%;
  text-align: right;
}

.right GridLayout Label {
  text-align: center;
}
</style>
