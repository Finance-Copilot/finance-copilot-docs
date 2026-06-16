# Architecture

## Overview

Finance Copilot menggunakan arsitektur modular berbasis Laravel yang dirancang untuk mendukung Personal Finance Management, Financial Planning, Analytics, Forecasting, dan Artificial Intelligence dalam satu platform yang scalable.

Arsitektur dibangun dengan prinsip:

* Domain Driven Design (Lite)
* Service Layer Pattern
* API First Architecture
* Queue Based Processing
* Event Driven Processing
* AI Ready Architecture

Tujuan utama arsitektur ini adalah memastikan sistem tetap cepat, mudah dikembangkan, dan mampu menangani proses analitik maupun AI tanpa membebani request pengguna.

---

# High Level Architecture

## System Landscape

```text
User
↓
PWA / Browser
↓
Filament + Laravel
↓
Application Services
↓
PostgreSQL

External Services

Telegram
↓
n8n
↓
Laravel API

OCR Provider
↓
Laravel API

OpenAI
↓
Laravel AI Services
```

---

# Architecture Layers

## Presentation Layer

Bertanggung jawab terhadap seluruh interaksi pengguna.

Technology:

* Filament v4
* Livewire
* Blade
* PWA

Responsibilities:

* Dashboard
* Forms
* Reports
* Widgets
* Settings

---

## Application Layer

Mengelola request dan orchestration.

Components:

* Controllers
* Actions
* DTOs
* Policies
* Form Requests

Responsibilities:

* Validation
* Authorization
* Request Handling
* Service Coordination

---

## Domain Layer

Tempat seluruh business logic.

Components:

* Services
* Domain Rules
* Financial Calculations

Responsibilities:

* Transaction Processing
* Budget Monitoring
* Goal Tracking
* Forecast Generation
* Financial Health Calculation

---

## Infrastructure Layer

Mengelola integrasi eksternal.

Components:

* OpenAI Client
* OCR Client
* Telegram Client
* Queue Workers
* Scheduler

Responsibilities:

* AI Integration
* OCR Integration
* External Communication

---

## Data Layer

Storage utama aplikasi.

Technology:

* PostgreSQL
* Redis

Responsibilities:

* Financial Data
* Forecast Cache
* AI Summary Cache
* Queue Storage

---

# Application Architecture

## Layered Flow

```text
Browser / PWA
↓
Filament Resources
↓
Controllers
↓
Services
↓
Repositories
↓
Database
```

---

## Request Lifecycle

```text
Request
↓
Validation
↓
Authorization
↓
Service Layer
↓
Repository
↓
Database
↓
Response
```

---

# Service Architecture

## Design Principle

Controller tidak boleh berisi business logic.

Controller hanya:

* Receive Request
* Validate Request
* Authorize Request
* Call Service

Business logic seluruhnya berada pada Service Layer.

---

## Service Flow

```text
Controller
↓
Service
↓
Repository
↓
Database
```

---

# Core Services

## TransactionService

Responsibilities:

* Create Transaction
* Update Transaction
* Cancel Transaction
* Transfer Processing

Dependencies:

* WalletService
* CategoryService

---

## WalletService

Responsibilities:

* Wallet Management
* Balance Synchronization
* Transfer Validation

---

## BudgetService

Responsibilities:

* Budget Monitoring
* Budget Usage Calculation
* Budget Alert Generation

---

## GoalService

Responsibilities:

* Goal Management
* Goal Progress Tracking
* Goal Contribution Handling

---

## ForecastService

Responsibilities:

* Burn Rate
* Cash Runway
* Monthly Forecast
* Goal Prediction
* Savings Prediction

Output:

```text
Forecasts Table
```

---

## ExecutiveSummaryService

Responsibilities:

* Monthly Summary
* Recommendations
* Risk Analysis
* Opportunity Analysis

Output:

```text
AiSummaries Table
```

Dependencies:

* ForecastService
* OpenAI Client

---

## FinancialHealthService

Responsibilities:

* Saving Rate
* Budget Discipline
* Cash Flow Stability
* Emergency Fund Readiness

Output:

```text
FinancialHealthScores Table
```

---

## OCRService

Responsibilities:

