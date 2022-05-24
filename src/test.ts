import '#spruce/views/views'
import { ViewControllerFactory } from '@sprucelabs/heartwood-view-controllers'

const vcFactory = ViewControllerFactory.Factory({
	controllerMap: {},
	device: {} as any,
	connectToApi: async () => {
		return 'yes' as any
	},
})
const root = vcFactory.Controller('adventure.root', {})
export const model = root.render()
