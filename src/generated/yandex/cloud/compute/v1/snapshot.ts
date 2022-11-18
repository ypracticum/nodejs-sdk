/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.compute.v1";

/** A Snapshot resource. For more information, see [Snapshots](/docs/compute/concepts/snapshot). */
export interface Snapshot {
  $type: "yandex.cloud.compute.v1.Snapshot";
  /** ID of the snapshot. */
  id: string;
  /** ID of the folder that the snapshot belongs to. */
  folderId: string;
  createdAt?: Date;
  /** Name of the snapshot. 1-63 characters long. */
  name: string;
  /** Description of the snapshot. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** Size of the snapshot, specified in bytes. */
  storageSize: number;
  /** Size of the disk when the snapshot was created, specified in bytes. */
  diskSize: number;
  /**
   * License IDs that indicate which licenses are attached to this resource.
   * License IDs are used to calculate additional charges for the use of the virtual machine.
   *
   * The correct license ID is generated by the platform. IDs are inherited by new resources created from this resource.
   *
   * If you know the license IDs, specify them when you create the image.
   * For example, if you create a disk image using a third-party utility and load it into Object Storage, the license IDs will be lost.
   * You can specify them in the [yandex.cloud.compute.v1.ImageService.Create] request.
   */
  productIds: string[];
  /** Current status of the snapshot. */
  status: Snapshot_Status;
  /** ID of the source disk used to create this snapshot. */
  sourceDiskId: string;
}

export enum Snapshot_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - Snapshot is being created. */
  CREATING = 1,
  /** READY - Snapshot is ready to use. */
  READY = 2,
  /** ERROR - Snapshot encountered a problem and cannot operate. */
  ERROR = 3,
  /** DELETING - Snapshot is being deleted. */
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function snapshot_StatusFromJSON(object: any): Snapshot_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Snapshot_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Snapshot_Status.CREATING;
    case 2:
    case "READY":
      return Snapshot_Status.READY;
    case 3:
    case "ERROR":
      return Snapshot_Status.ERROR;
    case 4:
    case "DELETING":
      return Snapshot_Status.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Snapshot_Status.UNRECOGNIZED;
  }
}

export function snapshot_StatusToJSON(object: Snapshot_Status): string {
  switch (object) {
    case Snapshot_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Snapshot_Status.CREATING:
      return "CREATING";
    case Snapshot_Status.READY:
      return "READY";
    case Snapshot_Status.ERROR:
      return "ERROR";
    case Snapshot_Status.DELETING:
      return "DELETING";
    default:
      return "UNKNOWN";
  }
}

export interface Snapshot_LabelsEntry {
  $type: "yandex.cloud.compute.v1.Snapshot.LabelsEntry";
  key: string;
  value: string;
}

const baseSnapshot: object = {
  $type: "yandex.cloud.compute.v1.Snapshot",
  id: "",
  folderId: "",
  name: "",
  description: "",
  storageSize: 0,
  diskSize: 0,
  productIds: "",
  status: 0,
  sourceDiskId: "",
};

export const Snapshot = {
  $type: "yandex.cloud.compute.v1.Snapshot" as const,

  encode(
    message: Snapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Snapshot_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.Snapshot.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.storageSize !== 0) {
      writer.uint32(56).int64(message.storageSize);
    }
    if (message.diskSize !== 0) {
      writer.uint32(64).int64(message.diskSize);
    }
    for (const v of message.productIds) {
      writer.uint32(74).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.sourceDiskId !== "") {
      writer.uint32(90).string(message.sourceDiskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSnapshot } as Snapshot;
    message.labels = {};
    message.productIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = Snapshot_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.storageSize = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.diskSize = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.productIds.push(reader.string());
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.sourceDiskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Snapshot {
    const message = { ...baseSnapshot } as Snapshot;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.storageSize =
      object.storageSize !== undefined && object.storageSize !== null
        ? Number(object.storageSize)
        : 0;
    message.diskSize =
      object.diskSize !== undefined && object.diskSize !== null
        ? Number(object.diskSize)
        : 0;
    message.productIds = (object.productIds ?? []).map((e: any) => String(e));
    message.status =
      object.status !== undefined && object.status !== null
        ? snapshot_StatusFromJSON(object.status)
        : 0;
    message.sourceDiskId =
      object.sourceDiskId !== undefined && object.sourceDiskId !== null
        ? String(object.sourceDiskId)
        : "";
    return message;
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.storageSize !== undefined &&
      (obj.storageSize = Math.round(message.storageSize));
    message.diskSize !== undefined &&
      (obj.diskSize = Math.round(message.diskSize));
    if (message.productIds) {
      obj.productIds = message.productIds.map((e) => e);
    } else {
      obj.productIds = [];
    }
    message.status !== undefined &&
      (obj.status = snapshot_StatusToJSON(message.status));
    message.sourceDiskId !== undefined &&
      (obj.sourceDiskId = message.sourceDiskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
    const message = { ...baseSnapshot } as Snapshot;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.storageSize = object.storageSize ?? 0;
    message.diskSize = object.diskSize ?? 0;
    message.productIds = object.productIds?.map((e) => e) || [];
    message.status = object.status ?? 0;
    message.sourceDiskId = object.sourceDiskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Snapshot.$type, Snapshot);

const baseSnapshot_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.Snapshot.LabelsEntry",
  key: "",
  value: "",
};

export const Snapshot_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.Snapshot.LabelsEntry" as const,

  encode(
    message: Snapshot_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Snapshot_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSnapshot_LabelsEntry } as Snapshot_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Snapshot_LabelsEntry {
    const message = { ...baseSnapshot_LabelsEntry } as Snapshot_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Snapshot_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Snapshot_LabelsEntry>, I>>(
    object: I
  ): Snapshot_LabelsEntry {
    const message = { ...baseSnapshot_LabelsEntry } as Snapshot_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Snapshot_LabelsEntry.$type, Snapshot_LabelsEntry);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
