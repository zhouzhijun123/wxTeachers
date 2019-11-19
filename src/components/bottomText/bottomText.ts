import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
class BottomText extends Vue {
    @Prop({default: 'default text'})
    text: string;
    @Prop({default: 'black'})
    bgcolor: string;
    @Prop({default: 'white'})
    fcolor: string;
}

export default BottomText