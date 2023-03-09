type Modifications = Record<string, string | boolean | undefined>;

export const classNames = (
  baseClass: string,
  additionalClasses: (string | undefined)[] = [],
  modifications: Modifications = {}
): string => {
  const activeModClasses = Object.entries(modifications)
    .filter(([, isActive]) => Boolean(isActive))
    .map(([className]) => className);

  const correctAdditionalClasses = additionalClasses.filter(Boolean);

  return [baseClass, ...correctAdditionalClasses, ...activeModClasses].join(
    " "
  );
};
