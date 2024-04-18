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
import connectionSchema from '#spruce/schemas/adventure/v2022_09_09/connection.schema'

// The structure of the data you'll be returning from finds
const fullSchema = connectionSchema

// The values you will accept when creating a record
const createSchema = buildSchema({
    id: 'createConnection',
    fields: {
        ...dropFields(fullSchema.fields, ['id']),
    },
})

// The values you will accept when updating a record
const updateSchema = buildSchema({
    id: 'updateConnection',
    fields: {
        ...makeFieldsOptional(dropFields(fullSchema.fields, ['id'])),
    },
})

// The values you will actually save to the databases (in this case, makes id required)
const databaseSchema = buildSchema({
    id: 'databaseConnection',
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

export type Connection = SchemaValues<FullSchema>
export type CreateConnection = SchemaValues<CreateSchema>
export type UpdateConnection = SchemaValues<UpdateSchema>
export type DatabaseConnection = SchemaValues<DatabaseSchema>
export type QueryConnection = Partial<Connection>

type ConnectionStoreOptions = UniversalStoreOptions

export default class ConnectionsStore extends AbstractStore<
    FullSchema,
    CreateSchema,
    UpdateSchema,
    DatabaseSchema
> {
    public name = 'Connections'
    protected collectionName = 'connections'

    protected createSchema = createSchema
    protected updateSchema = updateSchema
    protected fullSchema = fullSchema
    protected databaseSchema = databaseSchema

    public static Store(
        options: ConnectionStoreOptions & UniversalStoreOptions
    ) {
        return new this(options.db)
    }

    protected async willCreate(
        values: CreateConnection
    ): Promise<Omit<DatabaseConnection, 'id'>> {
        return values
    }

    protected async willUpdate(values: UpdateConnection) {
        return values as Partial<DatabaseConnection>
    }

    protected async prepareRecord<
        IncludePrivateFields extends boolean,
        F extends SchemaFieldNames<FullSchema> = SchemaFieldNames<FullSchema>,
    >(
        record: DatabaseConnection,
        _options?: PrepareOptions<IncludePrivateFields, FullSchema, F>
    ) {
        return record as PrepareResults<FullSchema, IncludePrivateFields>
    }
}
