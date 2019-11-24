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
        if (wx) {
            wx.showLoading({
                title: "加载中..."
            });
            wx.request({
                url: 'https://www.baidu.com',
                method: "POST",
                success: function (res) {
                    // console.log(res.data);
                    console.log("success!");
                    wx.hideLoading();
                },
                fail: function () {
                    setTimeout(function () {
                        wx.showToast({
                            title: "加载失败...",
                            icon: "loading"
                        })
                    }, 2000);
                    console.log("fail...");
                },
            });
        }
        this.id = this.$root.$mp.query.id;
        this.topImg = Data.playPage[this.id].topImg;
        this.imgs = Data.playPage[this.id].imgs;
        this.bottomText = Data.playPage.bottomText;
    }
}
export default PlayPage
