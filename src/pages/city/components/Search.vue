<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, watch, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BetterScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  setup(props) {
    const keyword = ref("");
    const list = ref([]);
    const search = ref(null);
    let timer = null;
    const store = useStore();
    const router = useRouter();
    const hasNoData = computed(() => {
      !list.value.length;
    });

    watch(keyword, (keyword, prevKeyword) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (!keyword) {
        list.value = [];
        return;
      }
      timer = setTimeout(() => {
        const result = [];
        for (let i in props.cities) {
          props.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(keyword) > -1 ||
              value.name.indexOf(keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        list.value = result;
      }, 100);
    });
    function handleCityClick(city) {
      store.commit("changeCity", city);
      router.push("/");
    }

    onMounted(() => {
      new BetterScroll(search.value, {
        click: true,
      });
    });
    return { keyword, list, hasNoData, handleCityClick, search };
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  padding: 0 0.1rem;
  height: 0.72rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>
