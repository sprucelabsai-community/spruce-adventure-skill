import {
    AbstractStore,
    UniversalStoreOptions,
    PrepareOptions,
    PrepareResults,
} from '@sprucelabs/data-stores'
import {
    buildSchema,
    dropFields,
    makeFieldsOptional,
    SchemaValues,
    SchemaFieldNames,
} from '@sprucelabs/schema'
import { StoreSeedOptions } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import adventureSchema from '#spruce/schemas/adventure/v2022_09_09/adventure.schema'
import generateAdventureValues from '../__tests__/support/generateAdventureValues'

export default class AdventuresStore extends AbstractStore<
    FullSchema,
    CreateSchema,
    UpdateSchema,
    DatabaseSchema
> {
    public name = 'Adventures'
    protected collectionName = 'adventures'

    protected createSchema = createSchema
    protected updateSchema = updateSchema
    protected fullSchema = fullSchema
    protected databaseSchema = databaseSchema

    public static Store(
        options: AdventureStoreOptions & UniversalStoreOptions
    ) {
        return new this(options.db)
    }

    protected async willCreate(
        values: CreateAdventure
    ): Promise<Omit<DatabaseAdventure, 'id'>> {
        return { ...values, whosIn: [], whosOut: [] }
    }

    protected async willUpdate(values: UpdateAdventure) {
        return values as Partial<DatabaseAdventure>
    }

    protected async prepareRecord<
        IncludePrivateFields extends boolean,
        F extends SchemaFieldNames<FullSchema> = SchemaFieldNames<FullSchema>,
    >(
        record: DatabaseAdventure,
        _options?: PrepareOptions<IncludePrivateFields, FullSchema, F>
    ) {
        return record as PrepareResults<FullSchema, IncludePrivateFields>
    }

    public async seed(
        options: StoreSeedOptions,
        custom?: {
            shouldPostAsFakedPerson?: boolean
            shouldPostToGroup?: boolean
        }
    ) {
        const { totalToSeed, TestClass } = options
        const { shouldPostAsFakedPerson, shouldPostToGroup } = custom || {}

        let personId = null
        let groupId = null

        if (shouldPostAsFakedPerson) {
            personId = TestClass.fakedPerson?.id
        } else {
            personId = generateId()
        }

        if (shouldPostToGroup) {
            const groups = await TestClass.stores.getStore('groups')
            const all = await groups.find({})
            const match = all.pop()
            if (!match) {
                throw new Error(
                    `You must @seed('groups') before seeding an adventure posted to a group.`
                )
            }
            groupId = match.id
        }

        await Promise.all(
            new Array(totalToSeed).fill(0).map(async () => {
                const values = generateAdventureValues(
                    groupId ? { target: { groupId } } : {}
                )

                //@ts-ignore
                delete values.id
                //@ts-ignore
                delete values.whosIn
                //@ts-ignore
                delete values.whosOut

                if (personId) {
                    values.source.personId = personId
                }
                await this.createOne(values)
            })
        )
    }
}

// The structure of the data you'll be returning from finds
const fullSchema = adventureSchema

// The values you will accept when creating a record
const createSchema = buildSchema({
    id: 'createAdventure',
    fields: {
        ...dropFields(fullSchema.fields, ['id', 'whosIn', 'whosOut']),
    },
})

// The values you will accept when updating a record
const updateSchema = buildSchema({
    id: 'updateAdventure',
    fields: {
        ...makeFieldsOptional(dropFields(fullSchema.fields, ['id'])),
    },
})

// The values you will actually save to the databases (in this case, makes id required)
const databaseSchema = buildSchema({
    id: 'databaseAdventure',
    fields: {
        ...fullSchema.fields,
        id: {
            type: 'id',
            isRequired: true,
        },
    },
})

type FullSchema = typeof fullSchema
type CreateSchema = typeof createSchema
type UpdateSchema = typeof updateSchema
type DatabaseSchema = typeof databaseSchema

type Adventure = SchemaValues<FullSchema>
type CreateAdventure = SchemaValues<CreateSchema>
type UpdateAdventure = SchemaValues<UpdateSchema>
type DatabaseAdventure = SchemaValues<DatabaseSchema>
export type QueryAdventure = Partial<Adventure>

type AdventureStoreOptions = UniversalStoreOptions
