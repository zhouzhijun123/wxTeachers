// index.ts
import { Vue, Component } from 'vue-property-decorator'
import TopScrollImg from '@/components/topScrollImg/topScrollImg.vue'
import Gride3 from '@/components/gride3/gride3.vue'

import Data from '../../testData.json'

@Component({
  components: {
    TopScrollImg,
    Gride3
  },
})
class Test extends Vue {

  id: number = 0;

  imgs: Array<object> = [{}];

  beforeMount() {
    console.log("In test");
    this.imgs = Data.test[this.id].imgs;
  }
}
export default Test