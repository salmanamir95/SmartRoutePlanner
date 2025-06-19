# Smart Route Planner with Live Traffic Simulation

## 1. Introduction

### 1.1 Purpose

This document outlines a comprehensive Software Requirements Specification (SRS), architectural overview, modular breakdown, and DevSecOps strategy for the **Smart Route Planner** project. The goal of this system is to provide users with optimal travel routes, including real-time traffic simulation and rerouting capabilities. It is intended to serve a wide range of users from daily commuters to logistics firms needing route optimization and live traffic responsiveness.

### 1.2 Scope

The Smart Route Planner system is a **web-based application** composed of three main subsystems:

* **Frontend**: Built using Angular, this interface allows users to input destinations, view maps, simulate traffic, and receive optimized routes.
* **Backend**: A .NET Core microservice-based API system that calculates routes, simulates traffic, authenticates users, and connects with external APIs like Mapbox and OpenRouteService.
* **Database**: A PostgreSQL relational database for storing user data, route history, traffic simulations, and more.

### 1.3 Target Audience

* **Developers**: Frontend and backend engineers implementing the system
* **DevOps and Security Teams**: Handling deployment, monitoring, and securing the system
* **Product Managers**: Overseeing the delivery and alignment with requirements
* **Stakeholders**: Decision-makers evaluating the system’s success and usage

### 1.4 Definitions

* **Waypoint**: A defined intermediate stop between a source and a destination.
* **ETA**: Estimated Time of Arrival calculated based on current and predicted traffic conditions.
* **BFF (Backend-for-Frontend)**: An API tailored specifically for the frontend, reducing over-fetching and under-fetching.
* **API Gateway**: A central API layer that routes requests to respective microservices.

---

## 2. Overall Description

### 2.1 Product Functions

* Allow user input for source, destination, and optional waypoints.
* Display optimal routes and estimated travel times.
* Simulate dynamic traffic using time-weighted delays.
* Display updated ETA and suggest rerouting when delays exceed a threshold.

### 2.2 User Classes

* **End Users**: Drivers, planners, or logistic personnel using the web app.
* **Administrators**: Manage user data and monitor system health.
* **System Services**: Automated backend services managing routing and traffic.

---

## 3. Functional Requirements

### 3.1 Route Planning

* Input fields for origin, destination, and waypoints.
* Connect to routing APIs (Mapbox, ORS).
* Return routes with encoded polylines and ETAs.

### 3.2 Traffic Simulation

* Time-based random traffic generation.
* Modify weights on route segments.
* Update frontend with overlay indicators.

### 3.3 Navigation Module

* Provide turn-by-turn directions.
* Offer manual and auto-triggered rerouting.

### 3.4 APIs

* `POST /api/route`: Calculate and return route details.
* `GET /api/traffic`: Return simulated traffic data for segments.
* `POST /api/login`: User authentication.
* `GET /api/profile`: User data retrieval.

---

## 4. Non-Functional Requirements

* **Performance**: All responses should be under 2 seconds.
* **Availability**: 99.5% uptime with failover handling.
* **Security**: Role-based access and JWT authentication.
* **UI/UX**: Responsive design, accessible via desktop and mobile.

---

## 5. Architecture Design

### 5.1 Style

* **Microservices** for backend logic separation.
* **BFF** pattern to streamline frontend-backend communication.
* **REST APIs** for all data transfer.

### 5.2 Components

* **Frontend**: Angular 17 with TypeScript and Mapbox integration.
* **Backend**:

  * API Gateway (.NET Core Web API)
  * Routing Microservice
  * Traffic Simulation Microservice
* **Database**: PostgreSQL with EF Core ORM.
* **External APIs**: Mapbox and OpenRouteService.

---

## 6. Structural Design

### 6.1 Patterns Used

* **Repository Pattern**: Abstraction layer over database queries.
* **Strategy Pattern**: Multiple routing service implementations.
* **Adapter Pattern**: Unified interface for external API providers.
* **DTOs**: Data Transfer Objects used between layers for safety.

### 6.2 Codebase Layout

#### Frontend

```
src/
  app/
    components/
    pages/
    services/
    models/
    utils/
```

#### Backend

```
/RoutePlanner.API
  Controllers/
  Services/
  Routes/
  Models/
  Config/
  Middleware/
  Repositories/
```

