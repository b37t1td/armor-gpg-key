### armor-gpg-key

Very simple tool for making base64 encoded keys armored by inserting special headers information into it.


### Why ?
  * Makes compressed keys without headers armored
  * When working with GitHub [gpg_keys](https://developer.github.com/v3/users/gpg_keys/) api
  * When sharing keys without headers


### Installation

```
npm install armor-gpg-key
```

### Usage

There is three types of key headers:

  * public (default)
  * private
  * message

Example of `armor` function call:

```js
/*
 *  First argument is a string of the data
 *  Second is a headers type to insert (public, private, message)
 */
armor(string, type)
```

More real example:

```js
var armor = require('armor-gpg-key');

armor(myBase64EncodedData, 'message');
```

Will return something like this :

```
-----BEGIN PGP MESSAGE-----

xsBNBFgPtZgBC.........long data=
-----END PGP MESSAGE-----
```


### License

MIT
