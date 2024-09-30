# Farmer Scheme

Farmer Scheme is a full-stack online marketplace designed to optimize farmers' earnings through a dynamic real-time bidding system. This platform not only supports farmers by enabling them to receive the best possible prices for their products but also offers bidders a transparent and fair bidding environment.

## Project Overview

The purpose of this project is to provide a reliable and efficient marketplace for agricultural products where farmers can list their goods, bidders can place bids, and administrators can manage the marketplace operations. This platform addresses the need for farmers to gain direct access to the market, thereby enhancing their profitability.

## Features

- **Real-Time Bidding System**: Facilitates live auctions, allowing bidders to offer competitive prices for agricultural products.
- **User Authentication**: Secure authentication mechanisms for farmers, bidders, and administrators to protect data integrity and privacy.
- **Dynamic Product Listings**: Easy-to-use interface for farmers to list their products and for bidders to view available products.
- **Admin Dashboard**: Tools for administrators to oversee and manage user activity, auction events, and system settings.
- **Data-Driven Insights**: Analytics dashboard providing valuable insights into market trends and user activity to help farmers make informed decisions.

## Tech Stack

- **Frontend**: Angular
- **Backend**: Java with Spring and Hibernate
- **Database**: Oracle DB for advanced data management and robust transaction handling.

## User Roles

- **Farmers**: Can list their products for auction and view their auction history.
- **Bidders**: Can participate in auctions, view products, and place bids.
- **Administrators**: Manage user accounts, oversee auction processes, and access system analytics.

## Project Structure

Here is a breakdown of the key directories and files in the project:

- **admin/**: Contains components for admin functionalities.
- **apply-insurance/**, **claim-insurance/**, **view-insurance/**: Insurance-related components.
- **bidder-reg/**, **bidderlogin/**: Registration and login for bidders.
- **farmer-reg/**, **farmerlogin/**: Registration and login for farmers.
- **home/**: The homepage component.
- **model/**: Defines data models.
- **services/**: Contains Angular services for handling backend API requests.
- **environments/**: Angular environment configuration files.

## Getting Started

### Prerequisites

- Node.js
- Angular CLI
- Java JDK
- Maven
- Oracle Database

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/farmer-scheme.git
   cd farmer-scheme
   
2. **Set up the backend**:
   Navigate to the backend directory, build and start the Spring Boot application:
   ```bash
   cd backend
   mvn install
   mvn spring-boot:run

3. **Set up the frontend**:
   Navigate to the frontend directory and start the Angular application:
   ```bash
   cd ../frontend
   npm install
   ng serve

4. **Database Configuration**:
Configure the Oracle Database connection in the Spring Boot application's application.properties file.

### Usage

Visit [http://localhost:4200](http://localhost:4200) to access the application. Log in with the appropriate credentials for either a farmer, a bidder, or an administrator based on your role and needs.

### Contributing

Contributions to Farmer Scheme are welcome! If you have improvements or feature requests, please fork the repository and submit a pull request.

### Author

- **Vaishavi Vijayakandan** - *Author* - [VaishaviV](https://github.com/vaishavi)

