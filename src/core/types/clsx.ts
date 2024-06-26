export declare type ClassPropKey = "class" | "className";
export declare type ClassValue = string | null | undefined | ClassValue[];
export declare type ClassProp =
  | {
      class: ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className: ClassValue;
    }
  | {
      class?: never;
      className?: never;
    };
export declare type OmitUndefined<T> = T extends undefined ? never : T;
export declare type StringToBoolean<T> = T extends "true" | "false"
  ? boolean
  : T;
