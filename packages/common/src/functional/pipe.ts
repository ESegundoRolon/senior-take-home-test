const combine = (result: any, nextFun: (arg: any) => any) => nextFun(result);

export const pipe = (...fns: any[]) => (input: any) => fns.reduce(combine, input);