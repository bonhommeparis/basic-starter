
module.exports = function(env) {

  // _______________________________________________________Filters

  env.addFilter('isarray', function(array) {
    return Array.isArray(array);
  });

  env.addFilter('isstring', (value) => {
    return typeof value === 'string';
  })

  env.addFilter('set', function(object, key, value) {
    if (object === null) object = {};
    object[key] = value;
    return object;
  });

  env.addFilter('modifiers', function(modifiers, prefix) {

    if (modifiers === undefined || modifiers === null) return '';

    Array.isArray(modifiers) === false && (modifiers = [modifiers]);

    var result = '';

    modifiers.forEach((modifier) => result += ` ${prefix}--${modifier}`);

    return result;
  });

  env.addFilter('attr', function(attributes) {

    if (attributes === undefined || attributes === null  || attributes.length === 0) return '';

    var result = '';

    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        const element = attributes[key];
        result += `${key}="${element.toString()}" `;
      }
    }
    return result;
  });
};
