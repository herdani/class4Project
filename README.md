# Local setup

## Install packages

`npm install`
`cd client`
`npm isntall`

## Configure your environment variables

Create a `.env` file similar to `.envTemplate` and update the values according your local configuration

## Adapt database changes

Here we list all changes we made to the database structure.
Don't forget to check this out for new lines after you pulled new code

`` ALTER TABLE `class4project`.`messages` ADD COLUMN `deleted` TINYINT NULL DEFAULT 0 AFTER `license_plate`; ``

## Mysql (if you use Docker)

### Initial startup

`docker run --name class4ProjectMySQL -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7`

### Restart / relaunch instance

`docker start class4ProjectMySQL`
