import { Vue, Component } from 'vue-property-decorator'
import StaticImg from '@/components/staticImg/staticImg.vue'
import Gride from '@/components/gride/gride.vue'
import ActivityList from '@/components/activityList/activityList.vue'
import BottomText from '@/components/bottomText/bottomText.vue'

import Data from '../../testData.json'

@Component({
    components: {
        StaticImg,
        Gride,
        ActivityList,
        BottomText
    }
})
class CloudPage extends Vue {

    id: number = 0;
    currentIndex: number = 0;   // 当前 tab 页序号
    itemHeight: Array<number> = [190, 195];
    swiperHeight: number = 200;

    topImg: Array<object> = [{}];
    tabTitles: Array<string> = [""];
    
    grideImgs: Array<object> = [{}];
    imgList1: Array<object> = [{}];

    bottomText: string = "";

    // 改变 swiper 高度
    changeHeight(): void {
        if (this.currentIndex == 0) {
            this.swiperHeight = this.itemHeight[0] * Math.ceil(this.grideImgs.length / 3);
        } else if (this.currentIndex == 1) {
            this.swiperHeight = this.itemHeight[1] * this.imgList1.length;
        }
    }
    // 点击 tab 页标题触发
    click(e: any): void | boolean {
        let current: number = e.currentTarget.id;   // 实际是一个 string
        if (this.currentIndex == current) {
            return false;
        } else {
            this.currentIndex = current;
            this.changeHeight();
        }
    }
    // 滑动 swiper 时触发
    slide(e: any): void | boolean {
        let current: number = e.mp.detail.current;
        if (this.currentIndex == current) {
            return false;
        } else {
            this.currentIndex = current;
            this.changeHeight();
        }
    }

    beforeMount() {
        console.log("In cloudPage");
        wx.showLoading({
            title: "玩命加载中..."
        });
        this.id = this.$root.$mp.query.id;
        this.topImg = Data.cloudPage[this.id].topImg;
        this.tabTitles = Data.cloudPage.tabTitles;
        this.grideImgs = Data.cloudPage[this.id].grideImgs;
        this.imgList1 = Data.cloudPage[this.id].imgList1;
        this.swiperHeight = this.itemHeight[0] * Math.ceil(this.grideImgs.length / 3);
        this.bottomText = Data.cloudPage.bottomText;
        setTimeout(function () {
            wx.hideLoading();
        }, 500);
    }
}

export default CloudPage