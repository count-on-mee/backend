class ObjectUtil {
  static omit(obj, keys, defaultNullKeys = []) {
    const cleaned = Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keys.includes(key))
    );

    defaultNullKeys.forEach((key) => {
      if (cleaned[key] === undefined) {
        cleaned[key] = null;
      }
    });

    return cleaned;
  }
}

module.exports = ObjectUtil;
