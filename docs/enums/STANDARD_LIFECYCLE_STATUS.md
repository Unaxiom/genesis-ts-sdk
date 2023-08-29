[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / STANDARD\_LIFECYCLE\_STATUS

# Enumeration: STANDARD\_LIFECYCLE\_STATUS

Describes the standard lifecycle status of each record

**`Generated`**

from enum Genesis.STANDARD_LIFECYCLE_STATUS

## Table of contents

### Enumeration Members

- [ANY](STANDARD_LIFECYCLE_STATUS.md#any)
- [COMPLETED](STANDARD_LIFECYCLE_STATUS.md#completed)
- [DISCARDED](STANDARD_LIFECYCLE_STATUS.md#discarded)
- [DRAFT](STANDARD_LIFECYCLE_STATUS.md#draft)
- [HALTED](STANDARD_LIFECYCLE_STATUS.md#halted)
- [PREVERIFY\_UNSPECIFIED](STANDARD_LIFECYCLE_STATUS.md#preverify_unspecified)
- [REVISION](STANDARD_LIFECYCLE_STATUS.md#revision)
- [STANDING](STANDARD_LIFECYCLE_STATUS.md#standing)
- [VERIFIED](STANDARD_LIFECYCLE_STATUS.md#verified)

## Enumeration Members

### ANY

• **ANY** = ``10``

Use this only in filter and search queries so as to retrieve all the records regardless of the status that they are in

**`Generated`**

from enum value: ANY = 10;

#### Defined in

[src/base_pb.ts:104](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L104)

___

### COMPLETED

• **COMPLETED** = ``6``

The resource has been marked as completed

**`Generated`**

from enum value: COMPLETED = 6;

#### Defined in

[src/base_pb.ts:90](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L90)

___

### DISCARDED

• **DISCARDED** = ``7``

The resource has been discarded

**`Generated`**

from enum value: DISCARDED = 7;

#### Defined in

[src/base_pb.ts:97](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L97)

___

### DRAFT

• **DRAFT** = ``1``

The resource has been saved as a draft

**`Generated`**

from enum value: DRAFT = 1;

#### Defined in

[src/base_pb.ts:55](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L55)

___

### HALTED

• **HALTED** = ``5``

The resource has been halted

**`Generated`**

from enum value: HALTED = 5;

#### Defined in

[src/base_pb.ts:83](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L83)

___

### PREVERIFY\_UNSPECIFIED

• **PREVERIFY\_UNSPECIFIED** = ``0``

The resource has just been created, and has been sent for verification

**`Generated`**

from enum value: PREVERIFY_UNSPECIFIED = 0;

#### Defined in

[src/base_pb.ts:48](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L48)

___

### REVISION

• **REVISION** = ``4``

The resource has been sent for revision

**`Generated`**

from enum value: REVISION = 4;

#### Defined in

[src/base_pb.ts:76](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L76)

___

### STANDING

• **STANDING** = ``3``

The resource has been approved

**`Generated`**

from enum value: STANDING = 3;

#### Defined in

[src/base_pb.ts:69](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L69)

___

### VERIFIED

• **VERIFIED** = ``2``

The resource has been verified

**`Generated`**

from enum value: VERIFIED = 2;

#### Defined in

[src/base_pb.ts:62](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/base_pb.ts#L62)
