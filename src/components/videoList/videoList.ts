import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class VideoList extends Vue {
    @Prop({default: [""]})
    state: Array<string>;
    @Prop({default: [{}]})
    classes: Array<object>;
}

export default VideoList