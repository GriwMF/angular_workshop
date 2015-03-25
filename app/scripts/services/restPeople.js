'use strict';

/**
 * @ngdoc service
 * @name angularApp.People
 * @description
 * # People
 * Service in the angularApp.
 */
angular.module('angularApp')
    .provider('RestPeople', function () {
      var url = '',
          http = null,
        _add = function (person) {
            return person.id ? http.put(url + '/' + person.id, person) : http.post(url, person);
        },
        _get = function (id){
            return http.get(url + "/" + id);
        },
        _list = function() {
            return http.get(url);
        },

        _delete = function (id) {
            return http.delete(url+ "/" + id);
        };

      this.$get = function($http) {
        http = $http;
        return {
          get: _get,
          list: _list,
          delete: _delete,
          add: _add
        }
      };
      this.setUrl = function(provided_url){
        url = provided_url;
      };
    });
