import { Vue, Component } from 'vue-property-decorator'
import StaticImg from '@/components/staticImg/staticImg.vue'
import Gride2 from '@/components/gride2/gride2.vue'
import BottomText from '@/components/bottomText/bottomText.vue'

import Data from '../../testData.json'

@Component({
    components: {
        StaticImg,
        Gride2,
        BottomText
    }
})
class SubCloudPage extends Vue {

    id: number = 0;

    topImg: object = {};
    imgs: Array<object> = [{}];
    bottomText: string = "";

    beforeMount() {
        console.log("In subCloudPage");
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
        this.topImg = Data.subCloudPage[this.id].topImg;
        this.imgs = Data.subCloudPage[this.id].classes;
        this.bottomText = Data.subCloudPage.bottomText;
    }
}

export default SubCloudPage