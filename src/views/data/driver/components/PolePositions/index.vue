<template>
  <div class="list">
    <div
      class="list__item"
      :class="getClassName(item.team)"
      v-for="item in info.pole_positions_list"
      :key="item.season + 'teams'"
    >
      <div class="list__item-id">{{ item.id }}</div>
      <div class="list__item-event">{{ item.event }}</div>
      <div class="list__item-round">{{ item.round }}</div>
      <div class="list__item-team">{{ item.team }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Wins",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const data = reactive({
      getClassName(team: string) {
        return `list__item_${team.replace(/\s/g, "")}`;
      },
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 354px);
  padding: 15px 10px;
  overflow-y: scroll;

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 12px 5px;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: $box-shadow;
  }

  &__item + &__item {
    margin-top: 10px;
  }

  &__item-id {
    width: 20px;
    text-align: center;
  }

  &__item-event {
    flex: 1;
    text-align: center;
  }

  &__item-round {
    width: 50px;
    text-align: center;
  }

  &__item-team {
    width: 90px;
    text-align: center;
  }
}
</style>
