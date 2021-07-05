Minimum reproducible project for https://github.com/aws/aws-cdk/issues/6743

The issue concerns deploying a specific stack when static assets for a
different stack in the same app don't exist.

To test:
```
git clone https://github.com/dansalias/tmp-cdk-6743
cd tmp-cdk-6743
npm install
npx cdk synth --exclusively -a "npx ts-node cdk.app.ts" StackA
```

### Current Behaviour
Synthesising or deploying `StackA` with the `--exclusively` flag fails with the
response:
```
Cannot find asset at /path/to/tmp-cdk-6743/lambda-b
```

### Expected Behaviour
Synthesising or deploying `StackA` with the `--exclusively` flag succeeds.
