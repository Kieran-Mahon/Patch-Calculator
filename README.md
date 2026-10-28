# Patch Path Finder

### A mobile focused web-based cable network path finding system.

Patch Path Finder is a path finding tool designed for use in an audio/visual focused environment which allows the user to pick a start port and end port and it will find the best path between them. It also includes where to place patch cables to complete the path.

### This project was created for the COMP826 Mobile Systems Development - Milestone 1: Scope Study and System Design assessment.

## Features
* Mobile focused design - scalable to work on most screen sizes
* Simple and quick interface
* Admin tools to create your own network
    * Add new ports
    * Remove unneeded ports
    * Add connections between ports
    * Remove unnecessary connections between ports
* Designed with distance calculations so the path will always be the shortest
* Gives the user up to 3 options of paths in case the first one is blocked.

## How it works
The system is built around a graph network in which nodes represent ports and edges represent connections. A port is one of the common connectors (XLR, DMX, SDI, etc) used in the AV industry, while a connection is either a tieline (a direct connection between two ports) or patch (a connection which needs to be added by the user).
The path finding uses the Yen's K-shortest path algorithm which uses Dijkstra's shortest path algorithm.

## What the example network looks like
![network example](<Readme Files/networkexample.png>)
Blue lines are tielines and red lines are patchable links.

## What it was built with
* Next.js
* React
* JavaScript
* Tailwind CSS
* shadcn/ui

## Requirements
* Node.js
* Node Package Manager (npm)


## Install
* Clone the repo
* Navigate and open it
* Install the dependencies with "npm install"
* Then start the development server with "npm run dev"
* Or create a build with "npm run build" and run it with "npm run start"

## Try online at
https://kieran-mahon.github.io/Patch-Calculator/

