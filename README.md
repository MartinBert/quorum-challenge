# QuorumIT - Backend Assignment

## Steps to run the project locally
##### PREREQUISITES
Install the following packages:
* git
* docker
* docker-compose

##### Step 1 – Clone the repository
```sh
> git clone https://github.com/MartinBert/quorum-challenge .
```

##### Step 2 – Execute the following commands
```sh
> cd quorum-challenge
> docker-compose up
```

##### Step 3 – Check the API is ready
Go to http://localhost:3000


##### Step 4 (Optional)
You can also open PGAdmin from the following url:
http://localhost:5050

Use the following credentials:
* postgres@postgres.com
* postgres

#### Note:
The first time that you open PGAdmin you need to create a New Server with the following properties:
* General Tab
    * Name: "Put whatever name you want"
* Connection Tab
    * Host name/address: **postgres**
    * Port: **5432**
    * Username: **postgres**
    * Password: **postgres**

After you configure PGAdmin you should see the database with name **challenge** used in this project