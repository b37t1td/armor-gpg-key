
var
  PUBLIC_HEADER_START = "-----BEGIN PGP PUBLIC KEY BLOCK-----",
  PUBLIC_HEADER_END = "-----END PGP PUBLIC KEY BLOCK-----",
  PRIVATE_HEADER_START = "-----BEGIN PGP PRIVATE KEY BLOCK-----",
  PRIVATE_HEADERR_END = "-----END PGP PRIVATE KEY BLOCK-----",
  GPG_MESSAGE_START = "-----BEGIN PGP MESSAGE-----",
  GPG_MESSAGE_END = "-----END PGP MESSAGE-----";


var stripData = function(data) {
  return data.replace(/\s/gi,'').replace(/\r?\n|\r/g, '');
};

var insertHeader = function(start, end, data) {
  return start + '\n\n' + stripData(data) + '\n' + end;
}

/**
 * Armor string by special type
 *
 * @name armor
 * @function
 * @access public
 * @param {base64 string} data
 * @param {String} type public, private, message (default : public)
 */
var armor = function(data, type) {
  switch(type) {
  case 'private' :
      return insertHeader(PRIVATE_HEADER_START, PRIVATE_HEADERR_END, data);
  case 'message' :
      return insertHeader(GPG_MESSAGE_START, GPG_MESSAGE_END, data);
  default:
      return insertHeader(PUBLIC_HEADER_START, PUBLIC_HEADER_END, data);
  }
}

module.exports = armor;