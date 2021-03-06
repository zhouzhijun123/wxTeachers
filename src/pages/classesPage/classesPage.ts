import { Vue, Component } from 'vue-property-decorator'
import VideoList from '@/components/videoList/videoList.vue'
import BottomText from '@/components/bottomText/bottomText.vue'

import Data from '../../testData.json'

@Component({
    components: {
        VideoList,
        BottomText
    }
})
class ClassesPage extends Vue {
    id: number = 0;
    title: string = "";
    classes: Array<object> = [{}];
    state: Array<string> = [""];
    binImg: string = "";
    bottomText: string = "";

    beforeMount() {
        console.log("In classesPage");
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
        this.title = Data.classesPage[this.id].title;
        this.classes = Data.classesPage[this.id].classes;
        this.state = Data.classesPage.state;
        this.binImg = Data.classesPage[this.id].binImg;
        this.bottomText = Data.classesPage.bottomText;
    }
}

export default ClassesPage