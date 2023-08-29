[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceUpdateRequest

# Class: ProductionPlansServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.ProductionPlansServiceUpdateRequest

## Hierarchy

- `Message`<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\>

  ↳ **`ProductionPlansServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceUpdateRequest.md#constructor)

### Properties

- [endDate](ProductionPlansServiceUpdateRequest.md#enddate)
- [endTime](ProductionPlansServiceUpdateRequest.md#endtime)
- [formData](ProductionPlansServiceUpdateRequest.md#formdata)
- [id](ProductionPlansServiceUpdateRequest.md#id)
- [notifyUsers](ProductionPlansServiceUpdateRequest.md#notifyusers)
- [projectId](ProductionPlansServiceUpdateRequest.md#projectid)
- [referenceId](ProductionPlansServiceUpdateRequest.md#referenceid)
- [startDate](ProductionPlansServiceUpdateRequest.md#startdate)
- [startTime](ProductionPlansServiceUpdateRequest.md#starttime)
- [supervisor](ProductionPlansServiceUpdateRequest.md#supervisor)
- [userComment](ProductionPlansServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ProductionPlansServiceUpdateRequest.md#vaultfolderid)
- [fields](ProductionPlansServiceUpdateRequest.md#fields)
- [runtime](ProductionPlansServiceUpdateRequest.md#runtime)
- [typeName](ProductionPlansServiceUpdateRequest.md#typename)

### Methods

- [clone](ProductionPlansServiceUpdateRequest.md#clone)
- [equals](ProductionPlansServiceUpdateRequest.md#equals)
- [fromBinary](ProductionPlansServiceUpdateRequest.md#frombinary)
- [fromJson](ProductionPlansServiceUpdateRequest.md#fromjson)
- [fromJsonString](ProductionPlansServiceUpdateRequest.md#fromjsonstring)
- [getType](ProductionPlansServiceUpdateRequest.md#gettype)
- [toBinary](ProductionPlansServiceUpdateRequest.md#tobinary)
- [toJSON](ProductionPlansServiceUpdateRequest.md#tojson)
- [toJson](ProductionPlansServiceUpdateRequest.md#tojson-1)
- [toJsonString](ProductionPlansServiceUpdateRequest.md#tojsonstring)
- [equals](ProductionPlansServiceUpdateRequest.md#equals-1)
- [fromBinary](ProductionPlansServiceUpdateRequest.md#frombinary-1)
- [fromJson](ProductionPlansServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;ProductionPlansServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L355)

## Properties

### endDate

• **endDate**: `string` = `""`

The end date of the plan

**`Generated`**

from field: string end_date = 18;

#### Defined in

[src/production_plans_pb.ts:339](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L339)

___

### endTime

• **endTime**: `string` = `""`

The end time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string end_time = 19;

#### Defined in

[src/production_plans_pb.ts:346](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L346)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/production_plans_pb.ts:353](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L353)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/production_plans_pb.ts:283](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L283)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/production_plans_pb.ts:290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L290)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 8;

#### Defined in

[src/production_plans_pb.ts:297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L297)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production plan

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/production_plans_pb.ts:311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L311)

___

### startDate

• **startDate**: `string` = `""`

The start date of the plan (in string)

**`Generated`**

from field: string start_date = 16;

#### Defined in

[src/production_plans_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L325)

___

### startTime

• **startTime**: `string` = `""`

The start time of the plan (in HH:MM:SS format)

**`Generated`**

from field: string start_time = 17;

#### Defined in

[src/production_plans_pb.ts:332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L332)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_plans_pb.ts:318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L318)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_plans_pb.ts:276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L276)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/production_plans_pb.ts:304](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L304)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L362)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:360](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L360)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServiceUpdateRequest"``

#### Defined in

[src/production_plans_pb.ts:361](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L361)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

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

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md) \| `PlainMessage`<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:389](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L389)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Defined in

[src/production_plans_pb.ts:377](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L377)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Defined in

[src/production_plans_pb.ts:381](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L381)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Defined in

[src/production_plans_pb.ts:385](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L385)
