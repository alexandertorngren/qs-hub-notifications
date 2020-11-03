# Generate certificate

Configure the file `./cert-options.conf`, then run the following:

```shell
openssl req -config cert-options.conf -new -x509 -sha256 -newkey rsa:2048 -nodes -keyout key.pem -days 365 -out server.pem
```

Or run `./gen-cert.bat`

--------------------------------------------------------------------------------
