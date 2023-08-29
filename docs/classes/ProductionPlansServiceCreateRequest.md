[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceCreateRequest

# Class: ProductionPlansServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.ProductionPlansServiceCreateRequest

## Hierarchy

- `Message`<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\>

  ↳ **`ProductionPlansServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceCreateRequest.md#constructor)

### Properties

- [endDate](ProductionPlansServiceCreateRequest.md#enddate)
- [endTime](ProductionPlansServiceCreateRequest.md#endtime)
- [entityUuid](ProductionPlansServiceCreateRequest.md#entityuuid)
- [formData](ProductionPlansServiceCreateRequest.md#formdata)
- [locationId](ProductionPlansServiceCreateRequest.md#locationid)
- [projectId](ProductionPlansServiceCreateRequest.md#projectid)
- [refFrom](ProductionPlansServiceCreateRequest.md#reffrom)
- [refId](ProductionPlansServiceCreateRequest.md#refid)
- [referenceId](ProductionPlansServiceCreateRequest.md#referenceid)
- [startDate](ProductionPlansServiceCreateRequest.md#startdate)
- [startTime](ProductionPlansServiceCreateRequest.md#starttime)
- [supervisor](ProductionPlansServiceCreateRequest.md#supervisor)
- [userComment](ProductionPlansServiceCreateRequest.md#usercomment)
- [vaultFolderId](ProductionPlansServiceCreateRequest.md#vaultfolderid)
- [fields](ProductionPlansServiceCreateRequest.md#fields)
- [runtime](ProductionPlansServiceCreateRequest.md#runtime)
- [typeName](ProductionPlansServiceCreateRequest.md#typename)

### Methods

- [clone](ProductionPlansServiceCreateRequest.md#clone)
- [equals](ProductionPlansServiceCreateRequest.md#equals)
- [fromBinary](ProductionPlansServiceCreateRequest.md#frombinary)
- [fromJson](ProductionPlansServiceCreateRequest.md#fromjson)
- [fromJsonString](ProductionPlansServiceCreateRequest.md#fromjsonstring)
- [getType](ProductionPlansServiceCreateRequest.md#gettype)
- [toBinary](ProductionPlansServiceCreateRequest.md#tobinary)
- [toJSON](ProductionPlansServiceCreateRequest.md#tojson)
- [toJson](ProductionPlansServiceCreateRequest.md#tojson-1)
- [toJsonString](ProductionPlansServiceCreateRequest.md#tojsonstring)
- [equals](ProductionPlansServiceCreateRequest.md#equals-1)
- [fromBinary](ProductionPlansServiceCreateRequest.md#frombinary-1)
- [fromJson](ProductionPlansServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\> |

#### Overrides

Message&lt;ProductionPlansServiceCreateRequest\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:223](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L223)

## Properties

### endDate

• **endDate**: `string` = `""`

The end date of the plan

**`Generated`**

from field: string end_date = 18;

#### Defined in

[src/production_plans_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L207)

___

### endTime

• **endTime**: `string` = `""`

The end time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string end_time = 19;

#### Defined in

[src/production_plans_pb.ts:214](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L214)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/production_plans_pb.ts:130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L130)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/production_plans_pb.ts:221](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L221)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 14;

#### Defined in

[src/production_plans_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L179)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 8;

#### Defined in

[src/production_plans_pb.ts:144](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L144)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/production_plans_pb.ts:165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L165)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/production_plans_pb.ts:172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L172)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production plan

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/production_plans_pb.ts:158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L158)

___

### startDate

• **startDate**: `string` = `""`

The start date of the plan (in string)

**`Generated`**

from field: string start_date = 16;

#### Defined in

[src/production_plans_pb.ts:193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L193)

___

### startTime

• **startTime**: `string` = `""`

The start time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string start_time = 17;

#### Defined in

[src/production_plans_pb.ts:200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L200)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_plans_pb.ts:186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L186)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/production_plans_pb.ts:137](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L137)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/production_plans_pb.ts:151](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L151)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:230](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L230)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:228](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L228)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServiceCreateRequest"``

#### Defined in

[src/production_plans_pb.ts:229](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L229)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:27

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:80

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:49

___

### toJSON

▸ `Protected` **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:74

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:54

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:58

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L259)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Defined in

[src/production_plans_pb.ts:247](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L247)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Defined in

[src/production_plans_pb.ts:251](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L251)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceCreateRequest`](ProductionPlansServiceCreateRequest.md)

#### Defined in

[src/production_plans_pb.ts:255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L255)
