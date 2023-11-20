# Project Proposal: National Parks Scavenger Hunt

## 1. Tech Stack

For this project, I will use the following tech stack:

- **Frontend:** React/Tailwind CSS
- **Backend:** Express
- **Database:** PostgreSQL

## 2. Focus of the Project

This will be an evenly focused full-stack application.

## 3. Platform

The application will be a responsive web application, accessible on both desktop and mobile devices.

## 4. Project Goal

The goal of the National Park Scavenger Hunt is to provide users with a platform to create and participate in scavenger hunts for various national parks that they are visiting. Users can register, log in, create personalized hunts, and keep track of completed and ongoing hunts.

## 5. User Demographic

The primary users of the app are nature enthusiasts, families, and individuals who enjoy exploring national parks and participating in scavenger hunts. The app is designed to be user-friendly for people of ages 10 and up.

## 6. Data Usage

Data for the app will be sourced from a custom database that includes tables for users, parks, plant and animal species, hunts, and hunt items. Data will also come from the [National Park Service species list database](https://irma.nps.gov/NPSpecies) and the [National Park Service API](https://www.nps.gov/subjects/developer/api-documentation.htm). I will also integrate images for parks, plants, and animals. The database will be implemented using PostgreSQL. 

## 7. Approach Outline

### a. Database Schema

The database schema will include tables for Users, Parks, Species, Hunts, and Hunt Items. Relationships will be established using foreign keys.

![Database Schema](https://i.imgur.com/RECzUw3.png)

### b. API Considerations

I will create a custom API using Express.js to handle data requests. A potential challenge I'm facing is figuring out how to find images of all the plant and animal species along with descriptions of them. For now, I will just have links to wikipedia articles about the plants and animals and revist this if there is time to implement it.

### c. Security

This app will not contain any sensitive user information but passwords will be securely hashed. Additionally, authentication and authorization will be implemented to ensure users only have access to their own scavenger hunts.

### d. App Functionality

- User registration and authentication
- Park and species information display
- Create, edit, and delete scavenger hunts
- Track completed and in-progress hunts


### e. User Flow

1. User registers or logs in.
2. User home page shows existing in progress and completed hunts. There is also the option to create a new scavenger hunt.
3. User creates a personalized scavenger hunt, first selecting which park they would like to create a hunt for.
4. User can customize the difficulty of the hunt and whether or not they want to search for just animals, just plants, or a combination of both. 
5. A scavenger hunt is then created showing the user a random selection of species from their selected national park.
6. User can either accept the hunt as is, or modify or delete suggested species.
7. If user chooses to modify a particular species, they will be given the option of chosing another random species that is found in the park.
8. Scavenger hunt is accepted and saved to database.
9. User participates in hunts, checking off tracking progress.
10. User views completed hunts and achievements.

### f. Unique Features and Stretch Goals

- **[Feature 1]:** Introduce a point system, badges, or rewards for completing hunts or finding certain rare animals.
- **[Feature 2]:** Unlock achievement rewards for visiting a certain number of national parks
- **[Stretch Goal 1]:** Upload and display images for parks, plants, and animals users have taken
- **[Stretch Goal 2]:** Allow users to share their hunts and achievements on social media.
---


