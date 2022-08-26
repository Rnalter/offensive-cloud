

Identity pools allow authenticated or unauthenticated users to access S3 or Dyanmodb. If you have the cognito endpoint and the region it belongs to you could try extracting credentials by using the following

```js
 aws cognito-identity get-credentials-for-identity --identity-id <region>:<identity-id>
```



## Credits

Great analysis done by https://andresriancho.com/


## References

https://speakerdeck.com/andresriancho/internet-scale-analysis-of-aws-cognito-security

