const validateBundleName = (name) => {
  if (name.length < 2) {
    return 'Bundle name must contain two or more characters';
  }
  return true;
};

const validateBundleNamespace = (name) => {
  if (name.length === 0) {
    return 'Bundle namespace must contain at least one character';
  }
  if (name.length > 2) {
    return 'Bundle namespace must be shorter than three characters';
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
    name: 'bundleName',
    type: 'string',
    required: true,
    message: 'Bundle Name',
    default: 'sample',
    validate: validateBundleName,
  },
  {
    name: 'bundleNamespace',
    type: 'string',
    required: true,
    message: 'Bundle Namespace',
    default: 'z',
    validate: validateBundleNamespace,
  }
];