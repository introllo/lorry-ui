'use strict';

angular.module('lorryApp')
  .factory('Image', ['$resource', 'ENV', function($resource, ENV){
    return $resource(ENV.LORRY_API_ENDPOINT + '/images?q=:searchTerm', {searchTerm:'@term'}, {
      'query': {
        method:'GET',
        isArray: true,
        transformResponse: function(data, headers){
          var res = angular.fromJson(data).results;
          angular.forEach(res, function(value, key) {
            // check for images without usernames i.e. busybox
            if (value.name.split('/').length === 1) {
              value.username = '';
              value.reponame = ''+value.name.split('/')[0];
            } else {
              value.username = '' + value.name.split('/')[0];
              value.reponame = '' + value.name.split('/')[1];
            }
          });
          return res;
        }
      },
      'tagsWithoutUsername': {
        url: ENV.LORRY_API_ENDPOINT + '/images/tags/:repoName',
        method:'GET',
        isArray: true,
        transformResponse: function(data, headers){
          var resp = angular.fromJson(data);
          return resp;
        }
      },
      'tags': {
        url: ENV.LORRY_API_ENDPOINT + '/images/tags/:repoUser/:repoName',
        method:'GET',
        isArray: true,
        transformResponse: function(data, headers){
          var resp = angular.fromJson(data);
          return resp;
        }
      }
    });
  }]);
