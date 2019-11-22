// index.ts
import { Vue, Component } from 'vue-property-decorator'
import StaticImg2 from '@/components/staticImg2/staticImg2.vue'
import ActivityList from '@/components/activityList/activityList.vue'
import BottomText from '@/components/bottomText/bottomText.vue'

import Data from '../../testData.json'

// 必须使用装饰器的方式来指定component
@Component({
    components: {
        StaticImg2,
        ActivityList,
        BottomText
    },
})
class PlayPage extends Vue {

    id: number = 0;
    topImg: object = {};
    imgs: Array<object> = [{}];
    bottomText: string = "";

    beforeMount() {
        console.log("In playPage");
        wx.showLoading({
            title: "玩命加载中..."
        });
        this.id = this.$root.$mp.query.id;
        this.topImg = Data.playPage[this.id].topImg;
        this.imgs = Data.playPage[this.id].imgs;
        this.bottomText = Data.playPage.bottomText;
        setTimeout(function () {
            wx.hideLoading();
        }, 500);
    }
}
export default PlayPage
