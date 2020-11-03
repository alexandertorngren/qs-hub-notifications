# Generate certificate

Configure the file `./cert-options.conf`, then run the following:

```shell
openssl req -config cert-options.conf -new -x509 -sha256 -newkey rsa:2048 -nodes -keyout key.pem -days 365 -out server.pem
```

Or run `./gen-cert.bat`

--------------------------------------------------------------------------------

**[alexandertorngren](https://github.com/alexandertorngren) / [qs-hub-notifications](../../../../README) / [notification-backend](../../../README) /** generate certificate
