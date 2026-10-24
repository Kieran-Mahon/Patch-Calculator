# Patch Path Finder

### A mobile focused web-based cable network path finding system.

Patch Path Finder is a path finding tool designed for use in an audio/visual focused eviroment which allows you to pick a start port and end port and it will find the best path. It also includes where to place patch cables to complete the path.

### This project was created for the COMP826 Mobile Systems Development - Milestone 1: Scope Study and System Design assessment.

## Features
* Mobile focused design - scalable to work on most screen sizes
* Simple and quick interface
* Admin tools to create your own network
    * Add new ports
    * Remove unneeded ports
    * Add connections between ports
    * Remove unnessary connections between ports
* Designed with distance calculations so the path will always be the shortest
* Gives the user up to 3 options of paths in case the the first one is blocked.

## How it works
The system is built around a graph network where nodes are ports and edges are connections. A port is one of the common connectors (XLR, DMX, SDI, etc), while a connection is either a tieline (a direct connection) or patch (a connection which needs to be added by the user). The path finding uses the Yen's K-shortest path algorithm with use of Dijkstra's shortest path algorithm.

## What it was built with
* Next JS
* React
* JavaScript
* Tailwind CSS
* shadcn/ui

## Requirements
* Node.js
* Node Package Manager


## Install
* Clone the repo
* Navigate and open it
* Install the dependencies with "npm install"
* Then start the development server with "npm run dev"
* Or create a build with "npm run build" and run it with "npm run start"

## Try online at
https://kieran-mahon.github.io/Patch-Calculator/

