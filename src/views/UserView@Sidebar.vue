<template>
  <div class="sidebar" :class="{ show: show }" @click.stop>
    <ul class="sidebar-list">
      <li
        :class="{ active: item.link === $route.name }"
        v-for="item in sidebarList"
        :key="item.name"
        @click="$router.push({ name: item.link  })"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSidebarStore } from '@/stores'
import { ref } from 'vue'
import type { RouteNamedMap } from 'vue-router/auto/routes'

interface IRouter {
  name: string;
  link: keyof RouteNamedMap;
}

const sidebarList = ref<IRouter[]>([
  {
    link: 'UserViewTodoList',
    name: 'Todo'
  },
  {
    link: 'UserViewHomeView',
    name: 'Calendar'
  }
])

const store = useSidebarStore()
const { show } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  background-color: #10163a;
  width: 260px;
  height: 100%;
  top: 0;
  left: 0;
  transition: transform ease-in-out 500ms;
  z-index: 5;

  &.show {
    transform: translateX(0);
  }
}

.sidebar-list {
  padding: 0 20px;

  li {
    width: 100%;
    line-height: 40px;
    border-radius: 5px;
    text-align: left;
    cursor: pointer;
    transition: transform ease-in-out 500ms;
    padding: 0 0 0 15px;
    box-sizing: border-box;
    margin: 5px 0;

    &:hover {
      transform: translateX(5%);
    }

    &.active {
      background: linear-gradient(to right, #7165ed, #574fbd);

      &:hover {
        transform: none;
      }
    }
  }
}

@media (max-width: $max-width) {
  .sidebar {
    transform: translateX(-100%);
  }
}
</style>
