import {
    AbstractStore,
    UniversalStoreOptions,
    PrepareOptions,
    PrepareResults,
    generateId,
} from '@sprucelabs/data-stores'
import {
    buildSchema,
    dropFields,
    makeFieldsOptional,
    SchemaValues,
    SchemaFieldNames,
} from '@sprucelabs/schema'
import { StoreSeedOptions } from '@sprucelabs/spruce-test-fixtures'
import groupSchema from '#spruce/schemas/adventure/v2022_09_09/group.schema'

export default class GroupsStore extends AbstractStore<
    FullSchema,
    CreateSchema,
    UpdateSchema,
    DatabaseSchema
> {
    public name = 'Groups'
    protected collectionName = 'groups'

    protected createSchema = createSchema
    protected updateSchema = updateSchema
    protected fullSchema = fullSchema
    protected databaseSchema = databaseSchema

    public static Store(options: GroupStoreOptions & UniversalStoreOptions) {
        return new this(options.db)
    }

    protected async willCreate(
        values: CreateGroup
    ): Promise<Omit<DatabaseGroup, 'id'>> {
        return values
    }

    protected async willUpdate(values: UpdateGroup) {
        return values as Partial<DatabaseGroup>
    }

    protected async prepareRecord<
        IncludePrivateFields extends boolean,
        F extends SchemaFieldNames<FullSchema> = SchemaFieldNames<FullSchema>,
    >(
        record: DatabaseGroup,
        _options?: PrepareOptions<IncludePrivateFields, FullSchema, F>
    ) {
        return record as PrepareResults<FullSchema, IncludePrivateFields>
    }

    public async seed(
        options: StoreSeedOptions,
        custom?: {
            shouldCreateAsFakedPerson?: boolean
            shouldAddFakedPersonAsMember?: boolean
        }
    ) {
        const { TestClass, totalToSeed } = options
        const {
            shouldCreateAsFakedPerson = true,
            shouldAddFakedPersonAsMember = false,
        } = custom ?? {}

        const fakedPersonId = TestClass.fakedPerson.id

        await Promise.all(
            Array.from({ length: totalToSeed }).map(async () => {
                await this.createOne({
                    title: generateId(),
                    people: shouldAddFakedPersonAsMember ? [fakedPersonId] : [],
                    description: generateId(),
                    source: {
                        personId: shouldCreateAsFakedPerson
                            ? fakedPersonId
                            : generateId(),
                    },
                })
            })
        )
    }
}

// The structure of the data you'll be returning from finds
const fullSchema = groupSchema

// The values you will accept when creating a record
const createSchema = buildSchema({
    id: 'createGroup',
    fields: {
        ...dropFields(fullSchema.fields, ['id']),
    },
})

// The values you will accept when updating a record
const updateSchema = buildSchema({
    id: 'updateGroup',
    fields: {
        ...makeFieldsOptional(dropFields(fullSchema.fields, ['id'])),
    },
})

// The values you will actually save to the databases (in this case, makes id required)
const databaseSchema = buildSchema({
    id: 'databaseGroup',
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

// type Group = SchemaValues<FullSchema>
type CreateGroup = SchemaValues<CreateSchema>
export type UpdateGroup = SchemaValues<UpdateSchema>
type DatabaseGroup = SchemaValues<DatabaseSchema>
// type QueryGroup = Partial<Group>

type GroupStoreOptions = UniversalStoreOptions
