import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
class Gride extends Vue {
    @Prop({ default: [{}] })
    imgs: Array<object>;

}

export default Gride