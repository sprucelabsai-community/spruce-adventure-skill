import {
    interactor,
    ListViewController,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { generateId } from '@sprucelabs/test-utils'
import PostCardViewController from '../../adventures/posting/PostCard.vc'
import EventFaker from './EventFaker'

export default class FakePostCard extends PostCardViewController {
    private isLoaded = false

    public getIsLoaded(): boolean | null | undefined {
        return this.isLoaded
    }

    public async load() {
        await super.load()
        this.isLoaded = true
    }

    public getFormVc() {
        return this.formVc
    }

    public getGroupsListVc(): ListViewController {
        return this.groupsListVc!
    }

    public async fillWithRandomValues() {
        const what = await this.setToRandomValue('what')
        const when = await this.setToRandomValue('when')
        const where = await this.setRandomAddress()
        return { what, when, where }
    }

    public async submitAndAssertConfirm() {
        return vcAssert.assertRendersConfirm(this, async () => {
            await this.formVc.jumpToSlide(this.formVc.getTotalSlides() - 1)
            await interactor.submitBigFormSlide(this.formVc)
        })
    }

    public async submitAndConfirm() {
        const confirm = await this.submitAndAssertConfirm()
        await confirm.accept()
    }

    public async setToRandomValue(key: 'what' | 'when') {
        const value = key === 'when' ? new Date().getTime() : generateId()
        await this.formVc.setValue(key, value)
        return value
    }

    public async setRandomAddress() {
        const eventFaker = new EventFaker()
        const address = eventFaker.generateAddressValues()
        await this.formVc.setValue('where', address)

        return address
    }
}
