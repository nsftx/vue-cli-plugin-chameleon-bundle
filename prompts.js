const validateBundleName = (name) => {
  if (name.length < 2) {
    return 'Bundle name must contain two or more characters';
  }
  return true;
};

const validateBundleNamespace = (namespace) => {
  const pattern = /^[a-z]{1,2}$/;
  const isValid = pattern.test(namespace);

  if (!isValid) {
    return `Bundle namespace must contain at least one and maximum of 2 characters.
    Special characters are not allowed.`;
  }

  return true;
};

module.exports = [
  {
    name: 'name',
    type: 'string',
    required: true,
    message: 'Project Name',
    default: 'chameleon-bundle',
  },
  {
    name: 'description',
    type: 'string',
    message: 'Project Description',
    default: 'Chameleon Bundle Project',
  },
  {
    name: 'author',
    type: 'string',
    message: 'Author',
  },
  {
    name: 'license',
    type: 'string',
    label: 'License',
    default: 'MIT',
  },
  {
    name: 'bundleNamespace',
    type: 'string',
    required: true,
    message: 'Bundle Namespace',
    default: 'z',
    validate: validateBundleNamespace,
  },
  {
    name: 'bundleName',
    type: 'string',
    required: true,
    message: 'Bundle Name',
    default: 'sample',
    validate: validateBundleName,
  },
  {
    name: 'friendlyName',
    type: 'string',
    required: true,
    message: 'Friendly Bundle Name (for display purposes)',
    default: 'Sample',
  },
];