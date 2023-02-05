type Modifications = Record<string, string | boolean>;

export const buildClassNames = (
  baseClass: string,
  extraClasses: string[],
  modifications: Modifications
): string => {
  const activeModClasses = Object.entries(modifications)
    .filter(([, isActive]) => Boolean(isActive))
    .map(([className]) => className);

  return [baseClass, ...extraClasses, ...activeModClasses].join(" ");
};
