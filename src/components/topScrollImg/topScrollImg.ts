// topScrollImg.ts
import { Vue, Component, Prop } from 'vue-property-decorator'
// 必须使用装饰器的方式来指定component
@Component
class TopScrollImg extends Vue {
    @Prop({ default: [{}] })
    imgs: Array<object>;    // 由使用该组件的部分动态改变 imgs
    
    autoplay: boolean = true;
    circular: boolean = true;
    interval: number = 3000;
    duration: number = 1500;
    easing_function: string = "easeOutCubic";
    previousMargin: string = '100rpx';
    nextMargin: string = '100rpx';
    currentIndex: number = 0;

    // methods
    imgChange(e: any): void {
        this.currentIndex = e.mp.detail.current;
    }
}

export default TopScrollImg