#### Database

* Tables: Users, Routes, TrafficSimulations
* Indexes on route segments for performance

---

## 7. Design Principles

* **SOLID Principles**: Promote modular, testable, and maintainable code.
* **DRY (Don't Repeat Yourself)**: Reuse code via services and shared components.
* **KISS (Keep It Simple, Stupid)**: Avoid overcomplicating logic.
* **YAGNI (You Aren't Gonna Need It)**: Avoid speculative features.

---

## 8. DevSecOps Strategy

### 8.1 Development

* Linting: TSLint (Angular), StyleCop (.NET)
* Unit Testing: Karma/Jasmine for frontend, xUnit for backend
* Integration Testing: Postman or automated API tests
* Version Control: Git + GitHub

### 8.2 Security

* Input validation and sanitization
* Role-based access control
* JWT token validation on backend
* Secrets managed via environment configs or Vault

### 8.3 Operations

* Docker containers for each service
* Docker Compose for local orchestration
* Helm + Kubernetes for scalable deployment
* Monitoring: Prometheus for metrics, Grafana for dashboards
* Logging: ELK or Loki stack
* Traffic updates: Polling or WebSockets

---

## 9. External Interfaces

* **Mapbox API**: For map visualization and route calculation
* **OpenRouteService**: Alternate routing source
* **PostgreSQL**: Persistent data storage for all entities

---

## 10. Use Cases

### UC1: Plan Route

1. User enters source and destination.
2. Angular frontend sends a request to the API Gateway.
3. API Gateway forwards to Routing Microservice.
4. Route and ETA returned and displayed.

### UC2: Simulate Traffic

1. Traffic microservice updates segment weights.
2. Updated ETA calculated.
3. Frontend shows affected routes.

### UC3: Reroute

1. User clicks 'Reroute'.
2. System evaluates alternative.
3. Returns optimized path.

---

## 11. Development Plan (Module-by-Module)

### ✅ Hour 1: Environment Setup

* Scaffold Angular + .NET projects
* Setup PostgreSQL (Docker or local)
* Create base folder structure and Git repo

### ✅ Hour 2: Login Module (Frontend)

* Design login form (Angular Forms)
* Create AuthService with dummy token logic
* Add route guards and token storage

### ✅ Hour 3: Login Module (Backend)

* Create `/api/login` endpoint
* Use dummy user validation + return JWT
* Add middleware for JWT validation

### ✅ Hour 4: Route Planning (Frontend)

* Add form for location input
* Integrate Mapbox map display
* Display user inputs as waypoints

### ✅ Hour 5: Route Planning (Backend)

* Create `/api/route` with external API call to Mapbox
* Return polyline, waypoints, ETA

### ✅ Hour 6: Display Route + ETA (Frontend)

* Parse route response
* Draw polyline and markers on map
* Show travel time and distance

### ✅ Hour 7: Traffic Simulation (Backend)

* Create microservice to randomize traffic weights
* `GET /api/traffic` to return traffic severity per segment

### ✅ Hour 8: Traffic Overlay + Rerouting (Frontend)

* Overlay traffic colors (green/yellow/red)
* Add reroute button
* Call route endpoint again with updated weights

### ✅ Hour 9: Security Enhancements

* Validate JWT in route/traffic endpoints
* Add RBAC middleware (User vs Admin roles)
* Use HTTPS-only transport (local + prod)

### ✅ Hour 10: Dockerization

* Create Dockerfiles for Angular + .NET + PostgreSQL
* Build docker-compose.yml
* Test orchestration locally

### ✅ Hour 11: Monitoring & Logging

* Add Prometheus exporter to backend
* Create Grafana dashboards
* Set up centralized logging with Loki

### ✅ Hour 12: Final Testing + Docs

* Run all test cases (manual + automated)
* Export Swagger/OpenAPI JSON
* Finalize README with setup instructions

---

## 13. Summary Table

| Section      | Key Takeaway                        |
| ------------ | ----------------------------------- |
| Architecture | Microservices + API Gateway (.NET)  |
| Structure    | Layered and modular with PostgreSQL |
| Design       | SOLID, DRY, YAGNI                   |
| DevSecOps    | CI/CD, Auth, Monitoring, Docker     |
| Dev Plan     | Modular, integrated, user-centric   |
