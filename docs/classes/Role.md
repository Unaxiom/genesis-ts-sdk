[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Role

# Class: Role

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Role

## Hierarchy

- `Message`<[`Role`](Role.md)\>

  ↳ **`Role`**

## Table of contents

### Constructors

- [constructor](Role.md#constructor)

### Properties

- [accessList](Role.md#accesslist)
- [approvalMetadata](Role.md#approvalmetadata)
- [code](Role.md#code)
- [completedOn](Role.md#completedon)
- [description](Role.md#description)
- [entityUuid](Role.md#entityuuid)
- [httpAccess](Role.md#httpaccess)
- [httpsAccess](Role.md#httpsaccess)
- [logs](Role.md#logs)
- [metadata](Role.md#metadata)
- [name](Role.md#name)
- [status](Role.md#status)
- [vaultAccess](Role.md#vaultaccess)
- [vaultRootFolderInteractions](Role.md#vaultrootfolderinteractions)
- [fields](Role.md#fields)
- [runtime](Role.md#runtime)
- [typeName](Role.md#typename)

### Methods

- [clone](Role.md#clone)
- [equals](Role.md#equals)
- [fromBinary](Role.md#frombinary)
- [fromJson](Role.md#fromjson)
- [fromJsonString](Role.md#fromjsonstring)
- [getType](Role.md#gettype)
- [toBinary](Role.md#tobinary)
- [toJSON](Role.md#tojson)
- [toJson](Role.md#tojson-1)
- [toJsonString](Role.md#tojsonstring)
- [equals](Role.md#equals-1)
- [fromBinary](Role.md#frombinary-1)
- [fromJson](Role.md#fromjson-1)
- [fromJsonString](Role.md#fromjsonstring-1)

## Constructors

### constructor

• **new Role**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Role`](Role.md)\> |

#### Overrides

Message&lt;Role\&gt;.constructor

#### Defined in

[src/roles_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L434)

## Properties

### accessList

• **accessList**: [`RoleAccess`](RoleAccess.md)[] = `[]`

The list of associated role accesses

**`Generated`**

from field: repeated Genesis.RoleAccess access_list = 20;

#### Defined in

[src/roles_pb.ts:432](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L432)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/roles_pb.ts:355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L355)

___

### code

• **code**: `string` = `""`

The code of the role

**`Generated`**

from field: string code = 11;

#### Defined in

[src/roles_pb.ts:390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L390)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this role was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/roles_pb.ts:376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L376)

___

### description

• **description**: `string` = `""`

The description of the role

**`Generated`**

from field: string description = 12;

#### Defined in

[src/roles_pb.ts:397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L397)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/roles_pb.ts:341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L341)

___

### httpAccess

• **httpAccess**: `boolean` = `false`

Stores if the role has access via HTTP (or within local network)

**`Generated`**

from field: bool http_access = 15;

#### Defined in

[src/roles_pb.ts:418](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L418)

___

### httpsAccess

• **httpsAccess**: `boolean` = `false`

Stores if the role has access via HTTPS (or through a public FQDN)

**`Generated`**

from field: bool https_access = 16;

#### Defined in

[src/roles_pb.ts:425](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L425)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this role

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/roles_pb.ts:369](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L369)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this role

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/roles_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L348)

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 10;

#### Defined in

[src/roles_pb.ts:383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L383)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this role

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/roles_pb.ts:362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L362)

___

### vaultAccess

• **vaultAccess**: `boolean` = `false`

Stores if this role has access to Vault

**`Generated`**

from field: bool vault_access = 13;

#### Defined in

[src/roles_pb.ts:404](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L404)

___

### vaultRootFolderInteractions

• **vaultRootFolderInteractions**: `boolean` = `false`

Stores if the role has access to perform operations on the root folder in Vault

**`Generated`**

from field: bool vault_root_folder_interactions = 14;

#### Defined in

[src/roles_pb.ts:411](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L411)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:441](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L441)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L439)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Role"``

#### Defined in

[src/roles_pb.ts:440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L440)

## Methods

### clone

▸ **clone**(): [`Role`](Role.md)

Create a deep copy.

#### Returns

[`Role`](Role.md)

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
| `other` | `undefined` \| ``null`` \| [`Role`](Role.md) \| `PlainMessage`<[`Role`](Role.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Role`](Role.md)

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

[`Role`](Role.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Role`](Role.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Role`](Role.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Role`](Role.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Role`](Role.md)\>

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
| `a` | `undefined` \| [`Role`](Role.md) \| `PlainMessage`<[`Role`](Role.md)\> |
| `b` | `undefined` \| [`Role`](Role.md) \| `PlainMessage`<[`Role`](Role.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:470](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L470)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles_pb.ts:458](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L458)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles_pb.ts:462](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L462)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Role`](Role.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Role`](Role.md)

#### Defined in

[src/roles_pb.ts:466](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L466)
