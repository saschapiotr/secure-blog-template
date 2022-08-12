# Dockerized Kirby 

A *Work in Progress* developer friendly, security and privacy focussed template for teb projects based on kirbycms.

## Privacy & Security

This template is an attempt to create a web stack that puts privacy and security at the center. In my activist work I have been working for people, organizations and institutions that are in increased danger of repression due to their activist or journalistic contexts. And therefore have higher privacy and security requirements for their web presence.

This template tries to meet the following requirements:

* **Full Cms and Auth functionality**
* **Open source dependencies**
* **Built for containerized secured self hosting**
* **Lightweight (flat file, lean)**
* **Fully functioning without js**

## Developer friendly

Since work in an active context is often done voluntarily, there is an increased focus on developer-friendliness in this template.

* **Dockerized Development**
* **Commitizen for a cleaner git history**
* **Leveraging NPM scripts for the dev and build workflow**

## Getting Started

### Dependencies

This template is being developed on arch linux. But in theory linux should not be a requirement. 

* Docker (tested with 20.10.17)
* Docker Compose (tested with 2.6.0)
* Node (only needed for dev tools, tested with 16.13.1)

### Installing

1. clone the repo
2. run `npm install`