<template>
  <div class="content">
    <ul class="todo-list">
      <li v-for="(item, i) in todoList" :key="i">
        <BaseCheckbox v-model:checkStatus="item.completed"></BaseCheckbox>
        <span>{{ item.title }}</span>
        <div
          class="label"
          :class="label"
          v-for="label in item.labels"
          :key="label"
        >
          {{ label }}
        </div>
        <div class="truncate">
          {{ item.truncate }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseCheckbox from '@/components/BaseCheckbox.vue'

export default {
  data () {
    return {
      todoList: [
        {
          completed: false,
          title: '完成todo list 💻',
          truncate: '完成todo list',
          labels: ['Todolist']
        },
        {
          completed: false,
          title: '增加、查看todo list內容 💻',
          truncate: 'todo list彈窗組件',
          labels: ['Component', 'Todolist']
        },
        {
          completed: false,
          title: 'input組件 💻',
          truncate: 'input組件設計與功能',
          labels: ['Component']
        },
        {
          completed: true,
          title: 'CheckBox組件 💻',
          truncate: 'CheckBox組件設計與功能',
          labels: ['Component']
        },
        {
          completed: true,
          title: '建構框架 💻',
          truncate: '使用vue-cli建構框架、Layout'
        }
      ]
    }
  },
  components: {
    BaseCheckbox
  }
}
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid #414561;
  border-radius: 2px;
}

.todo-list {
  margin: 0;
  width: 100%;

  li {
    padding: 15px;
    border-bottom: 1px solid #414561;
    display: flex;
    align-items: center;
    flex-flow: wrap;
    cursor: pointer;
    transition: transform ease-in-out 300ms;

    &:hover {
      transform: translateY(-5%);
    }

    &:last-of-type {
      border: none;
    }

    .label {
      position: relative;
      line-height: 25px;
      padding: 0 15px 0 23px;
      background-color: #10163a;
      border-radius: 20px;
      margin-left: 10px;
      color: #c2c6dc;

      &::before {
        position: absolute;
        content: '';
        width: 7px;
        height: 7px;
        background: #ccc;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
      }

      &.Todolist {
        &::before {
          background-color: #7367f0;
        }
      }

      &.Component {
        &::before {
          background-color: #ff9f43;
        }
      }
    }

    .truncate {
      margin-top: 10px;
      width: 100%;
      color: #c2c6dc;
    }
  }
}
</style>
