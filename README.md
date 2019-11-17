# Sulu Website

[![GitHub license](https://img.shields.io/github/license/ronanversendaal/sulu.svg)](https://github.com/sulu/skeleton/blob/master/LICENSE)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/ronanversendaal/sulu.svg)](https://github.com/ronanversendaal/sulu/releases)
[![Build Status](https://travis-ci.com/ronanversendaal/sulu.svg?branch=master)](https://travis-ci.com/ronanversendaal/sulu)


This is a website made with Sulu CMS.

This website is made with *Sulu Skeleton* - the recommended skeleton to start a new [Sulu](https://github.com/sulu/sulu) project.

## Start the project

Start the project using [ddev](https://ddev.com/) with the following command:

```bash
ddev start
```

After that run:

```bash
ddev exec composer install
```

When this is done, build the project for the required environment :

```bash
ddev exec ./bin/adminconsole sulu:build [dev, prod]
```

## Configuration

Follow the [Getting Started documentation](http://docs.sulu.io/en/latest/book/getting-started.html) to configure Sulu correctly.

## Issues

Submit any Sulu related issues to the [sulu/sulu](https://github.com/sulu/sulu/issues) repository.
