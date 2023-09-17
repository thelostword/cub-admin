export const $to = async <T>(promise: Promise<T>): Promise<[Error, undefined] | [undefined, T]> => {
  try {
    const data = await promise;
    return [undefined, data];
  } catch (err) {
    return [err as Error, undefined];
  }
};
