export const classnames = (...args: unknown[]) => {
  return args
    .flat()
    .filter((x) => typeof x === 'string')
    .join(' ')
    .trim()
}

export const capitalize = (string: string | undefined) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
