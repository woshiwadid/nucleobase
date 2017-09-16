import $ from 'jquery';

module.exports.post = (endpoint, options, callback) => {
  $.ajax({
    type: 'POST',
    url: endpoint,
    data: options,
    success: (data) => {
      console.log('POST SUCCESS:', data);

      callback( data );
    },
    error: (error) => {
      console.log('POST ERROR:', error);
    }
  });
};

module.exports.delete = (endpoint, options, callback) => {
  $.ajax({
    type: 'DELETE',
    url: endpoint,
    data: options,
    success: (data) => {
      console.log('DELETE SUCCESS:', data);

      callback( data );
    },
    error: (error) => {
      console.log('DELETE ERROR:', error);
    }
  });
};

module.exports.put = (endpoint, options, callback) => {
  $.ajax({
    type: 'PUT',
    url: endpoint,
    data: options,
    success: (data) => {
      console.log('PUT SUCCESS:', data);

      callback( data );
    },
    error: (error) => {
      console.log('PUT ERROR:', error);
    }
  });
};

module.exports.get = (endpoint, options, callback) => {
  $.ajax({
    type: 'GET',
    url: endpoint,
    data: options,
    success: (data) => {
      console.log('GET SUCCESS:', data);

      callback( data );
    },
    error: (error) => {
      console.log('GET ERROR:', error);
    }
  });
};

