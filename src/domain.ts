/**
 * Starter-only domain contracts for House Memory.
 * No capture, alignment, persistence, or validation behavior is implemented.
 */

export type DistanceUnit = "m" | "ft";
export type ConfidenceLabel = "high" | "medium" | "low" | "unverified";

/** Room-local coordinates: x/y follow the room plan and z is height. */
export interface RoomPoint {
  x: number;
  y: number;
  z: number;
}

export interface Room {
  id: string;
  projectId: string;
  name: string;
  unit: DistanceUnit;
  outline: RoomPoint[];
}

export interface Scan {
  id: string;
  roomId: string;
  capturedAt: string;
  sourceMediaIds: string[];
  coordinateFrameId?: string;
  alignment: "anchored" | "unverified";
}

export interface Anchor {
  id: string;
  scanId: string;
  label: string;
  position: RoomPoint;
  confidence: ConfidenceLabel;
  measurementSource: "tape" | "user-marked" | "unknown";
  sourceMediaId?: string;
}

export type ObservationKind = "pipe" | "wire" | "shutoff" | "material" | "other";

export interface Observation {
  id: string;
  scanId: string;
  kind: ObservationKind;
  note: string;
  position: RoomPoint;
  sourceMediaId: string;
  observedAt: string;
  confidence: ConfidenceLabel;
}
