import EquipSkillViewController from '../../root/Equip.svc'
import ProfileSkillViewController from '../../skillViewControllers/Profile.svc'
import RootSkillViewController from '../../skillViewControllers/Root.svc'

const vcs = {
    EquipSkillViewController,
    ProfileSkillViewController,
    RootSkillViewController,
}

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.equip': Parameters<EquipSkillViewController['load']>[0]['args']
		'adventure.profile': Parameters<ProfileSkillViewController['load']>[0]['args']
		'adventure.root': Parameters<RootSkillViewController['load']>[0]['args']
	}

	interface ViewControllerMap {
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
	}
}


//@ts-ignore
if(typeof heartwood === 'function') { heartwood(vcs) }

export default vcs