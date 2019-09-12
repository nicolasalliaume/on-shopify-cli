# Shopify CLI Utility ( "The Wordpress CLI for Shopify" )

[![Developed by ON Lab](http://on-lab.com/developed-by-on-lab.svg?v=3)](http://on-lab.com)

Shopify CLI is a command line utility used to perform operations on Shopify stores. It makes doing some typical operations in a store much easier, especially if you're doing dev work.

# But why?
This tool was born out of the frustration of:
  * Having to test a Shopify app on a bunch of different themes, and to do so, having to go into the admin over and over to change the active theme and create copies
  * Developing a new feature on a copy of the theme while other people work on other copies of a theme, and needing to move the edited files into the active theme
  * Syncronizing changes on the live theme to a copy of the theme I was working on
  * Having to remove many themes ONE BY ONE to perform a "cleanup" after testing something on many themes

A better way to do this work needed to exist. Maybe it does already, maybe it doesn't. But anyway, here's one now.

# ⓵ Installation

## Install using NPM
Run `npm install -g https://github.com/nicolasalliaume/on-shopify-cli` to install globally.

If installing locally, use `$ ./node_modules/.bin/shopify-cli` to run commands.

## Install from source code
Clone this repo with `git clone https://github.com/nicolasalliaume/on-shopify-cli` and run `$ ./index.js`

# ⓶ Configure authentication to a Shopify store
In order to run the commands, the CLI needs access to your Shopify store. For that, a private app is used.
If you've used the Theme Dev Toolkit for Shopify, you've probably done this before.

## Create a private app
First, you'll need to create a private app to get a key and a password that the CLI will use to connect to your store when you run a command.
Log into your Shopify admin page, go to **_Apps_**, scroll down, and click on the link that says _'Manage private apps'_. 
Then, click on _'Create a new private app'_. Give it a name, and fill in your email too. 

![Create private app](https://s3-us-west-2.amazonaws.com/onlab-tmp-bucket/shopify-cli/CLI+setup.png)

Finally, enable the following permissions:

	- Products, variants and collections: **'Read and write'**
	- Theme templates and theme assets: **'Read and write'**
	- Orders, transactions and fulfillments: **'Read and write'**

![Setup permissions](https://s3-us-west-2.amazonaws.com/onlab-tmp-bucket/shopify-cli/CLI+Permissions.png)

Save the app and copy the **_'API key'_** and **_'Password'_**. Then, open the terminal and...

## Run the config command to save your auth
Run `$ shopify-cli config -d <domain> -k <api key> -p <api password>`, where domain is the shop's Shopify domain (for example, '_mystore.myshopify.com_'). 
This will save your API key and Password in a local file so you don't have to input them every time you run a command.

# Operations supported (_so far_)
Right now, the CLI supports the following operations:

## Themes

#### List themes `$ shopify-cli themes list [ --json ] [ --name <theme name> [ --field <field> ] ]`
This command returns a list of all the themes, indicating the active one. It also includes created time, updated time and ID.

Use `--name <name>` to get just the theme matching the specified name. You can also add `--field <field>` on top of it to get just one field from the matching theme. For example: 

Example: `$ shopify-cli themes list`  Lists all themes.

Example: `$ shopify-cli themes list --name "First Preview"`  Lists information of theme "First Preview".

Example: `$ shopify-cli themes list --name "First Preview" --field id` Prints the ID of the theme "First Preview".

#### Remove themes `$ shopify-cli themes remove ( <id> | --all ) [ <id> <id> ... ]`
This command will remove the indicated theme (or themes if more than one is indicated).
It also accepts a `--all` flag that will remove all themes (except for the active one). The `--all` flag will ask for user confirmation before deleting. To bypass user confirmation use the `-y` flag. 

Example: `$ shopify-cli themes remove 231761231`  Removes theme with ID 231761231.

Example: `$ shopify-cli themes remove --all`  Removes all themes, except active one. Asks for confirmation.

Example: `$ shopify-cli themes remove --all -y`  Removes all themes, except active one, no confirmation needed.

#### Activate theme `$ shopify-cli themes activate <id>`
This command activates the theme with the given ID.

Example: `$ shopify-cli themes activate 231761231`

#### Rename theme `$ shopify-cli themes rename <id> "New name"`
Renames the theme with the given ID, setting the given name. The new name accepts variables. The available variables are:
- %name%: The old name of the theme
- %id%: The id of the theme

Example: `$ shopify-cli themes rename 231761231 "Former %name%"` will rename a theme called "Debut" into "Former Debut".

#### Duplicate theme `$ shopify-cli themes duplicate <id> [ --name "New theme name" ]`
This command creates a copy of the theme with the given ID. Escentially, it creates a new theme (with provided name, if any), and copies every asset from the source theme into the new theme.

Example: `$ shopify-cli themes duplicate 231761231 --name "Duplicate of Debut"`

#### Sync themes `$ shopify-cli themes sync <id origin> <id target> [ <file 1> <file 2> ... ]`
Copies assets from the source theme into the target theme. All assets will be copied, unless a list of files is provided.

Example: `$ shopify-cli themes sync 231761231 1127862138 templates/cart.liquid templates/404.liquid assets/main.js`

#### Bootstrap themes `$ shopify-cli themes bootstrap <name> [ <name> ... ]`
This command will install one or more of the free themes provided by Shopify. These are: 
- brooklyn
- boundless
- debut
- jumpstart
- minimal
- narrative
- pop
- simple
- supply
- venture.

It also accepts a `--all` flag that will install all themes.

Example: `$ shopify-cli themes bootstrap minimal`

Example: `$ shopify-cli themes bootstrap --all`

## Theme Kit integration
[Theme kit](https://shopify.github.io/themekit/) is a cross-platform tool for building Shopify Themes. Theme Kit uses a yaml config file that you can create with Shopify CLI.

#### Install Theme Kit `$ shopify-cli kit install`
Installes Shopify Theme Kit in your system. No need to use this if you won't be using Theme Kit or you already have it installed.

#### Create config `$ shopify-cli kit config [ -t <id>,<id>,... ]`
Creates a config file for Theme Kit, and adds the indicated themes to it. If no themes are specified, all themes will be included. This is great when you'll start to work on a new shop. Just run this command and get Theme Kit up and running for all your themes in a second.

--------

[![ON Lab](http://on-lab.com/on-lab.jpg)](http://on-lab.com)
