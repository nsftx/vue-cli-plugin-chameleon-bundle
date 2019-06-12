const axios = require('axios');

const http = axios.create({
  headers: {
    Authorization: `Bearer ${process.argv[4]}`,
  },
  baseURL: 'https://api.staging-chameleon.nsoft.cloud',
});

const validateBundleName = (name) => {
  if (name.length < 2) {
    return 'Bundle name must contain two or more characters';
  }
  return http.get('/bundles', {
    params: {
      name: name,
    },
  }).then((response) => {
    if (response.data.length > 0) {
      return `Bundle name already exist, try with a different name!`;
    }
    return true;
  });
};

const validateBundleNamespace = (namespace) => {
  const paramsName = `${namespace}-`;
  const pattern = /^[a-z]{1,2}$/;
  const isValid = pattern.test(namespace);

  if (!isValid) {
    return `Bundle namespace must contain at least one and maximum of 2 characters.
    Special characters and numbers are not allowed.`;
  }
  return http.get('/bundles', {
    params: {
      name: paramsName,
    },
  }).then((response) => {
    if (response.data.length > 0) {
      return `Bundle namespace already exist, try with a different namespace!`;
    }
    return true;
  });
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