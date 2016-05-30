'use strict';

const info = {
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
  description: process.env.npm_package_description,
  repository: {
    url: process.env.npm_package_repository_url,
    type: process.env.npm_package_repository_type
  },
  author: {
    name: process.env.npm_package_author_name,
    url: process.env.npm_package_author_url
  }
};

module.exports = info;
