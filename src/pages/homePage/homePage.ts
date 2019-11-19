import { Vue, Component, Prop } from 'vue-property-decorator'
import TopScrollImg from '@/components/topScrollImg/topScrollImg.vue'
import ActivityList from '@/components/activityList/activityList.vue'
import BottomText from '@/components/bottomText/bottomText.vue'

import Data from '../../testData.json'

@Component({
    components: {
        TopScrollImg,
        ActivityList,
        BottomText
    }
})
class HomePage extends Vue {

    topScrollImgs: Array<object> = [{}];    // 滚动图片对象

    tabTitles: Array<string> = [""];    // tab 页标题
    currentIndex: number = 0;   // 当前 tab 页序号
    itemHeight: number = 190;
    swiperHeight: number = 800;

    leftImgs: Array<object> = [{}];
    rightImgs: Array<object> = [{}];

    bottomText: string = "";

    // 改变 swiper 高度
    changeHeight(): void {
        if (this.currentIndex == 0) {
            this.swiperHeight = this.itemHeight * this.leftImgs.length;
        } else if (this.currentIndex == 1) {
            this.swiperHeight = this.itemHeight * this.rightImgs.length;
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
        console.log("In homePage");
        this.topScrollImgs = Data.homePage.topScrollImgs;
        this.tabTitles = Data.homePage.tabTitles;
        this.leftImgs = Data.homePage.leftImgs;
        this.rightImgs = Data.homePage.rightImgs;
        this.swiperHeight = this.itemHeight * this.leftImgs.length;
        this.bottomText = Data.homePage.bottomText;
    }
}

export default HomePage