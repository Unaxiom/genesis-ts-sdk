[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceUpdateRequest

# Class: WorkOrdersServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.WorkOrdersServiceUpdateRequest

## Hierarchy

- `Message`<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\>

  ↳ **`WorkOrdersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceUpdateRequest.md#constructor)

### Properties

- [formData](WorkOrdersServiceUpdateRequest.md#formdata)
- [id](WorkOrdersServiceUpdateRequest.md#id)
- [notifyUsers](WorkOrdersServiceUpdateRequest.md#notifyusers)
- [referenceId](WorkOrdersServiceUpdateRequest.md#referenceid)
- [userComment](WorkOrdersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](WorkOrdersServiceUpdateRequest.md#vaultfolderid)
- [fields](WorkOrdersServiceUpdateRequest.md#fields)
- [runtime](WorkOrdersServiceUpdateRequest.md#runtime)
- [typeName](WorkOrdersServiceUpdateRequest.md#typename)

### Methods

- [clone](WorkOrdersServiceUpdateRequest.md#clone)
- [equals](WorkOrdersServiceUpdateRequest.md#equals)
- [fromBinary](WorkOrdersServiceUpdateRequest.md#frombinary)
- [fromJson](WorkOrdersServiceUpdateRequest.md#fromjson)
- [fromJsonString](WorkOrdersServiceUpdateRequest.md#fromjsonstring)
- [getType](WorkOrdersServiceUpdateRequest.md#gettype)
- [toBinary](WorkOrdersServiceUpdateRequest.md#tobinary)
- [toJSON](WorkOrdersServiceUpdateRequest.md#tojson)
- [toJson](WorkOrdersServiceUpdateRequest.md#tojson-1)
- [toJsonString](WorkOrdersServiceUpdateRequest.md#tojsonstring)
- [equals](WorkOrdersServiceUpdateRequest.md#equals-1)
- [fromBinary](WorkOrdersServiceUpdateRequest.md#frombinary-1)
- [fromJson](WorkOrdersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;WorkOrdersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:249](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L249)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/work_orders_pb.ts:247](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L247)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/work_orders_pb.ts:219](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L219)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/work_orders_pb.ts:226](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L226)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the work order

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/work_orders_pb.ts:240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L240)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/work_orders_pb.ts:212](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L212)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/work_orders_pb.ts:233](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L233)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:256](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L256)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L254)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrdersServiceUpdateRequest"``

#### Defined in

[src/work_orders_pb.ts:255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L255)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

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

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L277)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/work_orders_pb.ts:265](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L265)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/work_orders_pb.ts:269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L269)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/work_orders_pb.ts:273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L273)
