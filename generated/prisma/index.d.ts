
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_tb
 * 
 */
export type user_tb = $Result.DefaultSelection<Prisma.$user_tbPayload>
/**
 * Model travel_tb
 * 
 */
export type travel_tb = $Result.DefaultSelection<Prisma.$travel_tbPayload>
/**
 * Model comment
 * 
 */
export type comment = $Result.DefaultSelection<Prisma.$commentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_tbs
 * const user_tbs = await prisma.user_tb.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_tbs
   * const user_tbs = await prisma.user_tb.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_tb`: Exposes CRUD operations for the **user_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tbs
    * const user_tbs = await prisma.user_tb.findMany()
    * ```
    */
  get user_tb(): Prisma.user_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travel_tb`: Exposes CRUD operations for the **travel_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Travel_tbs
    * const travel_tbs = await prisma.travel_tb.findMany()
    * ```
    */
  get travel_tb(): Prisma.travel_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.commentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_tb: 'user_tb',
    travel_tb: 'travel_tb',
    comment: 'comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_tb" | "travel_tb" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_tb: {
        payload: Prisma.$user_tbPayload<ExtArgs>
        fields: Prisma.user_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findFirst: {
            args: Prisma.user_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findMany: {
            args: Prisma.user_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>[]
          }
          create: {
            args: Prisma.user_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          createMany: {
            args: Prisma.user_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          update: {
            args: Prisma.user_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          deleteMany: {
            args: Prisma.user_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          aggregate: {
            args: Prisma.User_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tb>
          }
          groupBy: {
            args: Prisma.user_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tbCountArgs<ExtArgs>
            result: $Utils.Optional<User_tbCountAggregateOutputType> | number
          }
        }
      }
      travel_tb: {
        payload: Prisma.$travel_tbPayload<ExtArgs>
        fields: Prisma.travel_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.travel_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.travel_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload>
          }
          findFirst: {
            args: Prisma.travel_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.travel_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload>
          }
          findMany: {
            args: Prisma.travel_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload>[]
          }
          create: {
            args: Prisma.travel_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload>
          }
          createMany: {
            args: Prisma.travel_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.travel_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload>
          }
          update: {
            args: Prisma.travel_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload>
          }
          deleteMany: {
            args: Prisma.travel_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.travel_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.travel_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_tbPayload>
          }
          aggregate: {
            args: Prisma.Travel_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravel_tb>
          }
          groupBy: {
            args: Prisma.travel_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Travel_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.travel_tbCountArgs<ExtArgs>
            result: $Utils.Optional<Travel_tbCountAggregateOutputType> | number
          }
        }
      }
      comment: {
        payload: Prisma.$commentPayload<ExtArgs>
        fields: Prisma.commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findFirst: {
            args: Prisma.commentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findMany: {
            args: Prisma.commentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>[]
          }
          create: {
            args: Prisma.commentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          createMany: {
            args: Prisma.commentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          update: {
            args: Prisma.commentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          deleteMany: {
            args: Prisma.commentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.commentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_tb?: user_tbOmit
    travel_tb?: travel_tbOmit
    comment?: commentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type User_tbCountOutputType
   */

  export type User_tbCountOutputType = {
    travels: number
    comments: number
  }

  export type User_tbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travels?: boolean | User_tbCountOutputTypeCountTravelsArgs
    comments?: boolean | User_tbCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * User_tbCountOutputType without action
   */
  export type User_tbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_tbCountOutputType
     */
    select?: User_tbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_tbCountOutputType without action
   */
  export type User_tbCountOutputTypeCountTravelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: travel_tbWhereInput
  }

  /**
   * User_tbCountOutputType without action
   */
  export type User_tbCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }


  /**
   * Count Type Travel_tbCountOutputType
   */

  export type Travel_tbCountOutputType = {
    comments: number
  }

  export type Travel_tbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Travel_tbCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * Travel_tbCountOutputType without action
   */
  export type Travel_tbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel_tbCountOutputType
     */
    select?: Travel_tbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Travel_tbCountOutputType without action
   */
  export type Travel_tbCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_tb
   */

  export type AggregateUser_tb = {
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  export type User_tbAvgAggregateOutputType = {
    userId: number | null
  }

  export type User_tbSumAggregateOutputType = {
    userId: number | null
  }

  export type User_tbMinAggregateOutputType = {
    userId: number | null
    userName: string | null
    userEmail: string | null
    userPassword: string | null
    userImage: string | null
  }

  export type User_tbMaxAggregateOutputType = {
    userId: number | null
    userName: string | null
    userEmail: string | null
    userPassword: string | null
    userImage: string | null
  }

  export type User_tbCountAggregateOutputType = {
    userId: number
    userName: number
    userEmail: number
    userPassword: number
    userImage: number
    _all: number
  }


  export type User_tbAvgAggregateInputType = {
    userId?: true
  }

  export type User_tbSumAggregateInputType = {
    userId?: true
  }

  export type User_tbMinAggregateInputType = {
    userId?: true
    userName?: true
    userEmail?: true
    userPassword?: true
    userImage?: true
  }

  export type User_tbMaxAggregateInputType = {
    userId?: true
    userName?: true
    userEmail?: true
    userPassword?: true
    userImage?: true
  }

  export type User_tbCountAggregateInputType = {
    userId?: true
    userName?: true
    userEmail?: true
    userPassword?: true
    userImage?: true
    _all?: true
  }

  export type User_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tb to aggregate.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tbs
    **/
    _count?: true | User_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tbMaxAggregateInputType
  }

  export type GetUser_tbAggregateType<T extends User_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tb[P]>
      : GetScalarType<T[P], AggregateUser_tb[P]>
  }




  export type user_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tbWhereInput
    orderBy?: user_tbOrderByWithAggregationInput | user_tbOrderByWithAggregationInput[]
    by: User_tbScalarFieldEnum[] | User_tbScalarFieldEnum
    having?: user_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tbCountAggregateInputType | true
    _avg?: User_tbAvgAggregateInputType
    _sum?: User_tbSumAggregateInputType
    _min?: User_tbMinAggregateInputType
    _max?: User_tbMaxAggregateInputType
  }

  export type User_tbGroupByOutputType = {
    userId: number
    userName: string
    userEmail: string
    userPassword: string
    userImage: string | null
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  type GetUser_tbGroupByPayload<T extends user_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tbGroupByOutputType[P]>
            : GetScalarType<T[P], User_tbGroupByOutputType[P]>
        }
      >
    >


  export type user_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    userEmail?: boolean
    userPassword?: boolean
    userImage?: boolean
    travels?: boolean | user_tb$travelsArgs<ExtArgs>
    comments?: boolean | user_tb$commentsArgs<ExtArgs>
    _count?: boolean | User_tbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_tb"]>



  export type user_tbSelectScalar = {
    userId?: boolean
    userName?: boolean
    userEmail?: boolean
    userPassword?: boolean
    userImage?: boolean
  }

  export type user_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userName" | "userEmail" | "userPassword" | "userImage", ExtArgs["result"]["user_tb"]>
  export type user_tbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travels?: boolean | user_tb$travelsArgs<ExtArgs>
    comments?: boolean | user_tb$commentsArgs<ExtArgs>
    _count?: boolean | User_tbCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $user_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tb"
    objects: {
      travels: Prisma.$travel_tbPayload<ExtArgs>[]
      comments: Prisma.$commentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userName: string
      userEmail: string
      userPassword: string
      userImage: string | null
    }, ExtArgs["result"]["user_tb"]>
    composites: {}
  }

  type user_tbGetPayload<S extends boolean | null | undefined | user_tbDefaultArgs> = $Result.GetResult<Prisma.$user_tbPayload, S>

  type user_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tbCountAggregateInputType | true
    }

  export interface user_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tb'], meta: { name: 'user_tb' } }
    /**
     * Find zero or one User_tb that matches the filter.
     * @param {user_tbFindUniqueArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tbFindUniqueArgs>(args: SelectSubset<T, user_tbFindUniqueArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tbFindUniqueOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tbFindFirstArgs>(args?: SelectSubset<T, user_tbFindFirstArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tbs
     * const user_tbs = await prisma.user_tb.findMany()
     * 
     * // Get first 10 User_tbs
     * const user_tbs = await prisma.user_tb.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const user_tbWithUserIdOnly = await prisma.user_tb.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends user_tbFindManyArgs>(args?: SelectSubset<T, user_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_tb.
     * @param {user_tbCreateArgs} args - Arguments to create a User_tb.
     * @example
     * // Create one User_tb
     * const User_tb = await prisma.user_tb.create({
     *   data: {
     *     // ... data to create a User_tb
     *   }
     * })
     * 
     */
    create<T extends user_tbCreateArgs>(args: SelectSubset<T, user_tbCreateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tbs.
     * @param {user_tbCreateManyArgs} args - Arguments to create many User_tbs.
     * @example
     * // Create many User_tbs
     * const user_tb = await prisma.user_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tbCreateManyArgs>(args?: SelectSubset<T, user_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_tb.
     * @param {user_tbDeleteArgs} args - Arguments to delete one User_tb.
     * @example
     * // Delete one User_tb
     * const User_tb = await prisma.user_tb.delete({
     *   where: {
     *     // ... filter to delete one User_tb
     *   }
     * })
     * 
     */
    delete<T extends user_tbDeleteArgs>(args: SelectSubset<T, user_tbDeleteArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_tb.
     * @param {user_tbUpdateArgs} args - Arguments to update one User_tb.
     * @example
     * // Update one User_tb
     * const user_tb = await prisma.user_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tbUpdateArgs>(args: SelectSubset<T, user_tbUpdateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tbs.
     * @param {user_tbDeleteManyArgs} args - Arguments to filter User_tbs to delete.
     * @example
     * // Delete a few User_tbs
     * const { count } = await prisma.user_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tbDeleteManyArgs>(args?: SelectSubset<T, user_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tbs
     * const user_tb = await prisma.user_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tbUpdateManyArgs>(args: SelectSubset<T, user_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tb.
     * @param {user_tbUpsertArgs} args - Arguments to update or create a User_tb.
     * @example
     * // Update or create a User_tb
     * const user_tb = await prisma.user_tb.upsert({
     *   create: {
     *     // ... data to create a User_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tb we want to update
     *   }
     * })
     */
    upsert<T extends user_tbUpsertArgs>(args: SelectSubset<T, user_tbUpsertArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbCountArgs} args - Arguments to filter User_tbs to count.
     * @example
     * // Count the number of User_tbs
     * const count = await prisma.user_tb.count({
     *   where: {
     *     // ... the filter for the User_tbs we want to count
     *   }
     * })
    **/
    count<T extends user_tbCountArgs>(
      args?: Subset<T, user_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tbAggregateArgs>(args: Subset<T, User_tbAggregateArgs>): Prisma.PrismaPromise<GetUser_tbAggregateType<T>>

    /**
     * Group by User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tbGroupByArgs['orderBy'] }
        : { orderBy?: user_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tb model
   */
  readonly fields: user_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    travels<T extends user_tb$travelsArgs<ExtArgs> = {}>(args?: Subset<T, user_tb$travelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends user_tb$commentsArgs<ExtArgs> = {}>(args?: Subset<T, user_tb$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_tb model
   */
  interface user_tbFieldRefs {
    readonly userId: FieldRef<"user_tb", 'Int'>
    readonly userName: FieldRef<"user_tb", 'String'>
    readonly userEmail: FieldRef<"user_tb", 'String'>
    readonly userPassword: FieldRef<"user_tb", 'String'>
    readonly userImage: FieldRef<"user_tb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_tb findUnique
   */
  export type user_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findUniqueOrThrow
   */
  export type user_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findFirst
   */
  export type user_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findFirstOrThrow
   */
  export type user_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findMany
   */
  export type user_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tbs to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb create
   */
  export type user_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * The data needed to create a user_tb.
     */
    data: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
  }

  /**
   * user_tb createMany
   */
  export type user_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tbs.
     */
    data: user_tbCreateManyInput | user_tbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_tb update
   */
  export type user_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * The data needed to update a user_tb.
     */
    data: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
    /**
     * Choose, which user_tb to update.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb updateMany
   */
  export type user_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tbs.
     */
    data: XOR<user_tbUpdateManyMutationInput, user_tbUncheckedUpdateManyInput>
    /**
     * Filter which user_tbs to update
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to update.
     */
    limit?: number
  }

  /**
   * user_tb upsert
   */
  export type user_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * The filter to search for the user_tb to update in case it exists.
     */
    where: user_tbWhereUniqueInput
    /**
     * In case the user_tb found by the `where` argument doesn't exist, create a new user_tb with this data.
     */
    create: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
    /**
     * In case the user_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
  }

  /**
   * user_tb delete
   */
  export type user_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter which user_tb to delete.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb deleteMany
   */
  export type user_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tbs to delete
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to delete.
     */
    limit?: number
  }

  /**
   * user_tb.travels
   */
  export type user_tb$travelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    where?: travel_tbWhereInput
    orderBy?: travel_tbOrderByWithRelationInput | travel_tbOrderByWithRelationInput[]
    cursor?: travel_tbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Travel_tbScalarFieldEnum | Travel_tbScalarFieldEnum[]
  }

  /**
   * user_tb.comments
   */
  export type user_tb$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * user_tb without action
   */
  export type user_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
  }


  /**
   * Model travel_tb
   */

  export type AggregateTravel_tb = {
    _count: Travel_tbCountAggregateOutputType | null
    _avg: Travel_tbAvgAggregateOutputType | null
    _sum: Travel_tbSumAggregateOutputType | null
    _min: Travel_tbMinAggregateOutputType | null
    _max: Travel_tbMaxAggregateOutputType | null
  }

  export type Travel_tbAvgAggregateOutputType = {
    travelId: number | null
    userId: number | null
  }

  export type Travel_tbSumAggregateOutputType = {
    travelId: number | null
    userId: number | null
  }

  export type Travel_tbMinAggregateOutputType = {
    travelId: number | null
    userId: number | null
    travelPlace: string | null
    travelLocation: string | null
    travelImage: string | null
  }

  export type Travel_tbMaxAggregateOutputType = {
    travelId: number | null
    userId: number | null
    travelPlace: string | null
    travelLocation: string | null
    travelImage: string | null
  }

  export type Travel_tbCountAggregateOutputType = {
    travelId: number
    userId: number
    travelPlace: number
    travelLocation: number
    travelImage: number
    _all: number
  }


  export type Travel_tbAvgAggregateInputType = {
    travelId?: true
    userId?: true
  }

  export type Travel_tbSumAggregateInputType = {
    travelId?: true
    userId?: true
  }

  export type Travel_tbMinAggregateInputType = {
    travelId?: true
    userId?: true
    travelPlace?: true
    travelLocation?: true
    travelImage?: true
  }

  export type Travel_tbMaxAggregateInputType = {
    travelId?: true
    userId?: true
    travelPlace?: true
    travelLocation?: true
    travelImage?: true
  }

  export type Travel_tbCountAggregateInputType = {
    travelId?: true
    userId?: true
    travelPlace?: true
    travelLocation?: true
    travelImage?: true
    _all?: true
  }

  export type Travel_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which travel_tb to aggregate.
     */
    where?: travel_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of travel_tbs to fetch.
     */
    orderBy?: travel_tbOrderByWithRelationInput | travel_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: travel_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` travel_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` travel_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned travel_tbs
    **/
    _count?: true | Travel_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Travel_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Travel_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Travel_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Travel_tbMaxAggregateInputType
  }

  export type GetTravel_tbAggregateType<T extends Travel_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateTravel_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel_tb[P]>
      : GetScalarType<T[P], AggregateTravel_tb[P]>
  }




  export type travel_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: travel_tbWhereInput
    orderBy?: travel_tbOrderByWithAggregationInput | travel_tbOrderByWithAggregationInput[]
    by: Travel_tbScalarFieldEnum[] | Travel_tbScalarFieldEnum
    having?: travel_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Travel_tbCountAggregateInputType | true
    _avg?: Travel_tbAvgAggregateInputType
    _sum?: Travel_tbSumAggregateInputType
    _min?: Travel_tbMinAggregateInputType
    _max?: Travel_tbMaxAggregateInputType
  }

  export type Travel_tbGroupByOutputType = {
    travelId: number
    userId: number
    travelPlace: string
    travelLocation: string
    travelImage: string
    _count: Travel_tbCountAggregateOutputType | null
    _avg: Travel_tbAvgAggregateOutputType | null
    _sum: Travel_tbSumAggregateOutputType | null
    _min: Travel_tbMinAggregateOutputType | null
    _max: Travel_tbMaxAggregateOutputType | null
  }

  type GetTravel_tbGroupByPayload<T extends travel_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Travel_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Travel_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Travel_tbGroupByOutputType[P]>
            : GetScalarType<T[P], Travel_tbGroupByOutputType[P]>
        }
      >
    >


  export type travel_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    travelId?: boolean
    userId?: boolean
    travelPlace?: boolean
    travelLocation?: boolean
    travelImage?: boolean
    user?: boolean | user_tbDefaultArgs<ExtArgs>
    comments?: boolean | travel_tb$commentsArgs<ExtArgs>
    _count?: boolean | Travel_tbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel_tb"]>



  export type travel_tbSelectScalar = {
    travelId?: boolean
    userId?: boolean
    travelPlace?: boolean
    travelLocation?: boolean
    travelImage?: boolean
  }

  export type travel_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"travelId" | "userId" | "travelPlace" | "travelLocation" | "travelImage", ExtArgs["result"]["travel_tb"]>
  export type travel_tbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_tbDefaultArgs<ExtArgs>
    comments?: boolean | travel_tb$commentsArgs<ExtArgs>
    _count?: boolean | Travel_tbCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $travel_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "travel_tb"
    objects: {
      user: Prisma.$user_tbPayload<ExtArgs>
      comments: Prisma.$commentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      travelId: number
      userId: number
      travelPlace: string
      travelLocation: string
      travelImage: string
    }, ExtArgs["result"]["travel_tb"]>
    composites: {}
  }

  type travel_tbGetPayload<S extends boolean | null | undefined | travel_tbDefaultArgs> = $Result.GetResult<Prisma.$travel_tbPayload, S>

  type travel_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<travel_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Travel_tbCountAggregateInputType | true
    }

  export interface travel_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['travel_tb'], meta: { name: 'travel_tb' } }
    /**
     * Find zero or one Travel_tb that matches the filter.
     * @param {travel_tbFindUniqueArgs} args - Arguments to find a Travel_tb
     * @example
     * // Get one Travel_tb
     * const travel_tb = await prisma.travel_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends travel_tbFindUniqueArgs>(args: SelectSubset<T, travel_tbFindUniqueArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Travel_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {travel_tbFindUniqueOrThrowArgs} args - Arguments to find a Travel_tb
     * @example
     * // Get one Travel_tb
     * const travel_tb = await prisma.travel_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends travel_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, travel_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_tbFindFirstArgs} args - Arguments to find a Travel_tb
     * @example
     * // Get one Travel_tb
     * const travel_tb = await prisma.travel_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends travel_tbFindFirstArgs>(args?: SelectSubset<T, travel_tbFindFirstArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_tbFindFirstOrThrowArgs} args - Arguments to find a Travel_tb
     * @example
     * // Get one Travel_tb
     * const travel_tb = await prisma.travel_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends travel_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, travel_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Travel_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travel_tbs
     * const travel_tbs = await prisma.travel_tb.findMany()
     * 
     * // Get first 10 Travel_tbs
     * const travel_tbs = await prisma.travel_tb.findMany({ take: 10 })
     * 
     * // Only select the `travelId`
     * const travel_tbWithTravelIdOnly = await prisma.travel_tb.findMany({ select: { travelId: true } })
     * 
     */
    findMany<T extends travel_tbFindManyArgs>(args?: SelectSubset<T, travel_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Travel_tb.
     * @param {travel_tbCreateArgs} args - Arguments to create a Travel_tb.
     * @example
     * // Create one Travel_tb
     * const Travel_tb = await prisma.travel_tb.create({
     *   data: {
     *     // ... data to create a Travel_tb
     *   }
     * })
     * 
     */
    create<T extends travel_tbCreateArgs>(args: SelectSubset<T, travel_tbCreateArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Travel_tbs.
     * @param {travel_tbCreateManyArgs} args - Arguments to create many Travel_tbs.
     * @example
     * // Create many Travel_tbs
     * const travel_tb = await prisma.travel_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends travel_tbCreateManyArgs>(args?: SelectSubset<T, travel_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Travel_tb.
     * @param {travel_tbDeleteArgs} args - Arguments to delete one Travel_tb.
     * @example
     * // Delete one Travel_tb
     * const Travel_tb = await prisma.travel_tb.delete({
     *   where: {
     *     // ... filter to delete one Travel_tb
     *   }
     * })
     * 
     */
    delete<T extends travel_tbDeleteArgs>(args: SelectSubset<T, travel_tbDeleteArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Travel_tb.
     * @param {travel_tbUpdateArgs} args - Arguments to update one Travel_tb.
     * @example
     * // Update one Travel_tb
     * const travel_tb = await prisma.travel_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends travel_tbUpdateArgs>(args: SelectSubset<T, travel_tbUpdateArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Travel_tbs.
     * @param {travel_tbDeleteManyArgs} args - Arguments to filter Travel_tbs to delete.
     * @example
     * // Delete a few Travel_tbs
     * const { count } = await prisma.travel_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends travel_tbDeleteManyArgs>(args?: SelectSubset<T, travel_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travel_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travel_tbs
     * const travel_tb = await prisma.travel_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends travel_tbUpdateManyArgs>(args: SelectSubset<T, travel_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Travel_tb.
     * @param {travel_tbUpsertArgs} args - Arguments to update or create a Travel_tb.
     * @example
     * // Update or create a Travel_tb
     * const travel_tb = await prisma.travel_tb.upsert({
     *   create: {
     *     // ... data to create a Travel_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel_tb we want to update
     *   }
     * })
     */
    upsert<T extends travel_tbUpsertArgs>(args: SelectSubset<T, travel_tbUpsertArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Travel_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_tbCountArgs} args - Arguments to filter Travel_tbs to count.
     * @example
     * // Count the number of Travel_tbs
     * const count = await prisma.travel_tb.count({
     *   where: {
     *     // ... the filter for the Travel_tbs we want to count
     *   }
     * })
    **/
    count<T extends travel_tbCountArgs>(
      args?: Subset<T, travel_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Travel_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Travel_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Travel_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Travel_tbAggregateArgs>(args: Subset<T, Travel_tbAggregateArgs>): Prisma.PrismaPromise<GetTravel_tbAggregateType<T>>

    /**
     * Group by Travel_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends travel_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: travel_tbGroupByArgs['orderBy'] }
        : { orderBy?: travel_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, travel_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravel_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the travel_tb model
   */
  readonly fields: travel_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for travel_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__travel_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user_tbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_tbDefaultArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends travel_tb$commentsArgs<ExtArgs> = {}>(args?: Subset<T, travel_tb$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the travel_tb model
   */
  interface travel_tbFieldRefs {
    readonly travelId: FieldRef<"travel_tb", 'Int'>
    readonly userId: FieldRef<"travel_tb", 'Int'>
    readonly travelPlace: FieldRef<"travel_tb", 'String'>
    readonly travelLocation: FieldRef<"travel_tb", 'String'>
    readonly travelImage: FieldRef<"travel_tb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * travel_tb findUnique
   */
  export type travel_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * Filter, which travel_tb to fetch.
     */
    where: travel_tbWhereUniqueInput
  }

  /**
   * travel_tb findUniqueOrThrow
   */
  export type travel_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * Filter, which travel_tb to fetch.
     */
    where: travel_tbWhereUniqueInput
  }

  /**
   * travel_tb findFirst
   */
  export type travel_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * Filter, which travel_tb to fetch.
     */
    where?: travel_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of travel_tbs to fetch.
     */
    orderBy?: travel_tbOrderByWithRelationInput | travel_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for travel_tbs.
     */
    cursor?: travel_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` travel_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` travel_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of travel_tbs.
     */
    distinct?: Travel_tbScalarFieldEnum | Travel_tbScalarFieldEnum[]
  }

  /**
   * travel_tb findFirstOrThrow
   */
  export type travel_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * Filter, which travel_tb to fetch.
     */
    where?: travel_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of travel_tbs to fetch.
     */
    orderBy?: travel_tbOrderByWithRelationInput | travel_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for travel_tbs.
     */
    cursor?: travel_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` travel_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` travel_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of travel_tbs.
     */
    distinct?: Travel_tbScalarFieldEnum | Travel_tbScalarFieldEnum[]
  }

  /**
   * travel_tb findMany
   */
  export type travel_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * Filter, which travel_tbs to fetch.
     */
    where?: travel_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of travel_tbs to fetch.
     */
    orderBy?: travel_tbOrderByWithRelationInput | travel_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing travel_tbs.
     */
    cursor?: travel_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` travel_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` travel_tbs.
     */
    skip?: number
    distinct?: Travel_tbScalarFieldEnum | Travel_tbScalarFieldEnum[]
  }

  /**
   * travel_tb create
   */
  export type travel_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * The data needed to create a travel_tb.
     */
    data: XOR<travel_tbCreateInput, travel_tbUncheckedCreateInput>
  }

  /**
   * travel_tb createMany
   */
  export type travel_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many travel_tbs.
     */
    data: travel_tbCreateManyInput | travel_tbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * travel_tb update
   */
  export type travel_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * The data needed to update a travel_tb.
     */
    data: XOR<travel_tbUpdateInput, travel_tbUncheckedUpdateInput>
    /**
     * Choose, which travel_tb to update.
     */
    where: travel_tbWhereUniqueInput
  }

  /**
   * travel_tb updateMany
   */
  export type travel_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update travel_tbs.
     */
    data: XOR<travel_tbUpdateManyMutationInput, travel_tbUncheckedUpdateManyInput>
    /**
     * Filter which travel_tbs to update
     */
    where?: travel_tbWhereInput
    /**
     * Limit how many travel_tbs to update.
     */
    limit?: number
  }

  /**
   * travel_tb upsert
   */
  export type travel_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * The filter to search for the travel_tb to update in case it exists.
     */
    where: travel_tbWhereUniqueInput
    /**
     * In case the travel_tb found by the `where` argument doesn't exist, create a new travel_tb with this data.
     */
    create: XOR<travel_tbCreateInput, travel_tbUncheckedCreateInput>
    /**
     * In case the travel_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<travel_tbUpdateInput, travel_tbUncheckedUpdateInput>
  }

  /**
   * travel_tb delete
   */
  export type travel_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
    /**
     * Filter which travel_tb to delete.
     */
    where: travel_tbWhereUniqueInput
  }

  /**
   * travel_tb deleteMany
   */
  export type travel_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which travel_tbs to delete
     */
    where?: travel_tbWhereInput
    /**
     * Limit how many travel_tbs to delete.
     */
    limit?: number
  }

  /**
   * travel_tb.comments
   */
  export type travel_tb$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * travel_tb without action
   */
  export type travel_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_tb
     */
    select?: travel_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_tb
     */
    omit?: travel_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: travel_tbInclude<ExtArgs> | null
  }


  /**
   * Model comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    travelId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    travelId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    travelId: number | null
    content: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    travelId: number | null
    content: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    travelId: number
    content: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    userId?: true
    travelId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    userId?: true
    travelId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    travelId?: true
    content?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    travelId?: true
    content?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    travelId?: true
    content?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment to aggregate.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
    orderBy?: commentOrderByWithAggregationInput | commentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    userId: number
    travelId: number
    content: string
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    travelId?: boolean
    content?: boolean
    user?: boolean | user_tbDefaultArgs<ExtArgs>
    travel?: boolean | travel_tbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type commentSelectScalar = {
    id?: boolean
    userId?: boolean
    travelId?: boolean
    content?: boolean
  }

  export type commentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "travelId" | "content", ExtArgs["result"]["comment"]>
  export type commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_tbDefaultArgs<ExtArgs>
    travel?: boolean | travel_tbDefaultArgs<ExtArgs>
  }

  export type $commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment"
    objects: {
      user: Prisma.$user_tbPayload<ExtArgs>
      travel: Prisma.$travel_tbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      travelId: number
      content: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type commentGetPayload<S extends boolean | null | undefined | commentDefaultArgs> = $Result.GetResult<Prisma.$commentPayload, S>

  type commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment'], meta: { name: 'comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {commentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentFindUniqueArgs>(args: SelectSubset<T, commentFindUniqueArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentFindUniqueOrThrowArgs>(args: SelectSubset<T, commentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentFindFirstArgs>(args?: SelectSubset<T, commentFindFirstArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentFindFirstOrThrowArgs>(args?: SelectSubset<T, commentFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentFindManyArgs>(args?: SelectSubset<T, commentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {commentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends commentCreateArgs>(args: SelectSubset<T, commentCreateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentCreateManyArgs>(args?: SelectSubset<T, commentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {commentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends commentDeleteArgs>(args: SelectSubset<T, commentDeleteArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {commentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentUpdateArgs>(args: SelectSubset<T, commentUpdateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentDeleteManyArgs>(args?: SelectSubset<T, commentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentUpdateManyArgs>(args: SelectSubset<T, commentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {commentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends commentUpsertArgs>(args: SelectSubset<T, commentUpsertArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentCountArgs>(
      args?: Subset<T, commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentGroupByArgs['orderBy'] }
        : { orderBy?: commentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment model
   */
  readonly fields: commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user_tbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_tbDefaultArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    travel<T extends travel_tbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, travel_tbDefaultArgs<ExtArgs>>): Prisma__travel_tbClient<$Result.GetResult<Prisma.$travel_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comment model
   */
  interface commentFieldRefs {
    readonly id: FieldRef<"comment", 'Int'>
    readonly userId: FieldRef<"comment", 'Int'>
    readonly travelId: FieldRef<"comment", 'Int'>
    readonly content: FieldRef<"comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comment findUnique
   */
  export type commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findUniqueOrThrow
   */
  export type commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findFirst
   */
  export type commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findFirstOrThrow
   */
  export type commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findMany
   */
  export type commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment create
   */
  export type commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to create a comment.
     */
    data: XOR<commentCreateInput, commentUncheckedCreateInput>
  }

  /**
   * comment createMany
   */
  export type commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentCreateManyInput | commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment update
   */
  export type commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to update a comment.
     */
    data: XOR<commentUpdateInput, commentUncheckedUpdateInput>
    /**
     * Choose, which comment to update.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment updateMany
   */
  export type commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comment upsert
   */
  export type commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The filter to search for the comment to update in case it exists.
     */
    where: commentWhereUniqueInput
    /**
     * In case the comment found by the `where` argument doesn't exist, create a new comment with this data.
     */
    create: XOR<commentCreateInput, commentUncheckedCreateInput>
    /**
     * In case the comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentUpdateInput, commentUncheckedUpdateInput>
  }

  /**
   * comment delete
   */
  export type commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter which comment to delete.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment deleteMany
   */
  export type commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comment without action
   */
  export type commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_tbScalarFieldEnum: {
    userId: 'userId',
    userName: 'userName',
    userEmail: 'userEmail',
    userPassword: 'userPassword',
    userImage: 'userImage'
  };

  export type User_tbScalarFieldEnum = (typeof User_tbScalarFieldEnum)[keyof typeof User_tbScalarFieldEnum]


  export const Travel_tbScalarFieldEnum: {
    travelId: 'travelId',
    userId: 'userId',
    travelPlace: 'travelPlace',
    travelLocation: 'travelLocation',
    travelImage: 'travelImage'
  };

  export type Travel_tbScalarFieldEnum = (typeof Travel_tbScalarFieldEnum)[keyof typeof Travel_tbScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    travelId: 'travelId',
    content: 'content'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const user_tbOrderByRelevanceFieldEnum: {
    userName: 'userName',
    userEmail: 'userEmail',
    userPassword: 'userPassword',
    userImage: 'userImage'
  };

  export type user_tbOrderByRelevanceFieldEnum = (typeof user_tbOrderByRelevanceFieldEnum)[keyof typeof user_tbOrderByRelevanceFieldEnum]


  export const travel_tbOrderByRelevanceFieldEnum: {
    travelPlace: 'travelPlace',
    travelLocation: 'travelLocation',
    travelImage: 'travelImage'
  };

  export type travel_tbOrderByRelevanceFieldEnum = (typeof travel_tbOrderByRelevanceFieldEnum)[keyof typeof travel_tbOrderByRelevanceFieldEnum]


  export const commentOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type commentOrderByRelevanceFieldEnum = (typeof commentOrderByRelevanceFieldEnum)[keyof typeof commentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type user_tbWhereInput = {
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userId?: IntFilter<"user_tb"> | number
    userName?: StringFilter<"user_tb"> | string
    userEmail?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    userImage?: StringNullableFilter<"user_tb"> | string | null
    travels?: Travel_tbListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type user_tbOrderByWithRelationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrderInput | SortOrder
    travels?: travel_tbOrderByRelationAggregateInput
    comments?: commentOrderByRelationAggregateInput
    _relevance?: user_tbOrderByRelevanceInput
  }

  export type user_tbWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    userEmail?: string
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userName?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    userImage?: StringNullableFilter<"user_tb"> | string | null
    travels?: Travel_tbListRelationFilter
    comments?: CommentListRelationFilter
  }, "userId" | "userEmail">

  export type user_tbOrderByWithAggregationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrderInput | SortOrder
    _count?: user_tbCountOrderByAggregateInput
    _avg?: user_tbAvgOrderByAggregateInput
    _max?: user_tbMaxOrderByAggregateInput
    _min?: user_tbMinOrderByAggregateInput
    _sum?: user_tbSumOrderByAggregateInput
  }

  export type user_tbScalarWhereWithAggregatesInput = {
    AND?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    OR?: user_tbScalarWhereWithAggregatesInput[]
    NOT?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"user_tb"> | number
    userName?: StringWithAggregatesFilter<"user_tb"> | string
    userEmail?: StringWithAggregatesFilter<"user_tb"> | string
    userPassword?: StringWithAggregatesFilter<"user_tb"> | string
    userImage?: StringNullableWithAggregatesFilter<"user_tb"> | string | null
  }

  export type travel_tbWhereInput = {
    AND?: travel_tbWhereInput | travel_tbWhereInput[]
    OR?: travel_tbWhereInput[]
    NOT?: travel_tbWhereInput | travel_tbWhereInput[]
    travelId?: IntFilter<"travel_tb"> | number
    userId?: IntFilter<"travel_tb"> | number
    travelPlace?: StringFilter<"travel_tb"> | string
    travelLocation?: StringFilter<"travel_tb"> | string
    travelImage?: StringFilter<"travel_tb"> | string
    user?: XOR<User_tbScalarRelationFilter, user_tbWhereInput>
    comments?: CommentListRelationFilter
  }

  export type travel_tbOrderByWithRelationInput = {
    travelId?: SortOrder
    userId?: SortOrder
    travelPlace?: SortOrder
    travelLocation?: SortOrder
    travelImage?: SortOrder
    user?: user_tbOrderByWithRelationInput
    comments?: commentOrderByRelationAggregateInput
    _relevance?: travel_tbOrderByRelevanceInput
  }

  export type travel_tbWhereUniqueInput = Prisma.AtLeast<{
    travelId?: number
    AND?: travel_tbWhereInput | travel_tbWhereInput[]
    OR?: travel_tbWhereInput[]
    NOT?: travel_tbWhereInput | travel_tbWhereInput[]
    userId?: IntFilter<"travel_tb"> | number
    travelPlace?: StringFilter<"travel_tb"> | string
    travelLocation?: StringFilter<"travel_tb"> | string
    travelImage?: StringFilter<"travel_tb"> | string
    user?: XOR<User_tbScalarRelationFilter, user_tbWhereInput>
    comments?: CommentListRelationFilter
  }, "travelId">

  export type travel_tbOrderByWithAggregationInput = {
    travelId?: SortOrder
    userId?: SortOrder
    travelPlace?: SortOrder
    travelLocation?: SortOrder
    travelImage?: SortOrder
    _count?: travel_tbCountOrderByAggregateInput
    _avg?: travel_tbAvgOrderByAggregateInput
    _max?: travel_tbMaxOrderByAggregateInput
    _min?: travel_tbMinOrderByAggregateInput
    _sum?: travel_tbSumOrderByAggregateInput
  }

  export type travel_tbScalarWhereWithAggregatesInput = {
    AND?: travel_tbScalarWhereWithAggregatesInput | travel_tbScalarWhereWithAggregatesInput[]
    OR?: travel_tbScalarWhereWithAggregatesInput[]
    NOT?: travel_tbScalarWhereWithAggregatesInput | travel_tbScalarWhereWithAggregatesInput[]
    travelId?: IntWithAggregatesFilter<"travel_tb"> | number
    userId?: IntWithAggregatesFilter<"travel_tb"> | number
    travelPlace?: StringWithAggregatesFilter<"travel_tb"> | string
    travelLocation?: StringWithAggregatesFilter<"travel_tb"> | string
    travelImage?: StringWithAggregatesFilter<"travel_tb"> | string
  }

  export type commentWhereInput = {
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    id?: IntFilter<"comment"> | number
    userId?: IntFilter<"comment"> | number
    travelId?: IntFilter<"comment"> | number
    content?: StringFilter<"comment"> | string
    user?: XOR<User_tbScalarRelationFilter, user_tbWhereInput>
    travel?: XOR<Travel_tbScalarRelationFilter, travel_tbWhereInput>
  }

  export type commentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    content?: SortOrder
    user?: user_tbOrderByWithRelationInput
    travel?: travel_tbOrderByWithRelationInput
    _relevance?: commentOrderByRelevanceInput
  }

  export type commentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    userId?: IntFilter<"comment"> | number
    travelId?: IntFilter<"comment"> | number
    content?: StringFilter<"comment"> | string
    user?: XOR<User_tbScalarRelationFilter, user_tbWhereInput>
    travel?: XOR<Travel_tbScalarRelationFilter, travel_tbWhereInput>
  }, "id">

  export type commentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    content?: SortOrder
    _count?: commentCountOrderByAggregateInput
    _avg?: commentAvgOrderByAggregateInput
    _max?: commentMaxOrderByAggregateInput
    _min?: commentMinOrderByAggregateInput
    _sum?: commentSumOrderByAggregateInput
  }

  export type commentScalarWhereWithAggregatesInput = {
    AND?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    OR?: commentScalarWhereWithAggregatesInput[]
    NOT?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comment"> | number
    userId?: IntWithAggregatesFilter<"comment"> | number
    travelId?: IntWithAggregatesFilter<"comment"> | number
    content?: StringWithAggregatesFilter<"comment"> | string
  }

  export type user_tbCreateInput = {
    userName: string
    userEmail: string
    userPassword: string
    userImage?: string | null
    travels?: travel_tbCreateNestedManyWithoutUserInput
    comments?: commentCreateNestedManyWithoutUserInput
  }

  export type user_tbUncheckedCreateInput = {
    userId?: number
    userName: string
    userEmail: string
    userPassword: string
    userImage?: string | null
    travels?: travel_tbUncheckedCreateNestedManyWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type user_tbUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    travels?: travel_tbUpdateManyWithoutUserNestedInput
    comments?: commentUpdateManyWithoutUserNestedInput
  }

  export type user_tbUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    travels?: travel_tbUncheckedUpdateManyWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_tbCreateManyInput = {
    userId?: number
    userName: string
    userEmail: string
    userPassword: string
    userImage?: string | null
  }

  export type user_tbUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_tbUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type travel_tbCreateInput = {
    travelPlace: string
    travelLocation: string
    travelImage: string
    user: user_tbCreateNestedOneWithoutTravelsInput
    comments?: commentCreateNestedManyWithoutTravelInput
  }

  export type travel_tbUncheckedCreateInput = {
    travelId?: number
    userId: number
    travelPlace: string
    travelLocation: string
    travelImage: string
    comments?: commentUncheckedCreateNestedManyWithoutTravelInput
  }

  export type travel_tbUpdateInput = {
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
    user?: user_tbUpdateOneRequiredWithoutTravelsNestedInput
    comments?: commentUpdateManyWithoutTravelNestedInput
  }

  export type travel_tbUncheckedUpdateInput = {
    travelId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type travel_tbCreateManyInput = {
    travelId?: number
    userId: number
    travelPlace: string
    travelLocation: string
    travelImage: string
  }

  export type travel_tbUpdateManyMutationInput = {
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
  }

  export type travel_tbUncheckedUpdateManyInput = {
    travelId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateInput = {
    content: string
    user: user_tbCreateNestedOneWithoutCommentsInput
    travel: travel_tbCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateInput = {
    id?: number
    userId: number
    travelId: number
    content: string
  }

  export type commentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: user_tbUpdateOneRequiredWithoutCommentsNestedInput
    travel?: travel_tbUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    travelId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateManyInput = {
    id?: number
    userId: number
    travelId: number
    content: string
  }

  export type commentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type commentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    travelId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Travel_tbListRelationFilter = {
    every?: travel_tbWhereInput
    some?: travel_tbWhereInput
    none?: travel_tbWhereInput
  }

  export type CommentListRelationFilter = {
    every?: commentWhereInput
    some?: commentWhereInput
    none?: commentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type travel_tbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_tbOrderByRelevanceInput = {
    fields: user_tbOrderByRelevanceFieldEnum | user_tbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_tbCountOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type user_tbMaxOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbMinOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type User_tbScalarRelationFilter = {
    is?: user_tbWhereInput
    isNot?: user_tbWhereInput
  }

  export type travel_tbOrderByRelevanceInput = {
    fields: travel_tbOrderByRelevanceFieldEnum | travel_tbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type travel_tbCountOrderByAggregateInput = {
    travelId?: SortOrder
    userId?: SortOrder
    travelPlace?: SortOrder
    travelLocation?: SortOrder
    travelImage?: SortOrder
  }

  export type travel_tbAvgOrderByAggregateInput = {
    travelId?: SortOrder
    userId?: SortOrder
  }

  export type travel_tbMaxOrderByAggregateInput = {
    travelId?: SortOrder
    userId?: SortOrder
    travelPlace?: SortOrder
    travelLocation?: SortOrder
    travelImage?: SortOrder
  }

  export type travel_tbMinOrderByAggregateInput = {
    travelId?: SortOrder
    userId?: SortOrder
    travelPlace?: SortOrder
    travelLocation?: SortOrder
    travelImage?: SortOrder
  }

  export type travel_tbSumOrderByAggregateInput = {
    travelId?: SortOrder
    userId?: SortOrder
  }

  export type Travel_tbScalarRelationFilter = {
    is?: travel_tbWhereInput
    isNot?: travel_tbWhereInput
  }

  export type commentOrderByRelevanceInput = {
    fields: commentOrderByRelevanceFieldEnum | commentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    content?: SortOrder
  }

  export type commentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
  }

  export type commentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    content?: SortOrder
  }

  export type commentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    content?: SortOrder
  }

  export type commentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
  }

  export type travel_tbCreateNestedManyWithoutUserInput = {
    create?: XOR<travel_tbCreateWithoutUserInput, travel_tbUncheckedCreateWithoutUserInput> | travel_tbCreateWithoutUserInput[] | travel_tbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: travel_tbCreateOrConnectWithoutUserInput | travel_tbCreateOrConnectWithoutUserInput[]
    createMany?: travel_tbCreateManyUserInputEnvelope
    connect?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
  }

  export type commentCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type travel_tbUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<travel_tbCreateWithoutUserInput, travel_tbUncheckedCreateWithoutUserInput> | travel_tbCreateWithoutUserInput[] | travel_tbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: travel_tbCreateOrConnectWithoutUserInput | travel_tbCreateOrConnectWithoutUserInput[]
    createMany?: travel_tbCreateManyUserInputEnvelope
    connect?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type travel_tbUpdateManyWithoutUserNestedInput = {
    create?: XOR<travel_tbCreateWithoutUserInput, travel_tbUncheckedCreateWithoutUserInput> | travel_tbCreateWithoutUserInput[] | travel_tbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: travel_tbCreateOrConnectWithoutUserInput | travel_tbCreateOrConnectWithoutUserInput[]
    upsert?: travel_tbUpsertWithWhereUniqueWithoutUserInput | travel_tbUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: travel_tbCreateManyUserInputEnvelope
    set?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
    disconnect?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
    delete?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
    connect?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
    update?: travel_tbUpdateWithWhereUniqueWithoutUserInput | travel_tbUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: travel_tbUpdateManyWithWhereWithoutUserInput | travel_tbUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: travel_tbScalarWhereInput | travel_tbScalarWhereInput[]
  }

  export type commentUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type travel_tbUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<travel_tbCreateWithoutUserInput, travel_tbUncheckedCreateWithoutUserInput> | travel_tbCreateWithoutUserInput[] | travel_tbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: travel_tbCreateOrConnectWithoutUserInput | travel_tbCreateOrConnectWithoutUserInput[]
    upsert?: travel_tbUpsertWithWhereUniqueWithoutUserInput | travel_tbUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: travel_tbCreateManyUserInputEnvelope
    set?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
    disconnect?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
    delete?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
    connect?: travel_tbWhereUniqueInput | travel_tbWhereUniqueInput[]
    update?: travel_tbUpdateWithWhereUniqueWithoutUserInput | travel_tbUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: travel_tbUpdateManyWithWhereWithoutUserInput | travel_tbUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: travel_tbScalarWhereInput | travel_tbScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type user_tbCreateNestedOneWithoutTravelsInput = {
    create?: XOR<user_tbCreateWithoutTravelsInput, user_tbUncheckedCreateWithoutTravelsInput>
    connectOrCreate?: user_tbCreateOrConnectWithoutTravelsInput
    connect?: user_tbWhereUniqueInput
  }

  export type commentCreateNestedManyWithoutTravelInput = {
    create?: XOR<commentCreateWithoutTravelInput, commentUncheckedCreateWithoutTravelInput> | commentCreateWithoutTravelInput[] | commentUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: commentCreateOrConnectWithoutTravelInput | commentCreateOrConnectWithoutTravelInput[]
    createMany?: commentCreateManyTravelInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutTravelInput = {
    create?: XOR<commentCreateWithoutTravelInput, commentUncheckedCreateWithoutTravelInput> | commentCreateWithoutTravelInput[] | commentUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: commentCreateOrConnectWithoutTravelInput | commentCreateOrConnectWithoutTravelInput[]
    createMany?: commentCreateManyTravelInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type user_tbUpdateOneRequiredWithoutTravelsNestedInput = {
    create?: XOR<user_tbCreateWithoutTravelsInput, user_tbUncheckedCreateWithoutTravelsInput>
    connectOrCreate?: user_tbCreateOrConnectWithoutTravelsInput
    upsert?: user_tbUpsertWithoutTravelsInput
    connect?: user_tbWhereUniqueInput
    update?: XOR<XOR<user_tbUpdateToOneWithWhereWithoutTravelsInput, user_tbUpdateWithoutTravelsInput>, user_tbUncheckedUpdateWithoutTravelsInput>
  }

  export type commentUpdateManyWithoutTravelNestedInput = {
    create?: XOR<commentCreateWithoutTravelInput, commentUncheckedCreateWithoutTravelInput> | commentCreateWithoutTravelInput[] | commentUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: commentCreateOrConnectWithoutTravelInput | commentCreateOrConnectWithoutTravelInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutTravelInput | commentUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: commentCreateManyTravelInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutTravelInput | commentUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: commentUpdateManyWithWhereWithoutTravelInput | commentUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutTravelNestedInput = {
    create?: XOR<commentCreateWithoutTravelInput, commentUncheckedCreateWithoutTravelInput> | commentCreateWithoutTravelInput[] | commentUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: commentCreateOrConnectWithoutTravelInput | commentCreateOrConnectWithoutTravelInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutTravelInput | commentUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: commentCreateManyTravelInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutTravelInput | commentUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: commentUpdateManyWithWhereWithoutTravelInput | commentUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type user_tbCreateNestedOneWithoutCommentsInput = {
    create?: XOR<user_tbCreateWithoutCommentsInput, user_tbUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: user_tbCreateOrConnectWithoutCommentsInput
    connect?: user_tbWhereUniqueInput
  }

  export type travel_tbCreateNestedOneWithoutCommentsInput = {
    create?: XOR<travel_tbCreateWithoutCommentsInput, travel_tbUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: travel_tbCreateOrConnectWithoutCommentsInput
    connect?: travel_tbWhereUniqueInput
  }

  export type user_tbUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<user_tbCreateWithoutCommentsInput, user_tbUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: user_tbCreateOrConnectWithoutCommentsInput
    upsert?: user_tbUpsertWithoutCommentsInput
    connect?: user_tbWhereUniqueInput
    update?: XOR<XOR<user_tbUpdateToOneWithWhereWithoutCommentsInput, user_tbUpdateWithoutCommentsInput>, user_tbUncheckedUpdateWithoutCommentsInput>
  }

  export type travel_tbUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<travel_tbCreateWithoutCommentsInput, travel_tbUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: travel_tbCreateOrConnectWithoutCommentsInput
    upsert?: travel_tbUpsertWithoutCommentsInput
    connect?: travel_tbWhereUniqueInput
    update?: XOR<XOR<travel_tbUpdateToOneWithWhereWithoutCommentsInput, travel_tbUpdateWithoutCommentsInput>, travel_tbUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type travel_tbCreateWithoutUserInput = {
    travelPlace: string
    travelLocation: string
    travelImage: string
    comments?: commentCreateNestedManyWithoutTravelInput
  }

  export type travel_tbUncheckedCreateWithoutUserInput = {
    travelId?: number
    travelPlace: string
    travelLocation: string
    travelImage: string
    comments?: commentUncheckedCreateNestedManyWithoutTravelInput
  }

  export type travel_tbCreateOrConnectWithoutUserInput = {
    where: travel_tbWhereUniqueInput
    create: XOR<travel_tbCreateWithoutUserInput, travel_tbUncheckedCreateWithoutUserInput>
  }

  export type travel_tbCreateManyUserInputEnvelope = {
    data: travel_tbCreateManyUserInput | travel_tbCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type commentCreateWithoutUserInput = {
    content: string
    travel: travel_tbCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateWithoutUserInput = {
    id?: number
    travelId: number
    content: string
  }

  export type commentCreateOrConnectWithoutUserInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentCreateManyUserInputEnvelope = {
    data: commentCreateManyUserInput | commentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type travel_tbUpsertWithWhereUniqueWithoutUserInput = {
    where: travel_tbWhereUniqueInput
    update: XOR<travel_tbUpdateWithoutUserInput, travel_tbUncheckedUpdateWithoutUserInput>
    create: XOR<travel_tbCreateWithoutUserInput, travel_tbUncheckedCreateWithoutUserInput>
  }

  export type travel_tbUpdateWithWhereUniqueWithoutUserInput = {
    where: travel_tbWhereUniqueInput
    data: XOR<travel_tbUpdateWithoutUserInput, travel_tbUncheckedUpdateWithoutUserInput>
  }

  export type travel_tbUpdateManyWithWhereWithoutUserInput = {
    where: travel_tbScalarWhereInput
    data: XOR<travel_tbUpdateManyMutationInput, travel_tbUncheckedUpdateManyWithoutUserInput>
  }

  export type travel_tbScalarWhereInput = {
    AND?: travel_tbScalarWhereInput | travel_tbScalarWhereInput[]
    OR?: travel_tbScalarWhereInput[]
    NOT?: travel_tbScalarWhereInput | travel_tbScalarWhereInput[]
    travelId?: IntFilter<"travel_tb"> | number
    userId?: IntFilter<"travel_tb"> | number
    travelPlace?: StringFilter<"travel_tb"> | string
    travelLocation?: StringFilter<"travel_tb"> | string
    travelImage?: StringFilter<"travel_tb"> | string
  }

  export type commentUpsertWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentUpdateWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
  }

  export type commentUpdateManyWithWhereWithoutUserInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutUserInput>
  }

  export type commentScalarWhereInput = {
    AND?: commentScalarWhereInput | commentScalarWhereInput[]
    OR?: commentScalarWhereInput[]
    NOT?: commentScalarWhereInput | commentScalarWhereInput[]
    id?: IntFilter<"comment"> | number
    userId?: IntFilter<"comment"> | number
    travelId?: IntFilter<"comment"> | number
    content?: StringFilter<"comment"> | string
  }

  export type user_tbCreateWithoutTravelsInput = {
    userName: string
    userEmail: string
    userPassword: string
    userImage?: string | null
    comments?: commentCreateNestedManyWithoutUserInput
  }

  export type user_tbUncheckedCreateWithoutTravelsInput = {
    userId?: number
    userName: string
    userEmail: string
    userPassword: string
    userImage?: string | null
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type user_tbCreateOrConnectWithoutTravelsInput = {
    where: user_tbWhereUniqueInput
    create: XOR<user_tbCreateWithoutTravelsInput, user_tbUncheckedCreateWithoutTravelsInput>
  }

  export type commentCreateWithoutTravelInput = {
    content: string
    user: user_tbCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateWithoutTravelInput = {
    id?: number
    userId: number
    content: string
  }

  export type commentCreateOrConnectWithoutTravelInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutTravelInput, commentUncheckedCreateWithoutTravelInput>
  }

  export type commentCreateManyTravelInputEnvelope = {
    data: commentCreateManyTravelInput | commentCreateManyTravelInput[]
    skipDuplicates?: boolean
  }

  export type user_tbUpsertWithoutTravelsInput = {
    update: XOR<user_tbUpdateWithoutTravelsInput, user_tbUncheckedUpdateWithoutTravelsInput>
    create: XOR<user_tbCreateWithoutTravelsInput, user_tbUncheckedCreateWithoutTravelsInput>
    where?: user_tbWhereInput
  }

  export type user_tbUpdateToOneWithWhereWithoutTravelsInput = {
    where?: user_tbWhereInput
    data: XOR<user_tbUpdateWithoutTravelsInput, user_tbUncheckedUpdateWithoutTravelsInput>
  }

  export type user_tbUpdateWithoutTravelsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentUpdateManyWithoutUserNestedInput
  }

  export type user_tbUncheckedUpdateWithoutTravelsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type commentUpsertWithWhereUniqueWithoutTravelInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutTravelInput, commentUncheckedUpdateWithoutTravelInput>
    create: XOR<commentCreateWithoutTravelInput, commentUncheckedCreateWithoutTravelInput>
  }

  export type commentUpdateWithWhereUniqueWithoutTravelInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutTravelInput, commentUncheckedUpdateWithoutTravelInput>
  }

  export type commentUpdateManyWithWhereWithoutTravelInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutTravelInput>
  }

  export type user_tbCreateWithoutCommentsInput = {
    userName: string
    userEmail: string
    userPassword: string
    userImage?: string | null
    travels?: travel_tbCreateNestedManyWithoutUserInput
  }

  export type user_tbUncheckedCreateWithoutCommentsInput = {
    userId?: number
    userName: string
    userEmail: string
    userPassword: string
    userImage?: string | null
    travels?: travel_tbUncheckedCreateNestedManyWithoutUserInput
  }

  export type user_tbCreateOrConnectWithoutCommentsInput = {
    where: user_tbWhereUniqueInput
    create: XOR<user_tbCreateWithoutCommentsInput, user_tbUncheckedCreateWithoutCommentsInput>
  }

  export type travel_tbCreateWithoutCommentsInput = {
    travelPlace: string
    travelLocation: string
    travelImage: string
    user: user_tbCreateNestedOneWithoutTravelsInput
  }

  export type travel_tbUncheckedCreateWithoutCommentsInput = {
    travelId?: number
    userId: number
    travelPlace: string
    travelLocation: string
    travelImage: string
  }

  export type travel_tbCreateOrConnectWithoutCommentsInput = {
    where: travel_tbWhereUniqueInput
    create: XOR<travel_tbCreateWithoutCommentsInput, travel_tbUncheckedCreateWithoutCommentsInput>
  }

  export type user_tbUpsertWithoutCommentsInput = {
    update: XOR<user_tbUpdateWithoutCommentsInput, user_tbUncheckedUpdateWithoutCommentsInput>
    create: XOR<user_tbCreateWithoutCommentsInput, user_tbUncheckedCreateWithoutCommentsInput>
    where?: user_tbWhereInput
  }

  export type user_tbUpdateToOneWithWhereWithoutCommentsInput = {
    where?: user_tbWhereInput
    data: XOR<user_tbUpdateWithoutCommentsInput, user_tbUncheckedUpdateWithoutCommentsInput>
  }

  export type user_tbUpdateWithoutCommentsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    travels?: travel_tbUpdateManyWithoutUserNestedInput
  }

  export type user_tbUncheckedUpdateWithoutCommentsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    travels?: travel_tbUncheckedUpdateManyWithoutUserNestedInput
  }

  export type travel_tbUpsertWithoutCommentsInput = {
    update: XOR<travel_tbUpdateWithoutCommentsInput, travel_tbUncheckedUpdateWithoutCommentsInput>
    create: XOR<travel_tbCreateWithoutCommentsInput, travel_tbUncheckedCreateWithoutCommentsInput>
    where?: travel_tbWhereInput
  }

  export type travel_tbUpdateToOneWithWhereWithoutCommentsInput = {
    where?: travel_tbWhereInput
    data: XOR<travel_tbUpdateWithoutCommentsInput, travel_tbUncheckedUpdateWithoutCommentsInput>
  }

  export type travel_tbUpdateWithoutCommentsInput = {
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
    user?: user_tbUpdateOneRequiredWithoutTravelsNestedInput
  }

  export type travel_tbUncheckedUpdateWithoutCommentsInput = {
    travelId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
  }

  export type travel_tbCreateManyUserInput = {
    travelId?: number
    travelPlace: string
    travelLocation: string
    travelImage: string
  }

  export type commentCreateManyUserInput = {
    id?: number
    travelId: number
    content: string
  }

  export type travel_tbUpdateWithoutUserInput = {
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
    comments?: commentUpdateManyWithoutTravelNestedInput
  }

  export type travel_tbUncheckedUpdateWithoutUserInput = {
    travelId?: IntFieldUpdateOperationsInput | number
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type travel_tbUncheckedUpdateManyWithoutUserInput = {
    travelId?: IntFieldUpdateOperationsInput | number
    travelPlace?: StringFieldUpdateOperationsInput | string
    travelLocation?: StringFieldUpdateOperationsInput | string
    travelImage?: StringFieldUpdateOperationsInput | string
  }

  export type commentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    travel?: travel_tbUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    travelId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type commentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    travelId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateManyTravelInput = {
    id?: number
    userId: number
    content: string
  }

  export type commentUpdateWithoutTravelInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: user_tbUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateWithoutTravelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type commentUncheckedUpdateManyWithoutTravelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}