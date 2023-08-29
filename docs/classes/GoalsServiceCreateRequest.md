[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceCreateRequest

# Class: GoalsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.GoalsServiceCreateRequest

## Hierarchy

- `Message`<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\>

  ↳ **`GoalsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoalsServiceCreateRequest.md#constructor)

### Properties

- [description](GoalsServiceCreateRequest.md#description)
- [endDate](GoalsServiceCreateRequest.md#enddate)
- [entityUuid](GoalsServiceCreateRequest.md#entityuuid)
- [formData](GoalsServiceCreateRequest.md#formdata)
- [referenceId](GoalsServiceCreateRequest.md#referenceid)
- [startDate](GoalsServiceCreateRequest.md#startdate)
- [userComment](GoalsServiceCreateRequest.md#usercomment)
- [userId](GoalsServiceCreateRequest.md#userid)
- [vaultFolderId](GoalsServiceCreateRequest.md#vaultfolderid)
- [fields](GoalsServiceCreateRequest.md#fields)
- [runtime](GoalsServiceCreateRequest.md#runtime)
- [typeName](GoalsServiceCreateRequest.md#typename)

### Methods

- [clone](GoalsServiceCreateRequest.md#clone)
- [equals](GoalsServiceCreateRequest.md#equals)
- [fromBinary](GoalsServiceCreateRequest.md#frombinary)
- [fromJson](GoalsServiceCreateRequest.md#fromjson)
- [fromJsonString](GoalsServiceCreateRequest.md#fromjsonstring)
- [getType](GoalsServiceCreateRequest.md#gettype)
- [toBinary](GoalsServiceCreateRequest.md#tobinary)
- [toJSON](GoalsServiceCreateRequest.md#tojson)
- [toJson](GoalsServiceCreateRequest.md#tojson-1)
- [toJsonString](GoalsServiceCreateRequest.md#tojsonstring)
- [equals](GoalsServiceCreateRequest.md#equals-1)
- [fromBinary](GoalsServiceCreateRequest.md#frombinary-1)
- [fromJson](GoalsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](GoalsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;GoalsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/goals_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L207)

## Properties

### description

• **description**: `string` = `""`

The description of the goal

**`Generated`**

from field: string description = 20;

#### Defined in

[src/goals_pb.ts:198](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L198)

___

### endDate

• **endDate**: `string` = `""`

The date until which the goal remains into force

**`Generated`**

from field: string end_date = 14;

#### Defined in

[src/goals_pb.ts:191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L191)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/goals_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L149)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/goals_pb.ts:205](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L205)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goal

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/goals_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L170)

___

### startDate

• **startDate**: `string` = `""`

The date from which the goal comes into force

**`Generated`**

from field: string start_date = 13;

#### Defined in

[src/goals_pb.ts:184](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L184)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/goals_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L156)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: int64 user_id = 12;

#### Defined in

[src/goals_pb.ts:177](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L177)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/goals_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L163)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:214](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L214)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:212](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L212)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalsServiceCreateRequest"``

#### Defined in

[src/goals_pb.ts:213](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L213)

## Methods

### clone

▸ **clone**(): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md) \| `PlainMessage`<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

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

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md) \| `PlainMessage`<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md) \| `PlainMessage`<[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L238)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Defined in

[src/goals_pb.ts:226](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L226)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Defined in

[src/goals_pb.ts:230](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L230)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceCreateRequest`](GoalsServiceCreateRequest.md)

#### Defined in

[src/goals_pb.ts:234](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L234)
