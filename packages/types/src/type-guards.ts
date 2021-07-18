/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IPost } from "./types";

/**
 * Check whether a given value is an array where
 * each member is of a specified type
 *
 * @param arr - array to check
 * @param check - type guard to use when evaluating each item
 * @public
 */
export function isTypedArray<T>(
  arr: unknown,
  check: (x: any) => x is T
): arr is T[] {
  if (!Array.isArray(arr)) return false;
  const mismatch = arr.filter((item) => !check(item));
  if (mismatch.length > 0) return false;
  return true;
}

/**
 * Check whether a given value is an {@link @shlack/types#IChannel}
 * @param arg - value to check
 * @beta
 */
export function isPost(arg: any): arg is IPost {
  return (
    typeof arg.title === "string" &&
    typeof arg.description === "string" &&
    typeof arg.id === "string"
  );
}
