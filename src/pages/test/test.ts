// index.ts
import { Vue, Component } from 'vue-property-decorator'
import Gride3 from '@/components/gride3/gride3.vue'

import Data from '../../testData.json'

@Component({
  components: {
    Gride3
  },
})
class Test extends Vue {

  id: number = 0;

  imgs: Array<object> = [{}];

  beforeMount() {
    console.log("In test");
    this.id = this.$root.$mp.query.id;
    this.imgs = Data.test[this.id].imgs;
  }
}
export default Test