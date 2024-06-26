import globby from '@sprucelabs/globby'
import {
    ErrorHealthCheckItem,
    SkillFeature,
    Skill,
    diskUtil,
    HASH_SPRUCE_DIR_NAME,
    BootCallback,
} from '@sprucelabs/spruce-skill-utils'

class ErrorSkillFeature implements SkillFeature {
    private skill: Skill
    private _isBooted = false
    private bootHandler?: BootCallback

    public constructor(skill: Skill) {
        this.skill = skill
    }

    public onBoot(cb: BootCallback) {
        this.bootHandler = cb
    }

    public execute = async () => {
        this._isBooted = true
        void this.bootHandler?.()
    }

    public checkHealth = async () => {
        const errorFiles = await this.getErrors()

        const errors = errorFiles.map((path) => {
            const schema = require(path).default

            return {
                id: schema.id,
                name: schema.name,
                description: schema.description,
            }
        })

        const health: ErrorHealthCheckItem = {
            status: 'passed',
            errorSchemas: errors,
        }

        return health
    }

    public isInstalled = async () => {
        return true
    }

    public async destroy() {
        this._isBooted = false
    }

    public isBooted() {
        return this._isBooted
    }

    private async getErrors() {
        const schemaFiles = await globby(
            diskUtil.resolvePath(
                this.skill.activeDir,
                HASH_SPRUCE_DIR_NAME,
                'errors',
                '**/*.schema.[t|j]s'
            )
        )
        return schemaFiles
    }
}

export default (skill: Skill) => {
    const feature = new ErrorSkillFeature(skill)
    skill.registerFeature('error', feature)
}
