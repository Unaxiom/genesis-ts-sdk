[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceCreateRequest

# Class: WorkOrdersServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.WorkOrdersServiceCreateRequest

## Hierarchy

- `Message`<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\>

  ↳ **`WorkOrdersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](WorkOrdersServiceCreateRequest.md#entityuuid)
- [formData](WorkOrdersServiceCreateRequest.md#formdata)
- [locationId](WorkOrdersServiceCreateRequest.md#locationid)
- [refFrom](WorkOrdersServiceCreateRequest.md#reffrom)
- [refId](WorkOrdersServiceCreateRequest.md#refid)
- [referenceId](WorkOrdersServiceCreateRequest.md#referenceid)
- [userComment](WorkOrdersServiceCreateRequest.md#usercomment)
- [vaultFolderId](WorkOrdersServiceCreateRequest.md#vaultfolderid)
- [fields](WorkOrdersServiceCreateRequest.md#fields)
- [runtime](WorkOrdersServiceCreateRequest.md#runtime)
- [typeName](WorkOrdersServiceCreateRequest.md#typename)

### Methods

- [clone](WorkOrdersServiceCreateRequest.md#clone)
- [equals](WorkOrdersServiceCreateRequest.md#equals)
- [fromBinary](WorkOrdersServiceCreateRequest.md#frombinary)
- [fromJson](WorkOrdersServiceCreateRequest.md#fromjson)
- [fromJsonString](WorkOrdersServiceCreateRequest.md#fromjsonstring)
- [getType](WorkOrdersServiceCreateRequest.md#gettype)
- [toBinary](WorkOrdersServiceCreateRequest.md#tobinary)
- [toJSON](WorkOrdersServiceCreateRequest.md#tojson)
- [toJson](WorkOrdersServiceCreateRequest.md#tojson-1)
- [toJsonString](WorkOrdersServiceCreateRequest.md#tojsonstring)
- [equals](WorkOrdersServiceCreateRequest.md#equals-1)
- [fromBinary](WorkOrdersServiceCreateRequest.md#frombinary-1)
- [fromJson](WorkOrdersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\> |

#### Overrides

Message&lt;WorkOrdersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L165)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/work_orders_pb.ts:114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L114)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/work_orders_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L163)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 14;

#### Defined in

[src/work_orders_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L156)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/work_orders_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L142)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/work_orders_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L149)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the work order

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/work_orders_pb.ts:135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L135)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/work_orders_pb.ts:121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L121)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/work_orders_pb.ts:128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L128)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L172)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L170)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrdersServiceCreateRequest"``

#### Defined in

[src/work_orders_pb.ts:171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L171)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

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

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L195)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Defined in

[src/work_orders_pb.ts:183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L183)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Defined in

[src/work_orders_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L187)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Defined in

[src/work_orders_pb.ts:191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L191)
