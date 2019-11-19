import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class UserContend extends Vue {
    @Prop({ default: [{}] })
    users: Array<object>;

    created() {
        console.log(this.users)
    }
}

export default UserContend