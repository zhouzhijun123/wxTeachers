import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class ActivityList extends Vue {
    @Prop({ default: [{}] })
    imgs: Array<object>;
    @Prop({ default: '0' })
    flag: string;

    itemHeight: number = 200;
}

export default ActivityList