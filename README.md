# edeka b2c image generator

## Dependencies

If you use 

## Startup & Usage
 
On first startup build the docker image:

```
./docker-build.sh
```

Now you can spin up a docker container from that image:

```
./docker-run.sh
```

Within the container start the image generator:

```
yarn start
```