* OCR Extraction
* Receipt Parsing
* OCR Validation

Dependencies:

* OCR Provider
* OpenAI Client

---

## NotificationService

Responsibilities:

* Budget Alerts
* Goal Alerts
* Forecast Alerts
* Summary Alerts

Implementation:

```text
Laravel Notifications
```

---

# Forecast Architecture

## Forecast Generation Flow

Forecast tidak dihitung ketika Dashboard dibuka.

Forecast dihitung melalui Scheduler.

```text
Scheduler
↓
ForecastService
↓
Forecast Calculation
↓
Forecasts Table
↓
Dashboard
```

Benefits:

* Faster Dashboard
* Reduced Database Load
* Better Scalability

---

# AI Summary Architecture

## AI Summary Generation Flow

AI Summary tidak dijalankan realtime.

```text
Scheduler
↓
ExecutiveSummaryService
↓
OpenAI
↓
AiSummaries Table
↓
Dashboard
```

Benefits:

* Lower OpenAI Cost
* Better User Experience
* Faster Dashboard Rendering

---

# Queue Architecture

## Queue Processing

```text
Laravel
↓
Redis
↓
Queue Worker
```

---

## Async Jobs

### OCR Processing

```text
Upload Receipt
↓
Queue
↓
OCR Job
↓
Receipt Result
```

---

### Forecast Generation

```text
Scheduler
↓
Forecast Job
↓
Forecasts Table
```

---

### AI Summary Generation

```text
Scheduler
↓
AI Summary Job
↓
AiSummaries Table
```

---

### Notification Dispatch

```text
Notification
↓
Queue
↓
Telegram / Email
```

---

# Integration Architecture

## Telegram Integration

Purpose:

Quick Transaction Input

Flow:

```text
User
↓
Telegram Bot
↓
n8n
↓
Laravel API
↓
TransactionService
↓
Database
```

---

## OCR Integration

Purpose:

Receipt Digitization

Flow:

```text
Receipt Image
↓
OCR Provider
↓
OCR Result
↓
OpenAI Parsing
↓
Transaction Creation
```

---

## OpenAI Integration

Used For:

* OCR Parsing
* AI Categorization
* Executive Summary
* Financial Recommendation

---

# Deployment Architecture

## Production Architecture

```text
Cloudflare
↓
Nginx
↓
Laravel Application
↓
Redis
↓
PostgreSQL
```

---

## Scaling Strategy

### Application Layer

Scale Horizontally

```text
App Server 1
App Server 2
App Server 3
```

---

### Queue Layer

Scale Independently

```text
Queue Worker 1
Queue Worker 2
Queue Worker 3
```

---

### Database Layer

Future:

```text
Primary Database
↓
Read Replica
```

---

# Scheduler Architecture

## Daily Scheduler

00:30

Tasks:

* Forecast Generation
* Financial Health Score Calculation

---

## Monthly Scheduler

01:00 - Tanggal 1

Tasks:

* AI Executive Summary
* Monthly Financial Report

---

# Data Flow Architecture

## Transaction Flow

```text
Transaction Created
↓
Wallet Updated
↓
Budget Updated
↓
Goal Updated
↓
Dashboard Refreshed
```

---

## Forecast Flow

```text
Transactions
+
Budgets
+
Goals
+
Recurring Transactions
↓
Forecast Engine
↓
Forecasts Table
↓
Dashboard
```

---

## AI Flow

```text
Transactions
+
Forecasts
+
Goals
+
Budgets
↓
OpenAI
↓
AiSummaries
↓
Dashboard
```

---

# Architecture Principles

## Service First

Business logic hanya berada pada Service Layer.

---

## Async First

OCR, Forecast, AI, dan Notification harus berjalan melalui Queue.

---

## Cache Before Compute

Dashboard membaca hasil Forecast dan AI Summary yang sudah disimpan, bukan menghitung ulang.

---

## API First

Semua fitur harus dapat digunakan oleh:

* Web App
* PWA
* Future Mobile App

menggunakan API yang sama.

---

## Scalability

Sistem harus mampu berkembang tanpa perubahan arsitektur besar dengan menambahkan:

* Queue Workers
* Redis Cluster
* Read Replica
* Additional AI Providers
