declare function makeDestructurable<T extends Record<string, unknown>, A extends readonly any[]>(obj: T, arr: A): T & A;

export { makeDestructurable };
