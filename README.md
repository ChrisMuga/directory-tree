# Setting Up Docker

## Change `line 4 `of the `Dockerfile`, set `WORKDIR` to the location of the app in your environment.

`WORKDIR /Users/muga/Desktop/directory-tree/`

## Build the image

`docker build -t <your username>/directory-tree .`

## Run the image

`docker run -p 8080:8080 -d <your username>/directory-tree`

## Access the app at localhost:8080

## Get container ID

`docker ps`

## Print app output

`docker logs <container id>`

## Enter the container

`docker exec -it <container id> /bin/bash`

# Running the App

## For graphql

Head on to `localhost:8080/graphql/directory-tree` on POSTMAN

pass this graphql query string

```
{
    directory(url: "<insert-directory-here>")
    {
        path, children{ path, fileSizeInBytes, children{
            path, children {
                path, children {
                    path, fileSizeInBytes, children{
                        path, children {
                            path
                            }
                        }
                    }
                }
            }
        }
    }
}
```

> To drill deeper we'd have to recursively call include children, we don't didn't want to make the recursion exhaustive. So went about 4/5 levels deep.
>
> > _(Also, as at now, I don't know how to do that with `graphql`)_

## For JavaScript (REST)

`POST` this body to `localhost:8080/directory-tree`

- `path: <insert-valid-url>`

this drills down the directory exhaustively.

# To TEST On local env

`npm install`
`nodemon`

# Running the App

## For graphql

Head on to `localhost:8080/graphql/directory-tree` on POSTMAN

pass this graphql query string

```
{
    directory(url: "<insert-directory-here>")
    {
        path, children{ path, fileSizeInBytes, children{
            path, children {
                path, children {
                    path, fileSizeInBytes, children{
                        path, children {
                            path
                            }
                        }
                    }
                }
            }
        }
    }
}
```

> To drill deeper we'd have to recursively call include children, we don't didn't want to make the recursion exhaustive. So went about 4/5 levels deep.
>
> > _(Also, as at now, I don't know how to do that with `graphql`)_

## For JavaScript (REST)

`POST` this body to `localhost:8080/directory-tree`

- `path: <insert-valid-url>`

this drills down the directory exhaustively.
