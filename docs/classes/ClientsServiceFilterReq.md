[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceFilterReq

# Class: ClientsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.ClientsServiceFilterReq

## Hierarchy

- `Message`<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\>

  ↳ **`ClientsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ClientsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ClientsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ClientsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ClientsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ClientsServiceFilterReq.md#approverroleid)
- [code](ClientsServiceFilterReq.md#code)
- [count](ClientsServiceFilterReq.md#count)
- [creationTimestampEnd](ClientsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ClientsServiceFilterReq.md#creationtimestampstart)
- [email](ClientsServiceFilterReq.md#email)
- [entityUuid](ClientsServiceFilterReq.md#entityuuid)
- [isActive](ClientsServiceFilterReq.md#isactive)
- [name](ClientsServiceFilterReq.md#name)
- [offset](ClientsServiceFilterReq.md#offset)
- [phone](ClientsServiceFilterReq.md#phone)
- [sortKey](ClientsServiceFilterReq.md#sortkey)
- [sortOrder](ClientsServiceFilterReq.md#sortorder)
- [status](ClientsServiceFilterReq.md#status)
- [fields](ClientsServiceFilterReq.md#fields)
- [runtime](ClientsServiceFilterReq.md#runtime)
- [typeName](ClientsServiceFilterReq.md#typename)

### Methods

- [clone](ClientsServiceFilterReq.md#clone)
- [equals](ClientsServiceFilterReq.md#equals)
- [fromBinary](ClientsServiceFilterReq.md#frombinary)
- [fromJson](ClientsServiceFilterReq.md#fromjson)
- [fromJsonString](ClientsServiceFilterReq.md#fromjsonstring)
- [getType](ClientsServiceFilterReq.md#gettype)
- [toBinary](ClientsServiceFilterReq.md#tobinary)
- [toJSON](ClientsServiceFilterReq.md#tojson)
- [toJson](ClientsServiceFilterReq.md#tojson-1)
- [toJsonString](ClientsServiceFilterReq.md#tojsonstring)
- [equals](ClientsServiceFilterReq.md#equals-1)
- [fromBinary](ClientsServiceFilterReq.md#frombinary-1)
- [fromJson](ClientsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ClientsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\> |

#### Overrides

Message&lt;ClientsServiceFilterReq\&gt;.constructor

#### Defined in

[src/clients_pb.ts:826](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L826)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/clients_pb.ts:789](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L789)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/clients_pb.ts:782](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L782)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/clients_pb.ts:775](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L775)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/clients_pb.ts:796](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L796)

___

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/clients_pb.ts:810](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L810)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/clients_pb.ts:719](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L719)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/clients_pb.ts:754](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L754)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/clients_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L747)

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 22;

#### Defined in

[src/clients_pb.ts:817](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L817)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/clients_pb.ts:761](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L761)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/clients_pb.ts:712](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L712)

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 20;

#### Defined in

[src/clients_pb.ts:803](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L803)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/clients_pb.ts:726](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L726)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 23;

#### Defined in

[src/clients_pb.ts:824](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L824)

___

### sortKey

• **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md) = `CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

[src/clients_pb.ts:740](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L740)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/clients_pb.ts:733](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L733)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this client

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/clients_pb.ts:768](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L768)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients_pb.ts:833](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L833)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients_pb.ts:831](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L831)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ClientsServiceFilterReq"``

#### Defined in

[src/clients_pb.ts:832](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L832)

## Methods

### clone

▸ **clone**(): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md) \| `PlainMessage`<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

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

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md) \| `PlainMessage`<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md) \| `PlainMessage`<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients_pb.ts:865](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L865)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Defined in

[src/clients_pb.ts:853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L853)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Defined in

[src/clients_pb.ts:857](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L857)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Defined in

[src/clients_pb.ts:861](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/clients_pb.ts#L861)
