[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceUpdateRequest

# Class: StockIssuancesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.StockIssuancesServiceUpdateRequest

## Hierarchy

- `Message`<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\>

  ↳ **`StockIssuancesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceUpdateRequest.md#constructor)

### Properties

- [formData](StockIssuancesServiceUpdateRequest.md#formdata)
- [id](StockIssuancesServiceUpdateRequest.md#id)
- [notifyUsers](StockIssuancesServiceUpdateRequest.md#notifyusers)
- [referenceId](StockIssuancesServiceUpdateRequest.md#referenceid)
- [userComment](StockIssuancesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](StockIssuancesServiceUpdateRequest.md#vaultfolderid)
- [fields](StockIssuancesServiceUpdateRequest.md#fields)
- [runtime](StockIssuancesServiceUpdateRequest.md#runtime)
- [typeName](StockIssuancesServiceUpdateRequest.md#typename)

### Methods

- [clone](StockIssuancesServiceUpdateRequest.md#clone)
- [equals](StockIssuancesServiceUpdateRequest.md#equals)
- [fromBinary](StockIssuancesServiceUpdateRequest.md#frombinary)
- [fromJson](StockIssuancesServiceUpdateRequest.md#fromjson)
- [fromJsonString](StockIssuancesServiceUpdateRequest.md#fromjsonstring)
- [getType](StockIssuancesServiceUpdateRequest.md#gettype)
- [toBinary](StockIssuancesServiceUpdateRequest.md#tobinary)
- [toJSON](StockIssuancesServiceUpdateRequest.md#tojson)
- [toJson](StockIssuancesServiceUpdateRequest.md#tojson-1)
- [toJsonString](StockIssuancesServiceUpdateRequest.md#tojsonstring)
- [equals](StockIssuancesServiceUpdateRequest.md#equals-1)
- [fromBinary](StockIssuancesServiceUpdateRequest.md#frombinary-1)
- [fromJson](StockIssuancesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;StockIssuancesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:233](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L233)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/stock_issuances_pb.ts:231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L231)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/stock_issuances_pb.ts:203](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L203)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/stock_issuances_pb.ts:210](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L210)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock issuance

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_issuances_pb.ts:224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L224)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/stock_issuances_pb.ts:196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L196)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/stock_issuances_pb.ts:217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L217)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L240)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L238)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuancesServiceUpdateRequest"``

#### Defined in

[src/stock_issuances_pb.ts:239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L239)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

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

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md) \| `PlainMessage`<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L261)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:249](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L249)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:253](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L253)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:257](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L257)
