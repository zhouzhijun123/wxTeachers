 // index.ts
 import { Vue, Component } from 'vue-property-decorator'
 import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
 // 必须使用装饰器的方式来指定component
 @Component({
   components: {
     Card,
   },
 })
 class Test extends Vue {
  
   ver: number = 123
   onShow() { // 小程序 hook
   }
   mounted() { // vue hook
   }
 }
 export default Test